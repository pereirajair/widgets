<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Utils\BaseResource;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Session;

class HomeController extends WidgetController
{

    private $defaultPages = '[{"id":0,"name":"","icon":"icons:home"},{"id":1,"name":"Página 2","icon":"icons:view-quilt"}]';

    private $defaultGlobalParams = '{"version":"1","forcePageReload":false,"showBackgroundImage":true,"showExpressoBanner":true,"backgroundImageUrl":"./app/src/ew-home/img/wallpapers/bg_16.jpg","theme":"celepar-theme","pages":[{"id":0,"name":"","icon":"icons:home"},{"id":1,"name":"Página 2","icon":"icons:view-quilt"}],"backgroundImageSource":"0","backgroundImageCategory":2,"backgroundImageChange":"always","backgroundImageUrlComputed":"./app/src/ew-home/img/wallpapers/bg_16.jpg", "wallpaper: "bg_16.jpg"}';
    
    private	$THEMES = array(
        array("image" => "./app/src/ew-home/img/themes/001.png", "name" => "celepar-theme",  "color" => "#d5d5d5" ),
        array("image" => "./app/src/ew-home/img/themes/002.png", "name" => "sky",  "color" => "#7ec0ee"),
        array("image" => "./app/src/ew-home/img/themes/003.png", "name" => "citric-flames",  "color" => "#fb8c00"),
        array("image" => "./app/src/ew-home/img/themes/004.png", "name" => "technology",  "color" => "#373b50"),
        array("image" => "./app/src/ew-home/img/themes/005.png", "name" => "the-times",  "color" => "#191919"), 
        array("image" => "./app/src/ew-home/img/themes/006.png", "name" => "classical",  "color" => "#424b4b"),
        array("image" => "./app/src/ew-home/img/themes/007.png", "name" => "dark-side",  "color" => "#424b4b"),
        array("image" => "./app/src/ew-home/img/themes/008.png", "name" => "denim",  "color" => "#484e6e"),
        array("image" => "./app/src/ew-home/img/themes/009.png", "name" => "everest",  "color" => "#45ada8"), 
        array("image" => "./app/src/ew-home/img/themes/010.png", "name" => "golden-goose",  "color" => "#e0c453"),
        array("image" => "./app/src/ew-home/img/themes/011.png", "name" => "candy",  "color" => "#ff003c"), 
        array("image" => "./app/src/ew-home/img/themes/012.png", "name" => "la-resistance",  "color" => "#e65540"),
        array("image" => "./app/src/ew-home/img/themes/013.png", "name" => "melon",  "color" => "#e84a5f"),
        array("image" => "./app/src/ew-home/img/themes/014.png", "name" => "seven-seas",  "color" => "#3d6868"));

        private $WALLPAPERS = array(
                array("small" => "bg_noImage.png", "normal" => "bg_noImage.jpg"),
                array("small" => "bg_0.png", "normal" => "bg_0.jpg"),
                array("small" => "bg_1.png", "normal" => "bg_1.jpg"),
                array("small" => "bg_2.png", "normal" => "bg_2.jpg"),
                array("small" => "bg_3.png", "normal" => "bg_3.jpg"),
                array("small" => "bg_4.png", "normal" => "bg_4.jpg"),
                array("small" => "bg_5.png", "normal" => "bg_5.jpg"),
                array("small" => "bg_6.png", "normal" => "bg_6.jpg"),
                array("small" => "bg_7.png", "normal" => "bg_7.jpg"),
                array("small" => "bg_8.png", "normal" => "bg_8.jpg"),
                array("small" => "bg_9.png", "normal" => "bg_9.jpg"),
                array("small" => "bg_10.png", "normal" => "bg_10.jpg"),
                array("small" => "bg_11.png", "normal" => "bg_11.jpg"),
                array("small" => "bg_12.png", "normal" => "bg_12.jpg"),
                array("small" => "bg_13.png", "normal" => "bg_13.jpg"),
                array("small" => "bg_14.png", "normal" => "bg_14.jpg"),
                array("small" => "bg_15.jpg", "normal" => "bg_15.jpg"),
                array("small" => "bg_16.jpg", "normal" => "bg_16.jpg"),
                array("small" => "1.jpg", "normal" => "1.jpg"),
                array("small" => "2.jpg", "normal" => "2.jpg"),
                array("small" => "3.jpg", "normal" => "3.jpg"),
                array("small" => "4.jpg", "normal" => "4.jpg"),
                array("small" => "5.jpg", "normal" => "5.jpg"),
                array("small" => "6.jpg", "normal" => "6.jpg"),
                array("small" => "7.jpg", "normal" => "7.jpg"),
                array("small" => "8.jpg", "normal" => "8.jpg"),
                array("small" => "9.jpg", "normal" => "9.jpg"),
                array("small" => "10.jpg", "normal" => "10.jpg"),
                array("small" => "11.jpg", "normal" => "11.jpg"),
                array("small" => "12.jpg", "normal" => "12.jpg"),
                array("small" => "13.jpg", "normal" => "13.jpg"),
                array("small" => "14.jpg", "normal" => "14.jpg"),
                array("small" => "15.jpg", "normal" => "15.jpg"),
                array("small" => "16.jpg", "normal" => "16.jpg"),
                array("small" => "17.jpg", "normal" => "17.jpg"),
                array("small" => "18.jpg", "normal" => "18.jpg"),
                array("small" => "19.jpg", "normal" => "19.jpg"),
                array("small" => "20.jpg", "normal" => "20.jpg"),
                array("small" => "21.jpg", "normal" => "21.jpg"),
                array("small" => "22.jpg", "normal" => "22.jpg"),
                array("small" => "23.jpg", "normal" => "23.jpg"),
                array("small" => "24.jpg", "normal" => "24.jpg"),
                array("small" => "25.jpg", "normal" => "25.jpg"),
                array("small" => "26.jpg", "normal" => "26.jpg"),
                array("small" => "27.jpg", "normal" => "27.jpg"),
                array("small" => "28.jpg", "normal" => "28.jpg"),
                array("small" => "29.jpg", "normal" => "29.jpg"),
                array("small" => "30.jpg", "normal" => "30.jpg"),
                array("small" => "31.jpg", "normal" => "31.jpg"),
                array("small" => "32.jpg", "normal" => "32.jpg"),
                array("small" => "33.jpg", "normal" => "33.jpg"),
                array("small" => "34.jpg", "normal" => "34.jpg"),
                array("small" => "35.jpg", "normal" => "35.jpg"),
                array("small" => "36.jpg", "normal" => "36.jpg"),
                array("small" => "37.jpg", "normal" => "37.jpg"),
                array("small" => "38.jpg", "normal" => "38.jpg"),
                array("small" => "39.jpg", "normal" => "39.jpg"),
                array("small" => "40.jpg", "normal" => "40.jpg"));

        private $CATEGORIES = array(
                array("categoryID" => "0", "title" => "Construções", "name" => "buildings", "image" => "./app/src/ew-home/img/wallpapers/ctg_buildings_1.png"),
                array("categoryID" => "1", "title" => "Comida", "name" => "food", "image" => "./app/src/ew-home/img/wallpapers/ctg_food_1.png"),
                array("categoryID" => "2", "title" => "Natureza", "name" => "nature", "image" => "./app/src/ew-home/img/wallpapers/ctg_nature_1.png"),
                array("categoryID" => "3", "title" => "Pessoas", "name" => "people", "image" => "./app/src/ew-home/img/wallpapers/ctg_people_1.png"),
                array("categoryID" => "4", "title" => "Tecnologia", "name" => "technology", "image" => "./app/src/ew-home/img/wallpapers/ctg_tecnology_1.png"),
                array("categoryID" => "5", "title" => "Objetos", "name" => "objects", "image" => "./app/src/ew-home/img/wallpapers/ctg_objects_1.png"));


    public function index()
    {
        // session_start();
        $this->insertUser();

        $userAuth = session_id();

        if ($this->getConfigValue("DEVELOPMENT") == "1") {
            return view('widgets')->with('auth', $userAuth);
        } else {
            return view('widgets_build')->with('auth', $userAuth);
        }
    }

    public function indexpolymer3()
    {
        // session_start();
        $this->insertUser();

        $userAuth = session_id();

        if ($this->getConfigValue("DEVELOPMENT") == "1") {
            return view('widgets_polymer3')->with('auth', $userAuth);
        } else {
            return view('widgets_polymer3')->with('auth', $userAuth);
        }
    }

    public function logout() {
        $data = $this->getApiData(config('central-seguranca.urlCentralCidadao.' . \App::environment() . '/signout'));
        print_r($data);
    }

    public function uploadFile() {
        return response()->json(true);
    }

    public function insertUser() {
        
        $userSession = unserialize(Session::get('central-seguranca-usuario'));

        if (is_object($userSession)) {

            $qtd = DB::table('users')->where('id',$userSession->idCidadao)->get()->count();

            if ($qtd == 0) {
                DB::table('users')->insert(array("id" => $userSession->idCidadao, "name" => $userSession->name, "email" => $userSession->email, "login" => $userSession->login, "rg" => $userSession->rg, "cpf" => $userSession->cpf , "groups" => implode(";",$userSession->groups)  ));
            }

            $_SESSION['user_id'] = $userSession->idCidadao;

        } else {
            $_SESSION['user_id'] = 1;
        }

    }


    public function getTheme()
    {

        $nameTheme = $this->getParam("nameTheme");
        $send = $this->getParam("send");

        $view = new EWListView();
        $view->setWidgetTitle('Temas');
        $view->hideSearch(true);

        if ($send == "1") {

            if ($nameTheme == "") {
                $nameTheme = "celepar-theme";
            }

            $this->saveDashboardSetting("theme",$nameTheme);
            $view->runAction('ew_signal', array("signal" => "ew-home-reload-page")); 

        } else {

            $indexNewTheme = -1;
            // $userData = $this->getUserData();
            // if (!isset($userData['globalParams']['theme'])) {
            //     $userData['globalParams']['theme'] = 'celepar-theme';
            // }
            $currentTheme = $this->getDashboardSetting("theme");
            // $currentTheme = $userData['globalParams']['theme'];
            foreach ($this->THEMES as $key => $value) {
                if ($currentTheme == $value['name']) {
                    $newTheme = $value;
                    $indexNewTheme = $key;
                    break;
                }
            }

            if ($indexNewTheme >= 0) {
                unset($this->THEMES[$indexNewTheme]);

                $view->addHeaderItem("Seu tema atual:");
                $view->addImageItem($newTheme['image'],0,"80px","80px","contain",true,"margin-left: 30px;");
            }

            $view->addHeaderItem("Escolha outro tema:");
            $item = new EWListViewItem();
            foreach ($this->THEMES as $image) {
                $item->addActionButton("","ew_load",array("route" => $this->getParam("route"), "view" => "theme","send" => "1","nameTheme" => $image['name']),2,"","fabNone","",$image['image'],"80","80");
            }

            $view->addItem($item->getItem());
        }
        return $view;
    }

    public function getWallpaper(){

        $nameWallpaper = $this->getParam("nameWallpaper");
        $send = $this->getParam("send");
        $origin = $this->getParam("origin");
        $categoryID = $this->getParam('categoryID');

        $view = new EWListView();
        $view->setWidgetTitle('Imagem de Fundo');
        $view->hideSearch(true);

        if ($send == "1"){

            $userData = $this->getUserData();
            if (strpos($nameWallpaper, "bg_noImage") !== false) {
                $this->saveDashboardSetting("wallpaper","");
            } else {
                if ($origin == "1") {
                    $this->saveDashboardSetting("wallpaper","https://source.unsplash.com/800x600/?" . $nameWallpaper);
                } else {
                    $this->saveDashboardSetting("wallpaper","./app/src/ew-home/img/wallpapers/" . $nameWallpaper);
                }
            }
            $view = $this->saveAndRefreshVisualPreference($view,$userData);
        } else {

            $view->addHeaderItem("Escolha sua imagem de fundo:");

            $item = new EWListViewItem();
            foreach ($this->WALLPAPERS as $image) {
                $image['small'] = "./app/src/ew-home/img/wallpapers/" . $image['small'];
                $item->addActionButton("","ew_load",array("route" => $this->getParam("route"), "view" => "wallpaper","send" => "1","nameWallpaper" => $image['normal']),2,"","fabNone","",$image['small'],"160","120");
            }
            $view->addItem($item->getItem());

            $view->addHeaderItem('Por categoria:');

            $item = new EWListViewItem();
            foreach ($this->CATEGORIES as $image) {
                $item->addActionButton("","ew_load",array("route" => $this->getParam("route"), "view" => "wallpaper","send" => "1","origin" => "1","nameWallpaper" => $image['name'],"categoryID" => $image['categoryID']),2,"","fabNone","",$image['image'],"160","120");
            }
            $view->addItem($item->getItem());

            $view->addHeaderItem('UNSPLASH.COM é um site que fornece gratuitamente/aleatoriamente imagens de papel de parede. Todas as imagens exibidas são de total responsabilidade do site: unsplash.com');
        }
        return $view;
    }

    public function saveAndRefreshVisualPreference($view,$userData){

        // $userData = json_encode($userData);
        // $result = $this->saveSetting('userData',$userData);
        $view->runAction('ew_signal', array("signal" => "ew-home-reload-page")); 
        return $view;
    }

    public function visualPreference(Request $request) {
        $pView = $request->input("view");

        $view = new EWListView();
        if ($pView == "theme")      { $view = $this->getTheme(); }
        if ($pView == "wallpaper")  { $view = $this->getWallpaper(); }
        return response()->json($view);
    }

    public function settings()
    {
        $view = new EWListView("",true);

        $view->setWidgetTitle("Configurações");

        if ($this->getConfigValue("RELEASE_SHOWNEWS") == "1") {
            $view->addPaperCardImage("",$this->getConfigValue("RELEASE_TITLE"),$this->getConfigValue("RELEASE_WIDGET_TITLE"),'ew-list-view', array("route" => $this->getRouteForClass("HomeController@versionNews")));

            $view->addHeaderItem("Configurações da Plataforma", true);
        }

       
        $view->addPaperItemIcon('view-week','Páginas','Adicione mais páginas para se organizar melhor','ew-list-view',array("route" => $this->getRouteForClass("HomeController@settingsPages")),false);
        // $view->addPaperItemIcon('lock','Alterar Senha','Defina uma nova senha do Expresso','ew-list-view', array("route" => $this->getRouteForClass("ChangePassword")));
        $view->addPaperItemIcon('image:color-lens','Tema','Escolha a melhor paleta de cores','ew-list-view',array("route" => $this->getRouteForClass("HomeController@visualPreference"),"view" => "theme"),true);
        $view->addPaperItemIcon('image:collections','Imagem de Fundo','Personalize o visual da Plataforma','ew-list-view',array("route" => $this->getRouteForClass("HomeController@visualPreference"), "view" => "wallpaper"),false);
    
        // $this->getRouteForClass("ContactDetail")

        $view->addPaperItemIcon('social:person','Minha Conta','Veja Informações sobre sua conta','ew-list-view',array("route" => $this->getRouteForClass("HomeController@userAccount"),"contactID" => $this->getUserId(), 'contactType' => 2,'hideOptions' => true));
        $view->addPaperItemIcon('help','Ajuda','Veja esse rápido tutorial sobre como utilizar a plataforma','ew-list-view', array("route" => $this->getRouteForClass("HomeController@help")),false);

        $html = "<br><br>";
        $view->addHTML($html);
        $view->addImageItem("http://www.pr.gov.br/logos/brasao_80x98.png",0,"100%","50px","contain");
        $view->addHTML($html);
        $view->addImageItem("http://www.pr.gov.br/logos/celepar/logo-celepar-v-m.png",0,"100%","50px","contain");
        $view->addHTML($html);

        return response()->json($view);
    }

    public function userAccount() 
    {
        $user = $this->getUser();

        $view = new EWListView("",true);

        $view->setWidgetTitle("Minha Conta");

        $view->addHeaderItem("Informações sobre a sua conta");

        $userSession = unserialize(Session::get('central-seguranca-usuario'));

        $view->addPaperItemIcon('social:person', $userSession->name, "");
        $view->addPaperItemIcon('communication:email', $userSession->email, "");
        if ($userSession->telefone != "") {
            $view->addPaperItemIcon('communication:phone', $userSession->telefone, "");
        }
        if ($userSession->celular != "") {
            $view->addPaperItemIcon('communication:phone', $userSession->celular, "");
        }

        $view->addImageItem("http://auth-cs.desenvolvimento.celepar.parana/centralautenticacao/images/logo-centralSeguranca.png",0,"100%","100px","contain");
        $view->addImageItem("http://www.pr.gov.br/logos/celepar/logo-celepar-v-m.png",0,"100%","50px","contain");

        $view->addActionToolbarButton("create","ew_openURL",array("url" => config('central-seguranca.urlCentralCidadao.' . \App::environment())),false,"normal");

        return response()->json($view);
    }

    public function userData()
    {

        $userData = $this->getUserData();

        if (!isset($userData['usedColumns'])) {
            $this->defaultDashboard = array();
            $result = array("usedColumns" => $this->defaultDashboard ,"globalParams" => json_decode($this->defaultGlobalParams));
        } else {
            $result = $userData;
        }
        
        return response()->json($result);
    }

    public function userWidgets() 
    {

        $isMobile = $this->getParam("isMobile");

        $data = DB::table('widgets as w')->join('routes AS r','r.id','=','w.route_id')->select('w.*','r.url','r.groups_acl as route_acl')->where('w.enabled', true)->orderBy('w.is_new','desc')->get();
        
        $view = new EWListView("Widgets");

        $hasAddedNewsHeader = false;
        $hasAddedOtherHeader = false;

        $qtd = 0;

        foreach ($data as $widget) {
            if ($widget->is_new == 't') {
                if (!$hasAddedNewsHeader) {
                    $view->addHeaderItem("Novos Widgets");
                    $hasAddedNewsHeader = true;
                }
            } else {
                if ($hasAddedNewsHeader) {
                    if (!$hasAddedOtherHeader) {
                        $view->addHeaderItem("Outros Widgets");
                        $hasAddedOtherHeader = true;
                    }
                }
            }

            if ($widget->icon != "") {
				$icon = $widget->icon;
			} else {
				$icon = $this->getConfigValue("DEFAULT_ICON");
			}

            $image = "data:image/jpeg;base64," . $icon;
            $action = "ew_signal";
            $arrayWidget = (array) $widget;
            $arrayWidget['params'] = array("route" => $widget->url) ; //"{ 'route' : '" . $widget->url . "'}";
            $arrayWidget['element'] = 'ew-list-view';
            $params = array("signal" => "ew-home-add-widget", "params" => $arrayWidget,"close" => true);

            if ($isMobile) {
                $view->addPaperItemImage($image,$widget->name,$widget->description,"ew-list-view",$arrayWidget['params'],true);
                $qtd = $qtd + 1;

                if ($qtd == 1) {
                    $view->runAction("ew-list-view",$arrayWidget['params']);
                }
            } else {
                $view->addPaperItemImage($image,$widget->name,$widget->description,$action,$params,true);
            }

            
            
            

        }

        $showNews = $this->getConfigValue("RELEASE_SHOWNEWS");
        $button_title = $this->getConfigValue("RELEASE_BUTTON_TITLE");

        $result = array();
        $result['result'] = $view->getResult();
        $result['RELEASE_SHOWNEWS'] = $showNews;
        $result['RELEASE_BUTTON_TITLE'] = $button_title;

        return response()->json($result);
    }

    


    public function help() {
        $data = array( 
            array (
                "image"=> "./app/src/ew-home/img/celepar_banner_ajuda.png",
                "title"=> "Bem-vindo",
                "description"=> "Aprenda agora a configurar seus widgets e utilizar esta nova tecnologia.",
            ),
            array (
                "image"=> "./app/src/ew-home/img/help-01.png",
                "title" => "Adicione Widgets",
                "description"=> "Adicione todos os widgets que achar necessário na sua página inicial. Para isso basta clicar em 'Adicionar Widget' e escolher os seus widgets preferidos.",
            ),
            array (
                "image"=> "./app/src/ew-home/img/help-02.png",
                "title" => "Adicione Widgets",
                "description"=> "O primeiro widget de uma página sempre será exibido em tela cheia. A qualquer momento você poderá adicionar novos widgets.",
            ),
            array (
                "image"=> "./app/src/ew-home/img/help-03.png",
                "title" => "Personalize sua página",
                "description"=> "Com o modo de edição habilitado é possível customizar sua página.",
            ),
            // array (
            //     "image"=> "./src/ew-home/img/help-04.png",
            //     "title"=> "Para se organizar melhor, experimente adicionar mais páginas no painel de configurações.",
            // ),
            array (
                "image"=> "./app/src/ew-home/img/help-05.png",
                "title" => "Padrão de navegação",
                "description"=> "Todos os Widgets possuem um padrão de navegação, o botão voltar é exibido no topo, e a ação principal da tela sempre é exibida no canto inferior direito.",
            ),
            array (
                "image"=> "./app/src/ew-home/img/help-06.png",
                "title"=> "Esperamos que Aproveite ao máximo",
                "description"=> "Fique a vontade para enviar suas dúvidas, elogios, críticas ou sugestões.",
            )
            
        );
        $view = new EWListView("Ajuda",true);
        $action = "";
        
        $page = 0;
        foreach ($data as $item) {
                $view->addPage("Página " . (intval($page) + 1)) ;   
                $view->addImageItem($item['image'],$page,"100%","350px","contain");
                $view->addPaperCardImage("",$item['title'],$item['description'],"",array(),true,array(),0);
                $page = $page + 1;
        }
  
        $view->hidePages(true);
        $view->autoScrollPages(true,15,false);
        return response()->json($view);
    }

    public function getNewWidgets() {
		$query = "SELECT ew.id, 
		    		ew.name, 
		    		ew.description, 
		    		ew.icon, 
		    		ew.width, 
		    		ew.height, 
		    		ew.is_new, 
		    		ew.enabled  FROM widgets ew WHERE ew.is_new = true AND ew.enabled = true ORDER BY ew.name ";
        $result = $this->db_query($query);

        $widgets = pg_fetch_all($result);

        if ($widgets != false) {
            $result = array("result" => $widgets);    
        } else {
            $result = array("result" => array());    
		}
		
        return $result;
	}

	public function getMainChanges() {
		$query = "SELECT ew.id, 
		    		ew.name, 
		    		ew.description, 
		    		ew.icon, 
		    		ew.width, 
		    		ew.height, 
		    		ew.is_new, 
		    		ew.enabled FROM widgets ew WHERE ew.is_new = true AND ew.enabled = true ORDER BY ew.name ";
        $result = $this->db_query($query);


        $widgets = pg_fetch_all($result);

        if ($widgets != false) {
            $result = array("result" => $widgets);    
        } else {
            $result = array("result" => array());    
        }        

        return $result;
	}

	public function versionNews()
	{
		$versionReleaseDate = gmdate("d/m/Y", strtotime($this->getConfigValue("RELEASE_DATE")));
		$versionTitle= $this->getConfigValue("RELEASE_TITLE");
		$versionChanges= $this->getConfigValue("RELEASE_CHANGES");
		
		$widgetTitle = $this->getConfigValue("RELEASE_WIDGET_TITLE");

		$view = new EWListView();
		$view->setWidgetTitle($widgetTitle);
		$view->setBackgroundColor("indigo");
		$view->hideSearch(false);
		$view->hideFab(false);

		if ($versionChanges != "") {
			$view->addPaperCardImage("",$versionTitle,"");
			$item = $view->getLastItem();
			$item->setInnerHTML($versionChanges);
			$view->updateLastItem($item);
		}
					
		$newWidgets = $this->getNewWidgets(); 

		if (!empty($newWidgets['result'])) {
			$view->addHeaderItem("Novos Widgets:");	
		
			foreach ($newWidgets['result'] as $widget) {
				// if ($widget['params'] != '') {
				// 	$widget['params'] = json_decode($widget['params']);
				// }
				$view->addPaperItemImage("./api/rest/Icon?id=" . $widget['id'],$widget['name'],$widget['description'],"ew_signal",array("signal" => "ew-home-add-widget", "params" => $widget,"close" => true));
			}
		}       

		$mainChanges = $this->getMainChanges(); 
		
		if (!empty($mainChanges['result'])) {
			$view->addHeaderItem("Principais alterações:");	
		
			foreach ($mainChanges['result'] as $widget) {
				// if ($widget['params'] != '') {
				// 	$widget['params'] = json_decode($widget['params']);
				// }
				$view->addPaperCardImage("./api/rest/Icon?id=" . $widget['id'],$widget['name'],$widget['description'],"ew_signal",array("signal" => "ew-home-add-widget", "params" => $widget));
				$view->updateLastItem($view->getLastItem()->setImage("./api/rest/Icon?id=" . $widget['id'],32,32,"contain"));

			}
		}     

		 return response()->json($view);
     }
     

     public function settingsPages()
    {
        $action   = $this->getParam("action");
        $pageId   = $this->getParam("id");
        $icon     = $this->getParam("icon");

        $iconlist = array("icons:archive", "icons:account-box", "icons:assignment-ind", "icons:assignment", "icons:check-box", "icons:cloud", "icons:done", "icons:event", "icons:face", "icons:folder", "icons:home", "icons:link", "icons:send", "icons:subject", "icons:trending-up", "icons:timeline", "icons:view-quilt", "icons:watch-later", "icons:shopping-cart", "icons:perm-contact-calendar", "icons:payment", "icons:lightbulb-outline", "icons:mail", "icons:receipt", "communication:forum", "communication:contacts", "editor:pie-chart", "editor:insert-chart", "editor:insert-photo", "hardware:computer", "hardware:phone-iphone", "maps:flight");

        // $element = new ElementWidgetsAdapter();
        $view = new EWListView("Gerenciar Páginas");
        $view->hideSearch(true);
        $view->addActionToolbarButton("icons:add-circle-outline", "ew_send", array("route" => $this->getParam("route"), "action" => "add"));

       if ($action == "") {
            unset($_SESSION['userDataPageEditor']);
        }

        if (!isset($_SESSION['userDataPageEditor'])) {
            $userData = $this->getUserData();
            $_SESSION['userDataPageEditor'] = $userData;
        } else {
            $userData = $_SESSION['userDataPageEditor'];
        }

        if (!isset($userData['globalParams']['pages'])) {
            $userData['globalParams']['pages'] = json_decode($this->defaultPages,true);
        }

        $qtdPages = count((array) $userData['globalParams']['pages']);
        if (($qtdPages > 0) && ($action != "")) {
            $userData = $this->refreshNamePage($qtdPages, $userData);
        }

        if ($action == 'delete') {
            $userData = $this->deletePage($pageId, $userData);
        }

        if ($action == 'add') {
            if ($this->canAddPage($userData['globalParams']['pages'])) {
                $userData = $this->addPage($userData);
            } else {
                $view->showMessage("Não é possível adicionar mais do que 10 páginas.");
            }
        }
 
        if ($action == 'setIcon') {
            $userData = $this->setIconPage($pageId, $icon, $userData);
        }

        if ($action == 'save') {
            $view = $this->saveAndRefreshSettingsPageEditor($view, $userData);
        }
        $_SESSION['userDataPageEditor'] = $userData;

        foreach ($userData['globalParams']['pages'] as $page) {
            $value = (array) $page;
            $view->addTextInput("pageName_" . $value['id'], "", $value['name'], false, "", $value['icon']);
            $item = $view->getLastItem();
            $item->addActionButton("icons:create", "ew_send", array("route" => $this->getParam("route"), "action" => "showIcons", "id" => $value['id']), 1, "", "fabTheme", "", "", 120, 120, "contain", true);
            if ($value['id'] >= 1) {
                $dialogParams = $view->getDialogParams("Deseja realmente excluir esta página?","Todos os widgets desta página serão removidos.","ew_send",array("route" => $this->getParam("route"), "action" => "delete", "id" => $value['id']));
                $item->addActionButton("delete", "ew_dialog",$dialogParams);
            }
            $view->updateLastItem($item);
            if (($action == "showIcons") && ($pageId == $value['id'])) {
                $view->addPaperCardImage("", "", "", "", array(), false);
                $item = $view->getLastItem();
                foreach ($iconlist as $iconName) {
                    $item->addActionButton($iconName, "ew_send", array("route" => $this->getParam("route"), "action" => "setIcon", "id" => $value['id'], "icon" => $iconName), 1, "", "fabTheme", "", "", 120, 120, "contain", true);
                }
                $view->updateLastItem($item);
            }
        }
       // $view->printArray($userData);

        $saveParams = array("route" => $this->getParam("route"));
        $view->addHiddenInput("action", "save");
        $view->setFab("done", "Salvar", "ew_send", $saveParams); 

        return response()->json($view);
    }

    public function deletePage($pageId, $userData)
    {
        unset($userData['globalParams']['pages'][$pageId]);
        //Reordena páginas
        $arrPages = array();
        $i = 0;
        foreach ($userData['globalParams']['pages'] as $value) {
            $value['id'] = $i;
            array_push($arrPages, $value);
            $i++;
        }
        $userData['globalParams']['pages'] = $arrPages;

        //Remove os widgets da página removida
        foreach ($userData['usedColumns'] as $key => $value) {
            if ($value['page'] == $pageId) {
                unset($userData['usedColumns'][$key]);
            }
        }
        $userData['usedColumns'] = array_values($userData['usedColumns']);

        //Reordena os ids dos widgets
        $arrUsedColumns = array();
        foreach ($userData['usedColumns'] as $value) {
            if ($value['page'] > $pageId) {
                $value['page'] = $value['page'] - 1;
                $value['pageid'] = 'page' . $value['page'];
            }
            array_push($arrUsedColumns, $value);
        }
        $userData['usedColumns'] = $arrUsedColumns;
        return $userData;
    }

    public function addPage($userData)
    {
        $pageId = count($userData['globalParams']['pages']);
        $newPage = array("id" => $pageId, "name" => "Página " . ($pageId + 1), "icon" => "tab");
        array_push($userData['globalParams']['pages'], $newPage);
        return $userData;
    }

    public function setIconPage($pageId, $icon, $userData)
    {
        if ($icon != "") {
            $userData['globalParams']['pages'][$pageId]["icon"] = $icon;
        }
        return $userData;
    }

    public function refreshNamePage($qtdPages, $userData)
    {
        $userData['globalParams']['pages'] = (array) $userData['globalParams']['pages'];
        $name = "";
        for ($i = 0; $i < $qtdPages; $i++) {
            $name = $this->getParam("pageName_" . $i);
            $userData['globalParams']['pages'][$i]["name"] = $name;
        }
        return $userData;
    }

    public function canAddPage($pages)
    {
        if (count($pages) >= 10) {
            $retVal = false;
        } else {
            $retVal = true;
        }
        return $retVal;
    }


    public function loginWidget() {

		$view = new EWListView("Login",true);

        $widgetID = $this->getParam("widgetID");
        $send = $this->getParam("send");
        
        $widget = \DB::table('widgets')->where('id','=',$widgetID)->get()->first();
        $route = \DB::table('routes')->where('id','=',$widget->route_id)->get()->first();

        $showForm = true;

        if ($send == true) {
            $showForm = false;

            \Session::put('widget_' . $widgetID . '_username',$this->getParam('username'));
            \Session::put('widget_' . $widgetID . '_password',$this->getParam('password'));
            $view->runSignal("ew-refresh-route",array("route" => $route->url));
            $view->runAction("ew_closeAndRefresh");
            // $view->setFab("done","Fechar","ew_close",array());
        }
		
		if ($showForm) {

            $view->addPaperItemImage("data:image/jpeg;base64," . $widget->icon,$widget->name,$widget->description);
            $view->addHiddenInput("route", $this->getParam("route"));
            $view->addHiddenInput("widgetID", $this->getParam("widgetID"));
            $view->addHiddenInput("send", "true");
            $view->addTextInput("username","Usuário","",true,"Nome do usuário","lock-outline");
			$view->addTextInput("password", "Senha", "", true, "", "lock-open", "password");
			$view->setFab("done", "Autenticar", "ew_send", array());		
		}

		return response()->json($view);
    }


    public function saveAndRefreshSettingsPageEditor($view, $userData)
    {
        // $element = new ElementWidgetsAdapter();
        $user_id 			= $this->getUserId();
        // $userData           = $userData;

        // print_r($userData);

        DB::table('dashboard_pages')->where('user_id','=',$user_id)->delete();
        $order = 0;
        foreach ($userData['globalParams']['pages'] as $page) {
            $order = $order + 1;
            $pageData = array(
                'user_id' => $user_id,
                'name' => $page['name'],
                'order' => $order,
                'icon' => $page['icon'],
            );

            DB::table('dashboard_pages')->insert($pageData);
        }

        
        //$result = $this->saveSetting('userData', $userData);
        $view->runAction('ew_signal', array("signal" => "ew-home-reload-page"));
        $view->runAction('ew_closeAndRefresh', array());
        return $view;
    }

    public function saveSettings() {
        $user_id 			= $this->getUserId();
        $userData           = stripslashes($this->getParam('userData'));
        // $result = $this->saveSetting('userData',$userData);

        DB::table('dashboard_widgets')->where('user_id','=',$user_id)->delete();

        $data = json_decode($userData);
        $order = 0;
        foreach ($data->usedColumns as $widget) {

            $route = DB::table('routes')->where('url','=',$widget->params->route)->get()->first();
            $widgetDatabase = DB::table('widgets')->where('route_id','=',$route->id)->get()->first();

            $order = $order + 1;
            $widgetData = array(
                'user_id' => $user_id,
                'widget_id' => $widgetDatabase->id,
                'order' => $order,
                'width' => $widget->width,
                'height' => $widget->height,
                'page' => $widget->page,
            );

            DB::table('dashboard_widgets')->insert($widgetData);
        }

        DB::table('dashboard_pages')->where('user_id','=',$user_id)->delete();
        $order = 0;
        foreach ($data->globalParams->pages as $page) {
            $order = $order + 1;
            $widgetData = array(
                'user_id' => $user_id,
                'name' => $page->name,
                'order' => $order,
                'icon' => $page->icon,
            );

            DB::table('dashboard_pages')->insert($widgetData);
        }

        return response()->json(array("result" => true));
    }

    
}
