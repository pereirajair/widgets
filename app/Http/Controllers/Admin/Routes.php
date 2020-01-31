<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\WidgetController;
use App\Http\Controllers\CrudController;

use App\Http\Requests;
use App\Utils\EWListView;


class Routes extends CrudController
{
	public function setupTable() {
        $this->ROUTE = $this->getRouteForClass("Admin\Routes@load");
        $this->PRIMARY_KEY = "id";
		$this->ITEM_BUTTONS = ARRAY();
		$this->TITLE = "Configuração das Rotas";
		$this->TABLE_NAME = "routes";
		$this->EXCLUDE_FIELDS = array("id");
        $this->ORDER_BY = "id"; 
		$this->LIST_VIEW_FIELDS = array("image" => "", "title" => "url", "description" => "class_method");
		$this->FIELDS = array(  array("name" => "id", "title" => "", "alias" => "", "type" => "hidden"),
                                array("name" => "url", "title" => "URL da Rota", "alias" => "", "type" => "text", "required" => true),
								array("name" => "class_method", "title" => "Classe e método da Rota", "alias" => "", "type" => "text", "required" => true),
								array("name" => "groups_acl", "title" => "Grupos com Permissão", "alias" => "", "type" => "textarea", "required" => false),
								array("name" => "enabled", "title" => "Ativo", "alias" => "", "type" => "boolean", "required" => false),
								array("name" => "code", "title" => "Conteudo do Arquivo", "alias" => "", "type" => "textarea", "required" => false),
								array("name" => "code", "title" => "Arquivo da Rota", "type" => "file", "required" => false),
							);
    }

}

?>