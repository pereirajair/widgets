<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\WidgetController;
use App\Http\Controllers\CrudController;

use App\Http\Requests;
use App\Utils\EWListView;


class Config extends CrudController
{
	public function setupTable() {
        $this->ROUTE = $this->getRouteForClass("Admin\Config@load");
        $this->PRIMARY_KEY = "id";
		$this->ITEM_BUTTONS = ARRAY();
		$this->TITLE = "Configuração da Plataforma";
		$this->TABLE_NAME = "config";
		$this->EXCLUDE_FIELDS = array("id");
		$this->ORDER_BY = "name"; 
		$this->LIST_VIEW_FIELDS = array("image" => "", "title" => "name", "description" => "value");
		$this->FIELDS = array(array("name" => "id", "title" => "", "alias" => "", "type" => "hidden"),
								array("name" => "name", "title" => "Nome", "alias" => "", "type" => "text", "required" => true),
								array("name" => "value", "title" => "Valor", "alias" => "", "type" => "textarea", "required" => true) ,
							);
    }

}

?>