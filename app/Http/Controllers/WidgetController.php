<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\DB;

class WidgetController extends Controller {

	private $cannotModifyHeader;
	private $expressoVersion;
	private $request;
	private $params;
	private $result;
	private $error;	
	private $id;

	private $databaseType;

	private $db;
 
	private $db_host;
	private $db_port;
	private $db_name;
	private $db_user;
	private $db_pass;
	private $memcache = false;

	private $API_URL;

	public $bdcon;

	private $dbFields = array();

	function __construct(){

		// $this->setCannotModifyHeader(false);
		$this->databaseType = 1;
		
		$this->db_host = env('DB_HOST');
		$this->db_port = env('DB_PORT');
		$this->db_name = env('DB_DATABASE');
		$this->db_user = env('DB_USERNAME');
		$this->db_pass = env('DB_PASSWORD');

		// session_start();

		if (!isset($_SESSION)) {
			session_start();
			if ($this->getParam("auth") != "") {
				session_id($this->getParam("auth"));
			}
			$this->log_access();
		}

	}
	
	public function createMemcacheConnection() {
		if ($this->memcache == false) {
			$url  = parse_url( ini_get( 'session.save_path' ) );
			$this->memcache = new Memcached();
			$this->memcache->addServer( $url['host'], $url['port'],1);
		}
	}
    
	public function databaseConnect($database = "") {
		if ($database == "") {
			$database = $this->db_name;
		}
		$con_string = "host=" . $this->db_host . " port=" . $this->db_port . " dbname=" . $database . " user=" . $this->db_user . " password=" . 
		$this->db_pass;
		// echo $con_string;
		$this->bdcon = pg_connect($con_string);
		$stat = pg_connection_status($this->bdcon);
		if ($stat === PGSQL_CONNECTION_OK) {
			return true;
		} else {
			return false;
		}
	}

	public function getUnauthorizedView($title = "Ops!", $subtitle = "Ops, alguma coisa deu errado!",$description = "Você não possui o acesso necessário para visualizar a esta funcionalidade.",$hideHeader = false) {
		return $this->getDatabaseOfflineView($title,$subtitle,$description,$hideHeader);
	}

	public function getDatabaseOfflineView($title = "Ops!", $subtitle = "Ops, alguma coisa deu errado!",$description = "Não foi possível conectar com o nosso banco de dados ou com a API do serviço que você está utilizando. Obrigado pela sua paciência enquanto tentamos colocar nosso serviço on-line novamente.",$hideHeader = true) {
        $view = new EWListView();
		$view->hideSearch(true);
		$view->hideHeader($hideHeader);
		$view->setWidgetTitle($title);
		
        $item = new EWListViewItem();
        // $item->setIcon("icons:cloud-off");
        $item->setTitle($subtitle);
        $item->setDescription($description);
		$item->setViewTypeCard(true);

        $item->addActionButton("refresh","ew_refresh",array(),2,"Tentar Novamente","fabTheme");

        $view->addItem($item->getItem());

        return $view;
	}
	
	public function db_query($sql) { 
		if (!$this->bdcon) {
			$this->databaseConnect();
		}
		$result = pg_query($this->bdcon, $sql);
		
		return $result;
	}

	public function getAuth() {
		return $this->getParam("auth");
	}


	public function hasCache($useAuth) {
		$cacheEnabled = $this->getConfigValue("CACHE_ENABLED");
		if ($cacheEnabled == "1") {
			$this->createMemcacheConnection();
			$currentCache = $this->getCache($useAuth);
			if ($currentCache == false) {
				return false;
			} else {
				$this->setResult($currentCache);
				return true;
			}
		} else {
			return false;
		}
	}

	public function getCacheKeyName($useAuth = true, $useParams = true, $resource = false) {
		$request = $this->getRequest();
		$params = $this->getParams();
		$newParams = array();
		// $useAuth = true;
		// $useParams = false;
		$auth = "";
		if (count($params)) {
			foreach ($params as $key => $value) {
				if ($key != "auth") {
					$newParams[$key] = $value;
				} else {
					if ($useAuth) {
						$auth = $value;
					}
				} 
			}
		}
		if ($useAuth) {
			$newParams["auth"] = $auth;
		}
		if ($resource == false) {
			$resource = $request->uri;
		}
		$newParams = array_merge($newParams,array("resource" => $resource));

		$keyName = md5(json_encode($newParams));
		return $keyName;
	}

	public function getCacheValue($keyName) {
		$cacheEnabled = $this->getConfigValue("CACHE_ENABLED");
		if ($cacheEnabled == "1") {
			$this->createMemcacheConnection();
			$result = $this->memcache->get($keyName);
			if ($result != "") {
				$result['cached'] = true;
				return $result;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	public function getCache($useAuth = true, $useParams = true, $resource = false) {
		$keyName = $this->getCacheKeyName($useAuth,$useParams,$resource);
		return $this->getCacheValue($keyName);
	}

	public function saveKeyToCache($keyName,$response,$expireMinutes) {
		$time = (intval($expireMinutes) * 60);
		if ($this->memcache != false) {
			$this->memcache->set($keyName,$response,$time  );
		}		
	}

	public function saveToCache($response,$expireMinutes,$useAuth = true, $resource = false,$useParams = true) {
		$cacheEnabled = $this->getConfigValue("CACHE_ENABLED");
		if ($cacheEnabled == "1") {
			$currentCache = $this->getCache($useAuth,$useParams,$resource);
			if ($currentCache == false) {
				$keyName = $this->getCacheKeyName($useAuth,$useParams,$resource);
				$this->saveKeyToCache($keyName,$response,$expireMinutes);
			}
		}
	}

	public function isMobile() {
		if ($this->getParam("isMobile") == "true") { 
			return true;
		} else {
			return false;
		}
	}

	public function getConfigValue($name) {
		$config = DB::table('config')->where('name','=',$name)->get()->first();
		return $config->value;
	}

	protected function setRequest($request){
		$this->request = $request;
	}
	
	public function getRequest(){
		return $this->request;
	}
	
	
	
	protected function setParams($params){		
		$this->params = $params;
	}
	
	public function getParams(){	
		return $this->params;
	}
	

	public function getFiles() {
		return $_FILES;
	}
	
	public function getParam($param){
		if (isset($_POST[$param])) {
			return $_POST[$param];
		} else {
			return '';
		}
	}
	
	public function setError($error) {
		$this-> error = $error;
	}
	
	protected function getError() {
		return $this-> error;
	}


	public function getCurrentRoute() {
		$routeURL = $this->getParam("route");
		if ($routeURL == "") {
			$routeURL = $_SERVER['REQUEST_URI'];
		}

		$route = DB::table('routes')->where('url','=',$routeURL)->get()->first();

		return (array) $route;

	}

	public function requestRouteUserName($view) {
		$route = $this->getCurrentRoute(); 
		$view->runAction("ew-list-view",array("route" => $this->getRouteForClass("Admin\Login@load"), "routeID" => $route['id']),true);
	}


	public function getRouteUser() {
		$route = $this->getCurrentRoute(); 
		$routeID = $route['id'];
		$userName = \Session::get('route_' . $routeID . '_username');
		$passWord = \Session::get('route_' . $routeID . '_password');

		if ($userName != "") {
			return array("username" => $userName, "password" => $passWord, "route" => $route);
		} else {
			return false;
		}
	}

	public function log_access() {
		$route = $this->getCurrentRoute();
		$userID = $this->getUserId();
		$isMobile = $this->isMobile();

		if ($isMobile == false) {
			$str_mobile = 'false';
		} else {
			$str_mobile = 'true';
		}

		if (isset($route['id'])) {
			if (($userID != "") && ($route['id'] != "")) { 

				$log = DB::table('access_log')
				->whereRaw('access_date = current_date')
				->where('user_id','=',$userID)
				->where('route_id','=',$route['id'])
				->where('access_mobile','=',$str_mobile)->get()->first();
				
				if (isset($log->id)) {
					DB::table('access_log')->where('id','=',$log->id)->update(array(
						'access_qtd' => $log->access_qtd + 1
					));
					
				} else {
					DB::table('access_log')->insert(array(
						'route_id' => $route['id'],
						'user_id' => $userID,
						'access_date' => \DB::raw('CURRENT_TIMESTAMP'),
						'access_qtd' => 1,
						'access_mobile' => $str_mobile
					));
				}

			}
		}
	}
	


	public function getUserId() {
		
		if (!isset($_SESSION)) {
			session_start();
			session_id($this->getParam("auth"));
		}

		if (!isset( $_SESSION['user_id'])) {
			return 0;
		} else {
			return $_SESSION['user_id'];
		}
		
	}

	public function getUser() {
		$user_id = $this->getUserId();
		$user = \DB::table('users')->where('id',$user_id)->get();
		return  $user[0];
	}


	public function getPassword() {
		return $_SESSION['password'];
	}


	public function getRouteForClass($routeClass) {

		$route = DB::table('routes')->where('class_method','=',$routeClass)->get()->first();
		return $route->url;

	}

	public function getUserData(){

		// $user_id = $this->getUserId();
		// $sql = "select value from user_settings where user_id = '" . $user_id . "' and 
		// name = 'userData'";
		// $res = $this->db_query($sql);

		// $result = pg_fetch_all($res);
		// $result = json_decode($result[0]['value'], true);

		$data = DB::table('dashboard_widgets as dw')
				->join('widgets as w','w.id','=','dw.widget_id')
				->join('routes as r','r.id','=','w.route_id')
				->select('dw.*','w.name','w.icon','r.url')
				->where('dw.user_id','=',$this->getUserId())
				->where('w.enabled','=','true')
				->where('r.enabled','=','true')
				->get();

        $usedColumns = array();
        foreach ($data as $widget) {

            $column = array("autoload" => true,
                            "class" => "EWColumn",
                            "element" => "ew-list-view",
                            "fullScreen" => false,
                            "height" => $widget->height,
                            "id"  => $widget->id,
                            "multiColumn" => false,
                            "name" => $widget->name,
                            "page" => $widget->page,
                            "pageid" => "page" . $widget->page,
                            "params" => array("route" => $widget->url),
                            "position" => array("left" => "", "top" => ""),
                            "thumb" => $widget->icon,
                            "widgetId" => $widget->widget_id,
                            "width" => $widget->width);

            array_push($usedColumns,$column); 

        }

        $result['usedColumns'] = $usedColumns;


        $data = DB::table('dashboard_pages as dp')->where('dp.user_id','=',$this->getUserId())->get();

        $usedPages = array();
        $order = 0;
        foreach ($data as $page) {

            $pageData = array(
                'name' => $page->name,
                'id' => $order,
                'icon' => $page->icon,
            );
            $order = $order + 1;
            array_push($usedPages,$pageData); 
		}
		
		if (count($usedPages) == 0) {
			$usedPages = json_decode($this->getConfigValue("DEFAULT_PAGES"));
		}

		$result['globalParams']['pages'] = $usedPages;
		$result['globalParams']['theme'] = $this->getDashboardSetting("theme");
		$result['globalParams']['wallpaper'] = $this->getDashboardSetting("wallpaper");
		
		return $result;
	}

	public function getDashboardSetting($name) {
		$user_id = $this->getUserId();
		$setting = DB::table('dashboard_settings')->where(array('user_id' => $user_id, 'name' => $name))->get()->first();
		if (isset($setting->value)) {
			if ($setting->value != "") {
				return $setting->value; 
			} 
			
		} else {
			$retVal = "";
			if ($name == "theme") {
				$retVal = $this->getConfigValue("DEFAULT_THEME");
			}
			if ($name == "wallpaper") {
				$retVal = $this->getConfigValue("DEFAULT_WALLPAPER");
			}
			return $retVal;
		}
	}

	public function saveDashboardSetting($name,$value) {
		$user_id = $this->getUserId();
		DB::table('dashboard_settings')->updateOrInsert(array('user_id' => $user_id, 'name' => $name),['value' => $value]);
		return true;
	}

	// public function saveSetting($name,$value) {

	// 	$user_id = $this->getUserId();
	// 	$sql_check = "select name from user_settings where user_id = '" . $user_id . "' and name = '" . $name . "'";

	// 	$res_exists = $this->db_query($sql_check);

	// 	if (pg_num_rows($res_exists) > 0) {
	// 		$sql = 'update user_settings set value = \'' . $value . '\' where user_id = \'' . $user_id . '\' and name = \'' . $name . '\''; 
	// 	} else {
	// 		$sql = 'insert into user_settings (user_id, name, value) values(\'' . $user_id . '\',\'' . $name . '\',\'' . $value . '\')'; 
	// 	}
 
	// 	$result = $this->db_query($sql);
	// 	return $result;
	// }



	public function isAdmin($runExecption = true){
		return true;
	}
	

	public function getApiData($url,$post_data = false,$overrideOptions = array()) {
        $ch = curl_init();
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_TIMEOUT,5);
		$proxy = $this->getConfigValue("PROXY_URL");
		if ($proxy != "") {
			curl_setopt($ch, CURLOPT_PROXY, $proxy);
		}
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  
        // }        
        
		curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_WHATEVER);
		curl_setopt($ch, CURLOPT_BINARYTRANSFER, TRUE);
		// curl_setopt($ch, CURLOPT_SSL_CIPHER_LIST, 'ecdhe_ecdsa_aes_128_sha');
		curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
		// curl_setopt($ch, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1);
		// curl_setopt($ch, CURLOPT_SSL_CIPHER_LIST, 0x0033);
		
		
        
        if ($post_data != false) {
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
			curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/x-www-form-urlencoded"));
        } else {
			curl_setopt($ch, CURLOPT_HTTPGET, true);
		}
		
		curl_setopt_array($ch,$overrideOptions);

        $result = curl_exec($ch);
        if (curl_error($ch)) {
			$error_msg = curl_error($ch);
			echo $error_msg;
        }
        return $result;
    }
	
	
	public function getJsonApiData($url,$post_data = false,$overrideOptions = array()) {
		$result = $this->getApiData($url,$post_data,$overrideOptions);
        return json_decode($result);
    }
				
}

