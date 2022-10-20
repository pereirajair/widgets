<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Utils\EWListView;
use Illuminate\Support\Facades\DB;

class CrudController extends WidgetController
{

	public function setupTable() {

    }

	public function getQueryWidgets($id = "") {
    	
		foreach($this->FIELDS as $item) {
			if ($item['type'] != "file") {
				$columns[$item['name']] = $item['alias'];
			}
		}

		// $where = $this->WHERE;
		// if ($id != '') {
		// 	$where = array_merge($this->WHERE,array($this->PRIMARY_KEY => $id));
        // }
        
		$response = DB::table($this->TABLE_NAME)->select("*");
		
		
        // $response = $response->orderBy($this->ORDER_BY);
        if ($id != '') {
            $response = $response->where($this->PRIMARY_KEY,$id);
            return $response->get()->first();
        } else {
			if (isset($this->SECONDARY_KEY)) {
				if ($this->SECONDARY_KEY != "") {
					$response->where($this->SECONDARY_KEY,'=',$this->getParam($this->SECONDARY_KEY));
				}
			}
            return $response->get();
        }
        
        
	}

    public function getAllWidgets() {    
        $widgets = $this->getQueryWidgets();
		$view = new EWListView();
		$view->setWidgetTitle($this->TITLE);

		if (isset($this->TOOLBAR_BUTTONS)) {
			if (count($this->TOOLBAR_BUTTONS)) {
				foreach ($this->TOOLBAR_BUTTONS as $item) {
					$view->addActionToolbarButton($item['icon'],$item['action'],$item['params']);
				}
			}
		}

		foreach ($widgets as $item) {
            $itemValue = (array) $item;

            $widget = array();
			$widget['route'] = $this->ROUTE;
			// $widget['table'] = $this->getParam("table");
            $widget['action'] = 'form';
			$widget[$this->PRIMARY_KEY] = $itemValue[$this->PRIMARY_KEY];
			if (isset($this->SECONDARY_KEY)) {
				if ($this->SECONDARY_KEY != '') {
					$widget[$this->SECONDARY_KEY] = $itemValue[$this->SECONDARY_KEY];
				}
			}	
			// $widget['tabIcon'] = "create";
			// $widget['tabID'] = 'edit_' . $this->getParam("table") . "_" . $widget[$this->PRIMARY_KEY];
			// $widget['tabTitle'] = "Editar";

			$img = '';
			if (isset($widget[$this->LIST_VIEW_FIELDS['image']])) {
				$img = $widget[$this->LIST_VIEW_FIELDS['image']];
            }
            // $view->printArray($widget);
			$view->addPaperItemImage($img , $itemValue[$this->LIST_VIEW_FIELDS['title']] , $itemValue[$this->LIST_VIEW_FIELDS['description']], 'ew-list-view', $widget);
			
			if (count($this->ITEM_BUTTONS)) {
				$item = $view->getLastItem();
				foreach($this->ITEM_BUTTONS as $button) {
					$id = $itemValue[$this->PRIMARY_KEY];
					$button['params'][$this->PRIMARY_KEY] = $id;
					$item->addActionButton($button['icon'],$button['action'],$button['params']);
				}
				$view->updateLastItem($item);
			}
		}

		if (isset($this->SECONDARY_KEY)) {
			$paramsToAdd = array("route" => $this->ROUTE, $this->PRIMARY_KEY => "", $this->SECONDARY_KEY => $this->getParam($this->SECONDARY_KEY), "action" => "form", "table" => $this->getParam("table"),"tabID" => "create_" . $this->getParam("table"), "tabTitle" => "Adicionar", "tabIcon" => "icons:add");	
		} else {
			$paramsToAdd = array("route" => $this->ROUTE, $this->PRIMARY_KEY => "", "action" => "form", "table" => $this->getParam("table"),"tabID" => "create_" . $this->getParam("table"), "tabTitle" => "Adicionar", "tabIcon" => "icons:add");
		}
		$view->setFab("icons:add","Adicionar","ew-list-view",$paramsToAdd);

		return $view;
	}

	public function addFormFieldsToView($view,$widget = array()) {
		foreach ($this->FIELDS as $field) {
			$value = "";
			if (isset($widget[$field['name']])) {
				$value = $widget[$field['name']];
			}
			if ($field['type'] == "text") {
				$view->addTextInput($field['name'],$field['title'],$value,$field['required']);	
			}
			if ($field['type'] == "boolean") {
				$value = false;
				if (isset($widget[$field['name']])) {
					if ($widget[$field['name']] == 't') {
						$value = true;
					}
				}
				$view->addCheckbox($field['name'],$field['title'],$value,$field['required']);
			}
			if ($field['type'] == "textarea") {
				$view->addTextAreaInput($field['name'],$field['title'],$value,$field['required']);	
			}
			if ($field['type'] == "texthtml") {
				$view->addTextHTMLEditorInput($field['name'],$value);	
			}
			if ($field['type'] == "combo") {
				$view->addPaperDropDownMenu($field['name'],$field['title'],$value,$field['options'],$field['required'],"","");
			} 
			if ($field['type'] == "hidden") {
				if (isset($field['value'])) {
					$value = $field['value'];
				}
				$view->addHiddenInput($field['name'],$value);	
			}
			if ($field['type'] == "file") {
				$view->addUploadFile($field['name']);	
			}
		}
		return $view;
	}

	public function getFormWidgets($id){
		$widget = $this->getQueryWidgets($id);
		if (($id != "")) {
            $widget = (array) $widget;
            // $widget = $widget['items'][0];
            $view = new EWListView("Editar",true);
			// if ($this->checkRoles("EWIDGETS_ADMIN")) {
				$view->addActionToolbarButton("delete","ew_load",array("route" => $this->ROUTE, "action" => "delete", $this->PRIMARY_KEY => $id));
            // }
            
		} else {
			$view = new EWListView("Adicionar",true);
		}
		
		$view = $this->addFormFieldsToView($view,$widget);
		$view->addHiddenInput("route", $this->ROUTE);
		$view->addHiddenInput("action", "save");
		$view->setFab("icons:done","Salvar","ew_send");
		
		return $view;
    }

    public function db_update($table, $where, $data, $exclude = array())
	{	
		if (!$this->bdcon) {
			$this->databaseConnect();
		}
			
		$fields = $values = array();
	    if( !is_array($exclude) ) $exclude = array($exclude);
	    foreach( array_keys($data) as $key ) {
	        if( !in_array($key, $exclude) ) {
	            $fields[] = "$key";

	            $useQuotes = true;

	            if (is_numeric($data[$key])) {
	            	$useQuotes = false;
	            }
	            if ($data[$key] == 'null') {
	            	$useQuotes = false;
	            }

	            if (!$useQuotes) {
	            	$values[] = pg_escape_string($data[$key]);
	            } else {
	            	$values[] = "'" . pg_escape_string($data[$key]) . "'";
	            }
	        }
	    }
	    foreach( array_keys($where) as $key ) {
            $whereFields[] = "$key";
            $whereValues[] = "'" . pg_escape_string($where[$key]) . "'";
	    }

	    $setClause = "";
	    foreach ($fields as $key => $field) {
	    	$setClause .= " " . $field . ' = ' . $values[$key] . ',';
	    } 
	    $setClause = substr($setClause, 0,strlen($setClause) - 1);

	    $whereClause = " ";
	    if (count($where)) {
	    	$whereClause = " WHERE ";
		    foreach ($whereFields as $key => $field) {
		    	$whereClause .= " " . $field . ' = ' . $whereValues[$key] . ' and';
		    } 
		    $whereClause = substr($whereClause, 0,strlen($whereClause) - 3);
	    }
	    
		$query = "UPDATE " . $table . " SET " . $setClause . " " . $whereClause;
	    $result = $this->db_query($query);
	   	if( $result ) {
	        return array( "pg_last_error" => false,
	                      "pg_affected_rows" => pg_affected_rows($result)
	                    );
	    } else {	
	    	if (DEVELOPMENT) {
	    		$error = array( "query" => $query, "pg_last_error" => pg_last_error($this->bdcon) );		
	        	return $error;
	    	} else {
	    		Errors::runException("DATABASE_SQL_ERROR");
	    	}
	    }
	}
    
    public function addDbField($paramName,$type = 'string',$asParam = "",$forceValue = "") {
        if ($asParam == "") {
            $this->dbFields[] = array("name" => $paramName, "type" => $type, "asParam" => $paramName, "forceValue" => $forceValue);
        } else {
            $this->dbFields[] = array("name" => $paramName, "type" => $type, "asParam" => $asParam, "forceValue" => $forceValue);
        }
        return $this->dbFields;
    }

    public function getDataFromDbFields($data = array()) {
        foreach ($this->dbFields as $field) {
            $data = $this->setData($data,$field['name'],$field['type'],$field['asParam'],$field['forceValue']);
        }
        return $data;
    }
    
    public function setData($data,$paramName,$type = 'string',$asParam = "",$forceValue = "") {
        if ($asParam == "") {
            $asParam = $paramName;
        }

        if ($type == "string") {
            if ($this->getParam($asParam) != '') {
            	if ($forceValue != "") {
            		$data[$paramName] = $forceValue;      
            	} else {
            		$data[$paramName] = $this->getParam($asParam);      	
            	}         
            }    
        } else {
            if ($type == "numeric") {
            	if ($forceValue != "") {
            		$data[$paramName] = $forceValue;      
            	} else {
            		if (is_numeric($this->getParam($asParam))) {                
	                    $data[$paramName] = $this->getParam($asParam);      
	                }
            	}
            }
        }
        
        return $data;
    }
	
	public function saveWidgets($data,$id = ""){

		$files = $this->getFiles();

		$has_files = false;

		if (count($files)) {
			foreach ($files as $file) {
				$content = file_get_contents($file['tmp_name']);
				$has_files = true;
				$b64_content = base64_encode($content);
			}
		}


		foreach ($this->FIELDS as $field) {
			$this->addDbField($field['name']);
			if ($field['type'] == "file") {
				$file_fieldname = $field['name'];
			}
		}

		if ($id == "") {
			$data = $this->getDataFromDbFields($data);
			if ($has_files) {
				$data[$file_fieldname] = $b64_content;
			}
			$dataToSave = $data;
			foreach ($this->EXCLUDE_FIELDS as $field) {
				unset($dataToSave[$field]);
			}
			DB::table($this->TABLE_NAME)->insert($dataToSave);
			// $result = $this->db_insert($this->TABLE_NAME, $data, array(), $this->EXCLUDE_FIELDS);
			
		} else {
			$data = $this->getDataFromDbFields($data);
			if ($has_files) {
				$data[$file_fieldname] = $b64_content;
			}
			$result = $this->db_update($this->TABLE_NAME, array($this->PRIMARY_KEY => $id), $data,$this->EXCLUDE_FIELDS);
		}
		$view = new EWListView();
		$view->showMessage("Salvo com Sucesso!");
        $view->runAction("ew_closeAndRefresh",array());
		return $view;
    }
    
    public function db_insert($table, $data, $returning = array(), $exclude = array()) 
	{
		if (!$this->bdcon) {
			$this->databaseConnect(); 
		}

	    $fields = $values = array();
	    if( !is_array($exclude) ) $exclude = array($exclude);
	    foreach( array_keys($data) as $key ) {
	        if( !in_array($key, $exclude) ) {
	            $fields[] = "$key";

	            $useQuotes = true;

	            if (is_numeric($data[$key])) {
	            	$useQuotes = false;
	            }
	            if ($data[$key] == 'null') {
	            	$useQuotes = false;
	            }

	            if (!$useQuotes) {
	            	$values[] = pg_escape_string($data[$key]);
	            } else {
	            	$values[] = "'" . pg_escape_string($data[$key]) . "'";
	            }	            
	        }
	    }
	    $str_returning = '';
	    if ($returning) {	    	
	    	$fields_returning = array();
	    	foreach (array_keys($returning) as $key) {
				$fields_returning[] = "$key";				
	    	} 
	    	$fields_returning = implode(",", $fields_returning);
	    	$str_returning = " RETURNING " . $fields_returning;
	    }

	    $fields = implode(",", $fields);
	    $values = implode(",", $values);
	    
		$query = "INSERT INTO " . $table . " ( " . $fields . " ) VALUES ( " . $values . " ) " . $str_returning;
		// echo $query;
	    $result = $this->db_query($query);
    	
	    if ($returning) {
	    	$insert_row = pg_fetch_row($result);

	    	foreach (array_keys($returning) as $key) {
	    		$temp[] = $key;
	    	}
	    	$returning = array_combine($temp, $insert_row);
	    }

	    if( $result ) {
	        return array( "pg_last_error" => false,
	                      "pg_affected_rows" => pg_affected_rows($result),
	                      "returning" => $returning
	                    );
	    } else {
	    	if (DEVELOPMENT) {
	    		$error = array( "query" => $query, "pg_last_error" => pg_last_error($this->bdcon) );
	    		return $error;
	    	} else {
	    		Errors::runException("DATABASE_SQL_ERROR");
	    	}	        
	    }
	}

	public function load() {
		// if( $this->isLoggedIn() )
        // {   
        // 	if ($this->isAdmin()) {

				// $table = $this->getParam("table");
				$action = $this->getParam('action');
				
				$this->WHERE = array();
                
                $this->setupTable();

				switch ($action) {
					case 'delete':
						$id = $this->getParam($this->PRIMARY_KEY);
                        $view = new EWListView("Excluindo");
                        DB::table($this->TABLE_NAME);
						$sql = "delete from " . $this->TABLE_NAME . " where " . $this->PRIMARY_KEY . " = " . $id;
						$this->db_query($sql);
						$view->runAction("ew_closeAndRefresh", array());
						$view->showMessage("Excluído com sucesso!");
						break;
					case 'form':
						$id = $this->getParam($this->PRIMARY_KEY);
						$view = $this->getFormWidgets($id);
						break;
					case 'save':
						$data = array();
						$id = $this->getParam($this->PRIMARY_KEY);
						foreach ($this->FIELDS as $field) {
							$data[$field['name']] = $this->getParam($field['name']);
						}						
						$view = $this->saveWidgets($data,$id);
						break;
					default:
						$view = $this->getAllWidgets();
						break;
				}
				// $view->addHiddenInput("table",$table);	
        // 	}
		// }
		return response()->json($view);
	}

}

?>