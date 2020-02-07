<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\WidgetController;
use App\Http\Controllers\CrudController;

use App\Http\Requests;
use App\Utils\EWListView;


class WidgetPages extends CrudController
{
	public function setupTable() {

        $this->ROUTE = $this->getRouteForClass("Admin\WidgetPages@load");
        $this->PRIMARY_KEY = "id";
        $this->SECONDARY_KEY = "widget_id";
		$this->ITEM_BUTTONS = ARRAY();
		$this->TITLE = "Páginas do Widget";
		$this->TABLE_NAME = "widget_pages";
		$this->EXCLUDE_FIELDS = array("id");
        $this->ORDER_BY = "id"; 
		$this->LIST_VIEW_FIELDS = array("image" => "", "title" => "name", "description" => "description");
        $this->FIELDS = array(  array("name" => "id", "title" => "", "alias" => "", "type" => "hidden"),
                                array("name" => "widget_id", "title" => "", "alias" => "", "type" => "hidden", "value" => $this->getParam("widget_id")),
                                array("name" => "name", "title" => "Titulo da Pagina", "alias" => "", "type" => "text", "required" => true),
                                array("name" => "description", "title" => "Descrição da Página", "alias" => "", "type" => "textarea", "required" => true),
                                // array("name" => "code", "title" => "Arquivo da Rota", "type" => "file", "required" => false),
                                array("name" => "content", "title" => "Conteúdo da Página", "alias" => "", "type" => "texthtml", "required" => false),
                                
                                // array("name" => "code", "title" => "Conteudo do Arquivo", "alias" => "", "type" => "textarea", "required" => false),
								
							);
    }

}

?>