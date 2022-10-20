<?php 

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;

class AccessLog extends WidgetController {

	
	public function load() {

		$this->view = new EWListView("Estatísticas de Uso");
		$viewName = $this->getParam("view");

		if ($viewName == "") {
			$this->view = $this->getViewStats();
		}
		if ($viewName == "installs") {
			$this->view = $this->getViewInstalls();
		}
		if ($viewName == "byRouteOrWidget") {
			$this->view = $this->getInstallsByRouteOrWidget();
		}
		if ($viewName == "assignProfile") {
			$profileID = $this->getParam("profileID");
			$profileName = $this->getParam("profileName");
			$widgetID = $this->getParam("widgetId");
			$sql = 
			"UPDATE ew_user_settings 
				SET value = (SELECT value FROM ew_user_settings WHERE user_id = ". $profileID . ") WHERE user_id = 115507";
			$response = $this->db_query($sql);

			if ($response) {
				$view->showMessage("Perfil ". $profileName . " copiado para Conta Projeto Mobile.");
			} else {
				$view->showMessage("Não foi possível copiar o perfil " . $profileName);
			}
			$view->runAction("ew_load", array("route" => $this->getParam("route"), "view" => "byRouteOrWidget", "widgetId" => $widgetID));
		}
		
		return response()->json($this->view);
	}
	public function getViewStats() {
            $view = new EWListView("Estatísticas de Uso");

            $startDate = $this->getParam("startDate");
            $endDate   = $this->getParam("endDate");
            $pShowWidgets = $this->getParam("showWidgets");

            if (($pShowWidgets == "") || ($pShowWidgets == "true")) {
                $pShowWidgets = true;
            } else {
                $pShowWidgets = false;
            }

            $showWidgets = $pShowWidgets;

            $today = new \DateTime();
            if (empty($startDate)) {
                $startDate = date_sub($today, date_interval_create_from_date_string('30 days'))->format('d/m/Y');    
            } else {
                $startDate = str_replace("/", "-", $startDate);
                $startDate = date("d/m/Y",strtotime($startDate));
            }
    
            if (empty($endDate)) {
                $endDate = date_add($today, date_interval_create_from_date_string('30 days'))->format('d/m/Y');    
            } else {
                $endDate = str_replace("/", "-", $endDate);
                $endDate = date("d/m/Y",strtotime($endDate));
            }
    
            $view->addDateInput("startDate","Data de Início", $startDate,true);
            $view->addDateInput("endDate","Data de Término", $endDate,true);
            $view->addCheckbox("showWidgets","Mostrar por Widgets",$pShowWidgets);

            $filterDate = " between '" . date("Y-m-d",strtotime(str_replace("/", "-", $startDate))) . "' and '" . date("Y-m-d",strtotime(str_replace("/", "-", $endDate))) . "' ";

            $params = array( "route" => $this->getParam("route"), "view" => "installs", "tabID" => "stats_installs", "tabTitle" => "Widgets Instalados","tabIcon" => "icons:view-quilt");

            $view->addActionToolbarButton("icons:dns","ew-list-view",$params);

            if ($showWidgets) {
                $sql = "select 
                            w.id as widget_id,
                            w.name as title, 
                            w.icon,
                            w.route_id,
                            (select COALESCE(sum(al.access_qtd),0) as qtdAccess from access_log al where al.route_id = w.route_id and al.access_mobile = false and al.access_date" . $filterDate . ") as qtd_access_desktop,
                            (select count(qtdaccess_users.user_id) as qtdAccess from (select al.user_id from access_log al where al.route_id = w.route_id and al.access_mobile = false and al.access_date " . $filterDate . " group by al.user_id) as qtdaccess_users) as qtd_access_users_desktop,
                            (select COALESCE(sum(al.access_qtd),0) as qtdAccess from access_log al where al.route_id = w.route_id and al.access_mobile = true and al.access_date" . $filterDate . ") as qtd_access_mobile,
                            (select count(qtdaccess_users.user_id) as qtdAccess from (select al.user_id from access_log al where al.route_id = w.route_id and al.access_mobile = true and al.access_date " . $filterDate . " group by al.user_id) as qtdaccess_users) as qtd_access_users_mobile,
                            (select count(qtdaccess_users.user_id) as qtdAccess from (select al.user_id from access_log al where al.route_id = w.route_id and al.access_date " . $filterDate . " group by al.user_id) as qtdaccess_users) as qtd_access_users_global
                        from 
                            widgets w
                        order by 
                            qtd_access_desktop desc, 
                            qtd_access_users_desktop desc";
            } else {
                $sql = "select 
                            null as widget_id,
                            r.url as title,
                            r.id as route_id,
                            (select COALESCE(sum(al.access_qtd),0) as qtdAccess from access_log al where al.route_id = r.id and al.access_mobile = false and al.access_date" . $filterDate . ") as qtd_access_desktop,
                            (select count(distinct(al.user_id)) as qtdAccess from access_log al where al.route_id = r.id and al.access_mobile = false and al.access_date" . $filterDate . ") as qtd_access_users_desktop,
                            (select COALESCE(sum(al.access_qtd),0) as qtdAccess from access_log al where al.route_id = r.id and al.access_mobile = true and al.access_date" . $filterDate . ") as qtd_access_mobile,
                            (select count(distinct(al.user_id)) as qtdAccess from access_log al where al.route_id = r.id and al.access_mobile = true and al.access_date" . $filterDate . ") as qtd_access_users_mobile,
                            (select count(distinct(al.user_id)) as qtdAccess from access_log al where al.route_id = r.id and al.access_date" . $filterDate . ") as qtd_access_users_global
                        from 
                            routes r
                        order by 
                            qtd_access_desktop desc,
                            qtd_access_users_desktop desc";
            }

            $data = pg_fetch_all($this->db_query($sql));

            $view->addHeaderItem("Resultados: (Desktop/Mobile)");

            foreach ($data as $widget) {
                $action = "ew-list-view";
                $params = array( "route" => $this->getParam("route"), "view" => "byRouteOrWidget", "widgetId" => $widget['widget_id'], "routeId" => $widget['route_id'], "tabID" => $widget['route_id'], "tabTitle" => $widget['title'],"tabIcon" => "icons:view-quilt", "showWidgets" => $showWidgets, "filterDate" => $filterDate );

                $description = "Acessos: " . $widget['qtd_access_desktop']  . "/" .  $widget['qtd_access_mobile'] . "";
                $subDescription = "Usuários:" . $widget['qtd_access_users_desktop'] . "/" .  $widget['qtd_access_users_mobile'] . " Total: " . $widget['qtd_access_users_global'];

                if ($showWidgets) {
                    $imageAddress = "data:image/jpeg;base64," . $widget['icon'];
                } else {
                    $imageAddress = "";
                }

                $view->addPaperItemImage($imageAddress,$widget['title'],$description,$action,$params);
                $view->updateLastItem($view->getLastItem()->setSubDescription($subDescription));
            }

            $view->setFab("icons:search", "Pesquisar", "ew_send", false,"selection");

            return $view;
        }

        public function getViewInstalls() {
            $sql = "
            (select (select count(*) from ew_user_settings es where value like concat('%',e.class_name,'%') ) as qtd, e.name, e.id from widgets e where e.class_name != 'ew-list-view' order by qtd desc)
            UNION
            (select (select count(*) from ew_user_settings es where value like concat('%widgetId\":\"',e.id,'\"%') ) as qtd, e.name, e.id from widgets e WHERE e.class_name = 'ew-list-view' order by qtd desc)
            order by qtd desc";

            $data = pg_fetch_all($this->database->query($sql));

            foreach ($data as $widget) {
                $action = "ew-list-view";
                $params = array( "route" => $this->getParam("route"), "view" => "byRouteOrWidget", "widgetId" => $widget['id'], "tabID" => $widget['id'], "tabTitle" => $widget['widgettitle'],"tabIcon" => "icons:view-quilt");
                $this->view->addPaperItemImage("./api/rest/Icon?id=" . $widget['id'],$widget['widgettitle'],$widget['qtd'],$action,$params);
            }
            return $this->view;
        }

        public function getInstallsByRouteOrWidget() {
            $widget_id = $this->getParam("widgetId");
            $showWidgets = $this->getParam("showWidgets");
            $route_id = $this->getParam("routeId");
            $filterDate = $this->getParam("filterDate");

            if ($showWidgets == "true") {
                $strTitle  = "Usuários com este Widget";
                $strHeader = "Widget";
                $sql = "select id, name as title, description from ew_widgets where id = " .$widget_id;
            } else {
                $strTitle  = "Usuários com esta Rota";
                $strHeader = "Rota";
                $sql = "select class_method as title, url as description from routes where id = " .$route_id;
            }

            $this->view->setWidgetTitle($strTitle);
            $this->view->addHeaderItem($strHeader);

            $data = pg_fetch_all($this->database->query($sql));

            foreach ($data as $unit) {
                if ($showWidgets == "true") {
                    $imageAddress = "./api/rest/Icon?id=" . $unit['id'];
                } else {
                    $imageAddress = "";
                }
                $this->view->addPaperItemImage($imageAddress,$unit['title'],$unit['description']);
            }

            $sql = "select 
                        al.user_id, 
                        to_char(max(al.access_date), 'DD/MM/YYYY') as access_date,

                        coalesce((select sum(x.access_qtd) 
                        from ew_access_log x 
                        where x.route_id = " . $route_id . "
                        and x.access_mobile = true
                        and x.access_date " . $filterDate . "  
                        and x.user_id = al.user_id 
                        group by x.user_id, x.access_mobile),0) as mobile,

                        coalesce((select sum(x.access_qtd) 
                        from ew_access_log x 
                        where x.route_id = " . $route_id . "
                        and x.access_mobile = false
                        and x.access_date " . $filterDate . " 
                        and x.user_id = al.user_id 
                        group by x.user_id, x.access_mobile),0) as desktop

                    from ew_access_log al 
                    where al.route_id = " . $route_id . " 
                    and al.access_date " . $filterDate . " 
                    group by al.user_id order by access_date desc";

            $data = pg_fetch_all($this->database->query($sql));

            $this->view->addHeaderItem("Usuários " . $filterDate );

            foreach ($data as $user) {
                $userData = $this->getUserById($user['user_id']);

                if (isset($userData[0]['cn'])) {
                    $item = new EWListViewItem();
                    $item->setId($user['user_id']);
                    $item->setAction("ew-list-view",array( "route" => "./api/rest/ew-expresso-catalog/ContactDetail", "contactID" => $user['user_id'], "contactType" => 2));
                    $item->setTitle($userData[0]['cn']);
                    $item->setDescription($userData[0]['mail']);
                    $item->setEmail($userData[0]['mail']);
                    $item->setSubDescription("Último acesso: " . $user['access_date']);
                    $item->setPageID(0);
                    $item->addActionButton("hardware:computer", "", array(), 2, $user["desktop"], "fabTheme", "", "", 120, 120, "contain", true);
                    $item->addActionButton("hardware:smartphone", "", array(), 2, $user["mobile"], "fabTheme", "", "", 120, 120, "contain", true);
                    // $item->addActionButton("icons:supervisor-account", "ew_load", array("route" => $this->getParam("route"), "view" => "assignProfile", "profileID" => $user['user_id'], "profileName" => $userData[0]['cn'], "widgetId" => $widget_id), 1, "", "fabTheme", "", "", 120, 120, "contain", true);
                    $this->view->addItem($item->getItem());
                }
            }
            return $this->view;
        }
}


?>