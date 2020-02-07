<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Utils\BaseResource;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate; 

class MeusWidgetsController extends WidgetController
{

	private $DEBUG = false;
	private $action = "ew-list-view";

	public function load()	{

		$viewName = $this->getParam("view");

		if(Gate::denies('widgets-adm')){
			$view = $this->getUnauthorizedView();
		} else {
			if ($viewName == "") 			 {	$view = $this->getMyWidgetsView(); $found = true; }
			if ($viewName == "links") 		 {	$view = $this->getLinksView(); $found = true; }
			if ($viewName == "edit") 		 {	$view = $this->getEditView();  $found = true;  }
			if ($viewName == "save") 		 {	$view = $this->getSaveView();  $found = true; }
			if ($viewName == "code") 		 {	$view = $this->getCodeView(); $found = true; }
			if ($viewName == "publish") 	 {	$view = $this->getPublishView(); $found = true; }
			if ($viewName == "send_publish") {	$view = $this->getSendPublishView(); $found = true; }
			if ($viewName == "admin_delete") 	 	 {	$view = $this->getAdminDeleteView();	}
		}

		$view->setBackgroundColor("amber");
		$view->hideCode();
		return response()->json($view);
	}

	public function getAdminDeleteView() {
		$view     = new EWListView("Excluir Widget", true);

		$widgetID    = $this->getParam("widgetID");
		$routeID     = $this->getParam("routeID");

		DB::table('routes')->delete($routeID);
		DB::table('widgets')->delete($widgetID);
		DB::table('config')->where('widget_id','=',$widgetID)->delete();

		$view->runAction("ew_closeAndRefresh");
		$view->runAction("ew_closeAndRefresh");
		$view->showMessage("Widget Excluido com Sucesso!");
		return $view;
	}

	public function getPublishView() {

		$view = new EWListView("Importar Widget",true);

		$view->addUploadFile("fileContent");
		$view->addHiddenInput("view", "send_publish");
		$view->setFab("av:play-arrow", "Enviar", "ew_send");

		return $view;
	}

	public function getSendPublishView() {
		$view = new EWListView("Importar Widget",true);

		foreach ($_FILES as $file) {
			$retVal = $this->importWidgetFromFile($file['tmp_name']);

			if ($retVal == true) {
				$view->runAction("ew_closeAndRefresh");
				$view->showMessage("Widget Importado com Sucesso!");
			} else {
				$view->addErrorItem("Não foi possível importar, já existe um widget com esta classe no sistema.");
			}
		}

		return $view;
	}


	public function importWidgetFromFile($fileName) {
		$content = file_get_contents($fileName);
		$widgetData = json_decode($content);
		// $view->printArray($widgetData);

		$className = explode("@",$widgetData->route->class_method)[0];

		$qtd_route  = DB::table('routes')->where('class_method','like',$className . '@%')->count();

		if ($qtd_route != 0) {
			return false;
			
		} else {
			$routeID = $this->saveRoute("",$widgetData->route->url,$widgetData->route->class_method,$widgetData->route->code,$widgetData->route->groups_acl);
			$widgetID = $this->saveWidget("",$widgetData->widget->name,$widgetData->widget->description,$widgetData->widget->icon,$widgetData->widget->width,$widgetData->widget->height,$routeID,$widgetData->widget->groups_acl);

			if (isset($widgetData->config)) {
				if (count($widgetData->config) != 0) {
					foreach ($widgetData->config as $conf) {
						DB::table('config')->insert(["name" => $conf->name, "value" => $conf->value, "widget_id" => $widgetID ]);
					}
					
				}
			}

			return true;
		}
	}

	public function export(Request $request, $widgetID) {
		if(Gate::denies('widgets-adm')){
			 echo "Você não está autorizado a executar esta ação!";
		} else {
			$widget = DB::table('widgets')->where('id',$widgetID)->first();
			$route  = DB::table('routes')->where('id',$widget->route_id)->first();
			$config  = DB::table('config')->where('widget_id',$widgetID)->get();
			$fileName = explode("@",$route->class_method)[0];

			$data = $this->getExportInfo($widget,$route,$config);
			$response = response($data, 200);
			$response->header('Content-Type', 'application/json');
			$response->header('Content-Disposition', 'attachment; filename="'. $fileName .'.json"');
			return $response;
		}
	}


	public function getExportInfo($widget,$route,$config) {
		
		$view = new EWListView("Exportar Widgets");

		if ($route->code == "") {
			$fileName = $this->getFileName($route->class_method);
			$sourceCodeOriginal = file_get_contents($fileName);
			$route->code = base64_encode($sourceCodeOriginal);
		}
		$configs = array();
		foreach ($config as $conf) {
			array_push($configs,(array) $conf);
		}

		$exportInfo = json_encode(array("widget" => (array) $widget , "route" => (array) $route, "config" => (array) $configs));
		return $exportInfo;
	}

    //DB FUNCTIONS
	public function saveWidget($widgetID,$title,$description,$icon,$width,$height,$routeID,$groups_acl) {
		if ($widgetID == "") { $widgetID = false; }

		$data = array(	'name' => $title, 
						'description' => $description,
						'height' => $height,
						'width' => $width, 
						'route_id' => $routeID, 
						'groups_acl' => $groups_acl,
						'status_id' => 0);

		if ($icon != "") {
			$data['icon'] = $icon;
		}

		if ($widgetID == false) {
			$widgetID = DB::table('widgets')->insertGetId($data);
		} else {
			DB::table('widgets')->where('id',$widgetID)->update($data);
		}
		return $widgetID;
	}

	public function saveRoute($routeID,$routeUrl,$routeClass,$b64_content = "",$groups_acl = "") {
		if ($routeID == "") { $routeID = false; }
		if ($b64_content == "") {
			$data = ['url' => $routeUrl, 'groups_acl' => $groups_acl, 'class_method' => $routeClass];	
		} else {
			$data = ['url' => $routeUrl, 'groups_acl' => $groups_acl, 'class_method' => $routeClass,'code' => $b64_content];
		}
		
		if ($routeID == false) {
			$routeID = DB::table('routes')->insertGetId($data);
		} else {
			DB::table('routes')->where('id',$routeID)->update($data);
		}
		return $routeID;
	}


	public function getWidgetByID($widgetID)
	{
		$data = DB::table('widgets AS w')
			->leftjoin('routes AS r','r.id','=','w.route_id')
			->select('w.*','r.url','r.class_method','r.code')
			->where('w.id', $widgetID)
			->get();

		$widget = (array) $data[0];
		return $widget;
	}

	public function getRouteByID($routeID)
	{
		$sql = "select * from routes where id = " . $routeID;
		$routes = $this->db_query($sql);
		$route = pg_fetch_all($routes);
		return $route[0];
	}

	public function getRouteByRouteURL($routeURL,$ignoreRouteID = 0)
	{
		$addSql = "";
		if ($ignoreRouteID != 0) {
			$addSql = " and id != " . $ignoreRouteID;
		}
		$sql = "select * from routes where url = '" . $routeURL . "'" . $addSql;
		$retVal = false;
		$routes = $this->db_query($sql);
		if (pg_num_rows($routes) >= 1) {
			$route = pg_fetch_all($routes);
			$retVal = $route[0];
		}
		return $retVal;
	}

	public function updateWidgetStatus($widgetID,$status) {
		$sql = "update widgets set status_id = " . $status . " where id = " . $widgetID;
		$this->db_query($sql); 
	}

	public function processFileUpload() {

		$files 			= $this->getFiles();
		$has_files = false;
		$has_icon = false;
		$b64_icon = "";
		$has_json = false;
		$json = "";

		if (count($files)) {
			foreach ($files as $file) {
				$content = file_get_contents($file['tmp_name']);
				$fileExtension = substr($file['name'], strlen($file['name']) - 3, 3);
				if ($fileExtension == "php") {
					$has_files = true;
					$b64_content = base64_encode($content);
				}
				if (($fileExtension == "png") || ($fileExtension == "jpg")) {
					$has_icon = true;
					$b64_icon = base64_encode($content);
				}
				if ($fileExtension == "json") {
					$has_json= true;
					$json = $content;
				}

			}
		}

		if ($has_files == false) {
			$name 			= $this->getParam("name");
			$class_method 	= $this->getParam("class_method");
			$b64_content    = $this->getDefaultFileContent($class_method, $name);
		}

		return array ("has_icon" => $has_icon, "icon_base64" => $b64_icon, "has_files" => $has_files, "file_base64" => $b64_content, "has_json" => true, "json" => $json);
	}

	public function validateForm($name,$routeURL,$width,$height,$routeID = 0) {
		$validForm = true;
		$message = "";
		// if (!preg_match('/^[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*$/', $name)) {
		// 	$validForm = false;
		// 	$message = "'Nome da Classe' Não Informado / Inválido!";
		// }

		if (substr($routeURL,0,1) != "/") {
			$routeURL = '/' . $routeURL;
		} 
		// if (!preg_match('/^[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*$/', $name)) {
		// 	$validForm = false;
		// 	$message = "'Nome da Classe' Não Informado / Inválido!";
		// } else {
			$route = $this->getRouteByRouteURL($routeURL,$routeID);

			if ($route != false) {
				$validForm = false;
				$message = "'Rota' Já está em uso / Inválida!";
			}
		// }

		if (!is_numeric($width)) {
			$validForm = false;
			$message = "'Largura' Não informada / Inválida!";
		}

		if (!is_numeric($height)) {
			$validForm = false;
			$message = "'Altura' Não informada / Inválida!";
		}

		if (!(($width >= 1 && $width <= 10) && ($height >= 1 && $height <= 10))) {
			$validForm = false;
			$message = "'Largura e Altura' Devem ser valores entre 1 e 10.";
		}

		// if (substr($routeFileName,0,strlen('/ew-api/')) != '/ew-api/') {
		// 	$validForm = false;
		// 	$message = "'Arquivo PHP' deve começar com '/ew-api/'";
		// }

		//if (file_exists(API_DIRECTORY."/../../bower_components" . $routeFileName)) {
		if (class_exists($name)) {
			$validForm = false;
			$message = "Nome da classe já está em uso / Inválida!";
		}

		return array("valid" => $validForm, "message" => $message);
	}


	// private $commands = array();

	// public function clearCommands() {
	// 	$this->commands = array();
	// }
	
	// public function addCommand($cmd,$sshpass = false) {
	// 	if ($sshpass == true) {
	// 		$PASSWORD = $this->getPassword();
	// 		$cmd = 'sshpass -p "' . $PASSWORD . '" ' . $cmd; 
	// 	}
	// 	$this->commands[] = $cmd;
	// }

	// public function runCommands($BASE_DIR = "",$log = false) {
	// 	$output = '';
	// 	if ($log == true) {
	// 		echo "\n\n";
	// 	}
	// 	foreach ($this->commands as $cmd) {
	// 		$COMMAND = "";
	// 		if ($BASE_DIR != "") {
	// 			$COMMAND = "cd " . $BASE_DIR . " && ";
	// 		}
	// 		$COMMAND .= $cmd;
	// 		if ($log == false) {
	// 			$output .= shell_exec($COMMAND);
	// 		} else {
	// 			echo $COMMAND . "\n";
	// 		}
			
	// 	}
	// 	return $output;
	// }

	public function clearStrValues($value) {
		$retVal = str_replace("'","",str_replace("\"","",str_replace("&","",$value)));
		return $retVal;
	}

	public function validadeStrCommand($fieldName,$value,$maxlength = 40) {
		$retVal = "";
		if ($value == "") {
			$retVal = $fieldName . " não informado/inválido!";		
		}
		if (strlen($value) >= $maxlength) {
			$retVal = $fieldName . " é maior do que " . $maxlength . " caracteres.";
		} 
		
		return $retVal;
	}

	public function getDefaultFileContent($className, $title = "")
	{

		$arrClass = explode('@',$className);

		$nameSpace = explode('\\',$arrClass[0]);
		

		$fileContent = '<?php 

namespace App\Http\Controllers\\' . $nameSpace[0] . ';

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;

class ' . $nameSpace[1] . ' extends WidgetController {
	public function ' . $arrClass[1] . '() {
		$view = new EWListView("' . $title . '");
		
		return response()->json($view);
	}
}
?>';
		return base64_encode($fileContent);
	}

	public function getFileName($class_method) { 
		$sourceFileCode = str_replace('\\','/',explode('@',$class_method)[0]);
		$fileName = "/var/www/app/Http/Controllers/" . $sourceFileCode . ".php";

		return $fileName;
	}

	public function getCodeDiffView()
	{
		$view = new EWListView("", true);

		$routeID = $this->getParam("routeID");
		$widgetID = $this->getParam("widgetID");

		$route = $this->getRouteByID($routeID);

		
		$fileName = $this->getFileName($route['class_method']);
		$sourceCodeOriginal = file_get_contents($fileName);

		if ($route['code'] != '') {
			$sourceCode = base64_decode($route['code']);
		} else {
			$sourceCode = $sourceCodeOriginal;
		}

		$view->addCodeEditorInput("codeContent", $sourceCode,$sourceCodeOriginal);

		$view->setWidgetTitle("Diferenças: CODIGO | editado");
		$view->setFab("arrow-back", "Enviar", "ew_close");
		return $view;
	}

	public function getCodeView()
	{
		$view = new EWListView("", true);

		$routeID = $this->getParam("routeID");
		$widgetID = $this->getParam("widgetID");
		$codeContent = $this->getParam("codeContent");

		if ($codeContent != '') {

			$route = $this->getRouteByID($routeID);

			$b64_content = base64_encode($codeContent);
			$data = ['code' => $b64_content];
			DB::table('routes')->where('id',$routeID)->update($data);

			$this->updateWidgetStatus($widgetID,0);

			$view->runSignal("ew-refresh-route",array("route" => $route['url']),false);

			$view->showMessage("Widget Atualizado com Sucesso!");

		}

		$route = $this->getRouteByID($routeID);

		if ($route['code'] != '') {
			$sourceCode = base64_decode($route['code']);
		} else {
			//$fileName = API_DIRECTORY . '/../../bower_components/ew-api/' . $route['route_foldername'] . $route['route_filename'];
			$sourceFileCode = str_replace('\\','/',explode('@',$route['class_method'])[0]);
			$fileName = "/var/www/app/Http/Controllers/" . $sourceFileCode . ".php";
			$sourceCode = file_get_contents($fileName);
		}

		$view->addCodeEditorInput("codeContent", $sourceCode);

		$view->addHiddenInput("route", $this->getParam("route"));
		$view->addHiddenInput("routeID", $this->getParam("routeID"));
		$view->addHiddenInput("widgetID", $this->getParam("widgetID"));
		$view->addHiddenInput("view", "code");
		$view->setWidgetTitle("Alterar Código Fonte: " . $route['class_method']);
		$view->setFab("av:play-arrow", "Enviar", "ew_send",array("route" => $this->getParam("route")));
		return $view;
	}

	public function addWidgetInfoToView($view,$widgetID,$routeID) {

		$widget = $this->getWidgetByID($widgetID);
		$route = $this->getRouteByID($routeID);

		$view->addPaperItemImage("data:image/jpeg;base64," . $widget['icon'], $widget['name'], $widget['description']);
		$item = $view->getLastItem();
		$item->addActionButton("av:play-arrow",'ew-list-view',array("route" => $widget['url']),1,'',"","","","120","120","contain",true);
		$view->updateLastItem($item);

		$view->addPaperItemIcon("icons:info","Status",$this->getStatusTitleById($widget['status_id']));

		// $sqlAdmins = "select * from ew_widgets_users ewu where ewu.admin_level = 1 and ewu.widget_id = " . $widgetID;
		// $data = $this->db_query($sqlAdmins);
		// $users = pg_fetch_all($data);

		// $ldap = new LdapAdapter();

		// $view->addHeaderItem("Desenvolvedores");
		// foreach ($users as $admin) {
		// 	$user = $ldap->getUserById($admin['user_id']);
		// 	$view->addContactItem($user[0]['cn'],$user[0]['mail'],$admin['user_id']);
		// }

		// if (isset($route['route_issue_id'])) {
		// 	$view->addHeaderItem("Ticket");
		// 	$paramsRedmine = $this->getRedmineParams("detail",array("issueID" => $route['route_issue_id']));
		// 	$view->addPaperItemIcon("icons:assignment","Ticket","#" . $route['route_issue_id'],$this->action,$paramsRedmine);
		// }

		return $view;
	}

	public function addUpdateFormToView($view)
	{
		$widgetID = $this->getParam("widgetID");
		$routeID = $this->getParam("routeID");

		if ($widgetID == '') {
			$view->setWidgetTitle("Novo Widget");

			$widget = array(
				"width" => 2, 
				"height" => 7, 
				'name' => 'Ola Mundo', 
				'groups_acl' => '',
				'description' => 'Exemplo de Widget');
			$route = array(
				'class_method' => 'Widgets\OlaMundo@load', 
				'groups_acl' => '',
				'url' => '');
			$requiredRoute = false;

		} else {
			$widget = $this->getWidgetByID($widgetID);
			$route = $this->getRouteByID($routeID);

			$view = $this->addWidgetInfoToView($view,$widgetID,$routeID);

			if (Gate::allows('widgets-adm')) {
				$view->addActionToolbarButton("delete", $this->action, $this->getRouteViewParams("admin_delete",$widgetID,$routeID));
			}

			$view->addActionToolbarButton("icons:receipt", $this->action, array( "route" => $this->getRouteForClass("Admin\WidgetPages@load"), "widget_id" => $widgetID));

			$view->addActionToolbarButton("settings", $this->action, array( "route" => $this->getRouteForClass("Admin\Config@load"), "widget_id" => $widgetID));
			
			$requiredRoute = true;
		}
		
		$view->addTextInput("name", "Titulo do Widget", $widget['name'], true, "", "");
		$view->addTextInput("descricao", "Descrição do Widget", $widget['description'], true, "", "");
		$view->addTextInput("width", "Largura", $widget['width'], true, "", "");
		$view->addTextInput("height", "Altura", $widget['height'], true, "", "");
		$view->addTextAreaInput("groups_acl","Grupos com permissão para este Widget. Exemplo: widgets-adm;widgets-celepar",$widget['groups_acl'],false);
		
		$view->addHeaderItem("Informações de Código");
		$view->addTextInput("class_method", "[NameSpace\Classe@Método]", $route['class_method'], true);
		$view->addTextInput("routeURL", "Rota", $route['url'], $requiredRoute,  "OPCIONAL: Será gerada uma rota automaticamente, ou preencha este campo no padrão informado na AJUDA.", "");

		$view->addTextAreaInput("route_groups_acl","Grupos com permissão para esta ROTA. Exemplo: widgets-adm;widgets-celepar",$route['groups_acl'],false);

		// if ($widgetID != '') {
		// 	$view->addTextInput("routeFoldername", "Pasta do Arquivo PHP", $route['route_foldername'], true, "", "");
		// 	$view->addTextInput("routeFilename", "Arquivo PHP", $route['route_filename'], true, "", "");
		// }
		$view->addUploadFile("fileContent");
		$view->addHiddenInput("route", $this->getParam("route"));
		$view->addHiddenInput("routeID", $this->getParam("routeID"));
		$view->addHiddenInput("widgetID", $this->getParam("widgetID"));
		$view->addHiddenInput("view", "save");
		$view->setFab("av:play-arrow", "Enviar", "ew_send");

		return $view;
	}

	public function getSaveView()
	{
		$view = new EWListView("Editar Widget", true);

		$routeID 		= $this->getParam("routeID");
		$widgetID 		= $this->getParam("widgetID");

		$isCreating = false;
		if ($widgetID == "") {
			$isCreating = true;
		}

		$name 			= $this->getParam("name");
		$descricao		= $this->getParam("descricao");
		$width 			= $this->getParam("width");
		$height 		= $this->getParam("height");
		$routeURL 		= $this->getParam("routeURL");
		$class_method 	= $this->getParam("class_method");
		$userID 		= $this->getUserId();
		$widget_groups_acl = $this->getParam("groups_acl");
		$route_groups_acl = $this->getParam("route_groups_acl");
		// $routeFileName  = $this->getParam("routeFilename");
		// $routeFoldername  = $this->getParam("routeFoldername");

		if ($routeURL == '') {
			$routeURL = "/api/user/" . $userID . "/" . str_replace('\\','/',explode('@',$class_method)[0]) . rand(1, 100000);
		}
		// if ($routeFileName == '') {
		// 	$routeFileName = $name . ".php";
		// }
		
		$files = $this->processFileUpload();

		$has_icon    = $files['has_icon'];
		$has_files   = $files['has_files'];
		$has_json    = $files['has_json'];
		$json		 = $files['json'];
		$b64_content = $files['file_base64'];
		$b64_icon    = $files['icon_base64'];

		$validation = $this->validateForm($class_method,$routeURL,$width,$height,$routeID);

		if ($validation['valid']) {

			$icon = "";
			if ($has_icon) {
				$icon = $b64_icon;
			}
			$base64_file = "";
			if ($widgetID == ""){
				$widgetID == false;
				$routeID = false;
				//DEFAULT FILE CONTENT
				$base64_file = $b64_content;
			}

			$routeID = $this->saveRoute($routeID,$routeURL,$class_method,$base64_file,$route_groups_acl);
			$widgetID = $this->saveWidget($widgetID,$name,$descricao,$icon,$width,$height,$routeID,$widget_groups_acl);

			$route = $this->getRouteByID($routeID);

			if ($isCreating) {
				$widgetToAdd = $this->getWidgetByID($widgetID);
				$widgetToAdd['element'] = 'ew-list-view';
				$widgetToAdd['params'] = array("route" => $routeURL); //json_decode($widgetToAdd['params']);
	
				$view->runSignal("ew-home-add-widget",$widgetToAdd);
				$view->runAction("ew_closeAndRefresh",array());

				$view->printArray($widgetToAdd);
				$view->showMessage("Widget Criado com Sucesso!");
			} else {
				$view->runSignal("ew-refresh-route",array("route" => $route['url']));
				$view->runAction("ew_closeAndRefresh");
				$view->showMessage("Widget Atualizado com Sucesso!");
			}

		} else {
			$view = $this->addUpdateFormToView($view);
			$view->showMessage($validation['message']);
		}
		
		return $view;
	}


	public function getLinksView() {
		$view = new EWListView("Links Úteis", true);

		$URL_ICONS = "https://www.webcomponents.org/element/@polymer/iron-icons/demo/demo/index.html";
		$URL_REDMINE = "https://redmine.expresso.celepar.parana/projects/ewidgets/repository";

		$codeFiles = array(
			"app/Utils/EWListView.php",
		"app/Utils/EWListViewItem.php",
		"app/Http/Controllers/WidgetController.php"
	);

		// $paramsRedmine = $this->getRedmineParams("issues");
		$view->addHeaderItem("Widgets Úteis");
		// $view->addPaperItemIcon("./api/rest/Icon?id=36","Redmine","Acompanhe as tarefas cadastradas no Redmine do projeto.",$this->action,$paramsRedmine);
		// $view->addPaperItemImage("./api/rest/Icon?id=3","Documentação","Widget de Documentação.",$this->action,array("route" => "./api/rest/Docs"));
		$view->addPaperItemIcon("","Demonstração","Widget de Demonstração do ListView com códigos de exemplo.",$this->action,array("route" => $this->getRouteForClass("Widgets\Demonstracao@load")));

		$view->addHeaderItem("Código Fonte de Referência");
		foreach ($codeFiles as $fileName) {
			$view->addPaperItemIcon("icons:code",$fileName,"",$this->action,array("route" => "./api/rest/ew-home/CodeView", "fileName" => $fileName),true,"small");
		}
		$view->addPaperItemIcon("icons:pets","Pacote de ícones disponíveis na plataforma","","ew_openURL",array("url" => $URL_ICONS),true,"small");
		return $view;
	}

	public function getEditView()
	{
		$view = new EWListView("Editar Widget", true);
		
		$view = $this->addUpdateFormToView($view);
		return $view;
	}

	public function getMyWidgetsView()
	{
		$userID = $this->getUserId();
		$view = new EWListView("Meus Widgets");
		$admin = false;

		$data = DB::table('widgets AS w')
				->join('routes AS r','r.id','=','w.route_id')
				->select('w.*','r.url','r.class_method','r.code')
				->where('w.enabled', true)
				->where('w.groups_acl','!=','widgets-adm')
				->orderBy('w.status_id','desc')
				->orderBy('w.is_new','desc')
				->get();

		$view->addRefreshButton();
		$view->addActionToolbarButton("icons:apps",'ew-list-view',$this->getRouteViewParams("links","","","icons:apps"));
		$view->addActionToolbarButton("icons:cloud-upload",'ew-list-view',$this->getRouteViewParams("publish","","","icons:apps"));

		if (!$data) {
			$view->addErrorItem("Você ainda não desenvolveu nenhum widget.");
		}
		$lastHeader = "";
		foreach ($data as $widgetObject) {

			$widget = (array) $widgetObject;
			// print_r($widgetObject);
			// $view->printArray($widgetObject);
			$statusID = $widget['status_id'];
			
			$newHeader = $this->getStatusTitleById($widget['status_id']);
			if ($lastHeader != $newHeader) {
				$view->addHeaderItem($newHeader);
				$lastHeader = $newHeader;
			}

			$routeID = $widget['route_id'];
			$widgetID = $widget['id'];

			$params		 	= $this->getRouteViewParams("edit",$widgetID,$routeID,"create"); 
			$paramsCloud 	= $this->getRouteViewParams("publish",$widgetID,$routeID,"icons:cloud"); 
			$paramsReview 	= $this->getRouteViewParams("review",$widgetID,$routeID,"icons:cloud-done");
			$paramsCode 	= $this->getRouteViewParams("code",$widgetID,$routeID,"icons:code");
			$paramsAdmin 	= $this->getRouteViewParams("admin_review",$widgetID,$routeID,"icons:cloud-circle");
			
			if (($statusID == 4) || ($statusID == 5)) {
				$paramsCode = $this->getRouteViewParams("info_review",$widgetID,$routeID);
			}

			if ($widget['icon'] != "") {
				$icon = $widget['icon'];
			} else {
				$icon = $this->getConfigValue("DEFAULT_ICON");
			}	

			$view->addPaperItemImage("data:image/jpeg;base64," . $icon, $widget['name'], $widget['description'], $this->action, $paramsCode, true, "normal");

			// $view->printArray($widget);
			$item = $view->getLastItem();
			
			if (($statusID != 5) && ($statusID != 4)) {
				$item->addActionButton("create", $this->action, $params);
			}

			// $item->addActionButton("icons:compare-arrows", $this->action, $this->getRouteViewParams("codediff",$widgetID,$routeID,"icons:compare-arrows"));

			if ($widget['status_id'] == 0) {
				// $item->addActionButton("icons:cloud-upload", $this->action, $paramsCloud);
				$item->addActionButton("icons:cloud-download", "ew_openURL", array("url" => "/api/export/" . $widget['id']));
			}

			if ($widget['status_id'] == 2) {
				if ($admin) {
					$item->addActionButton("icons:cloud-done", $this->action, $paramsReview);
				}
			}
			if (($widget['status_id'] == 4) || ($widget['status_id'] == 5) || ($widget['status_id'] == 6)) {
				if ($admin) {
					$route = $this->getRouteByID($widget['route_id']);
					$issueParams = $this->getRedmineParams("detail",array("issueID"=> $route['route_issue_id']),"icons:assignment");

					if ($widget['status_id'] != 5) {
						$item->addActionButton("device:storage", $this->action, $this->getRouteViewParams("admin_database",$widgetID,$routeID,"device:storage"));
					}
					
					$item->addActionButton("icons:code", $this->action, $this->getRouteViewParams("code",$widgetID,$routeID,"icons:code"));
					if ($widget['status_id'] != 5) {
						$item->addActionButton("icons:cloud-circle",$this->action,$paramsAdmin);
					}
					$item->addActionButton("icons:assignment", $this->action, $issueParams);
				}
			}

			$item->addActionButton("av:play-arrow","ew-list-view",array("route" => $widget['url']),1,'',"","","","120","120","contain",true);
			$view->updateLastItem($item);

		}

		$view->setFab("icons:extension", "Enviar", $this->action, $this->getRouteViewParams("edit"));

		return $view;
	}

	public function getTitleForViewName($viewName) {
		$title = "Meus Widgets";
		if ($viewName == "edit") { $title = "Editar"; }
		if ($viewName == "publish") { $title = "Publicar"; }
		if ($viewName == "review") { $title = "Revisão"; }
		if ($viewName == "code") { $title = "Código"; }
		if ($viewName == "admin_review") { $title = "Administrar Revisão"; }
		if ($viewName == "info_review") { $title = "Revisão"; }
		if ($viewName == "codediff") { $title = "Diferenças"; }
		return $title;
	}

	public function getRouteViewParams($view,$widgetID = "",$routeID = "",$icon = "") {
		$title = $this->getTitleForViewName($view);
		$params = array("route" => $this->getParam("route"), "view" => $view, "routeID" => $routeID, "widgetID" => $widgetID, "tabID" => "meus_widgets_" . $view . "_" . $widgetID . "_" . $routeID,"tabIcon" => $icon, "tabTitle" => $title);
		return $params;
	}

	public function getAllStatus() {
		$arrStatus = array(
			array("id" => 0, "title" => "Em Desenvolvimento"),
			array("id" => 2, "title" => "Aguardando Aprovação"),
			array("id" => 4, "title" => "Aprovado"),
			array("id" => 5, "title" => "Recusado"),
			array("id" => 6, "title" => "Pronto para a Produção"),
			array("id" => 10, "title" => "Em Produção"),
		); 
		return $arrStatus;
	}

	public function getStatusTitleById($statusID) {
		$allStatus = $this->getAllStatus();
		$retVal = '';
		foreach ($allStatus as $status) {
			if ($statusID == $status['id']) {
				$retVal = $status['title'];
			}
		}	
		return $retVal;
	}

}

?>