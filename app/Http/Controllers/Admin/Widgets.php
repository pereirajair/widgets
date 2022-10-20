<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\WidgetController;
use App\Http\Controllers\CrudController;
use App\Http\Requests;
use App\Utils\EWListView;

class Widgets extends CrudController
{
    
    public function setupTable() {
		$this->ROUTE = $this->getRouteForClass("Admin\Widgets@load"); 
        $this->PRIMARY_KEY = "id";
		$this->TABLE_NAME = "widgets";
		$this->TITLE = "Administrar Widgets";
		$this->EXCLUDE_FIELDS = array("id","multi_column","element","imgicon","concat('./api/rest/Icon?id=', id)","table","imagefile");
		$this->SENCODARY_KEY = '';

		$this->ITEM_BUTTONS = array( );
		// 							array( "icon" => "icons:assignment-ind","action" => "ew-list-view", "params" => array("route" =>  $this->getRouteForClass("UsersPrivileges"), "table" => "ew_widgets", "tabID" => "user_privileges_widgets", "tabIcon" => "icons:assignment-ind", "tabTitle" => "Controle de Acesso" )),
		// 						);
		
		$this->ORDER_BY = "enabled"; //array("enabled" => "desc", "widgettitle" => "");
		$this->LIST_VIEW_FIELDS = array("image" => "", "title" => "name", "description" => "description");
		$this->FIELDS = array(	
								array("name" => "id", "title" => "", "alias" => "", "required" => true, "type" => "hidden"),
								array("name" => "name", "title" => "Título", "alias" => "", "required" => true, "type" => "text"),
								array("name" => "description", "title" => "Descrição", "alias" => "", "required" => true, "type" => "text") ,
								array("name" => "icon", "title" => "Icone", "alias" => "", "required" => false, "type" => "textarea") ,
								
								array("name" => "width", "title" => "Largura", "alias" => "", "required" => true, "type" => "text") ,
								array("name" => "height", "title" => "Altura", "alias" => "", "required" => true, "type" => "text") ,
								array("name" => "enabled", "title" => "Habilitado", "alias" => "", "required" => false, "type" => "boolean") ,
								array("name" => "is_new", "title" => "Destacar Novo Widget", "alias" => "", "required" => false, "type" => "boolean") ,
								array("name" => "route_id", "title" => "ID da Rota", "alias" => "", "required" => true, "type" => "text") ,
								array("name" => "groups_acl", "title" => "Grupos com Permissão", "alias" => "", "type" => "textarea", "required" => false),
								array("name" => "icon", "title" => "Imagem do Icone", "type" => "file")
							);
    }
   
    public function getMenu() {

        $view = new EWListView("Administração");
        $view->addHeaderItem("Configurações da Plataforma");
       
		$view->addPaperItemIcon('view-quilt','Widgets','Administrar Widgets','ew-list-view',array("route" => $this->getRouteForClass("Admin\Widgets@load")));
        $view->addPaperItemIcon('settings','Configurações','Configurações da plataforma.','ew-list-view',array("route" => $this->getRouteForClass("Admin\Config@load")));
		$view->addPaperItemIcon('icons:cloud','Rotas','Administrar Rotas.','ew-list-view',array("route" => $this->getRouteForClass("Admin\Routes@load")));
		$view->addPaperItemIcon('notification:network-check','Estatísticas','Estatísticas.','ew-list-view',array("route" => $this->getRouteForClass("Admin\AccessLog@load")));
        
        return response()->json($view);
    }



}

?>