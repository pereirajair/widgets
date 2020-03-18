<?php 

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;

class Login extends WidgetController {

	public function load() {

		$view = new EWListView("Login",true);

        $routeID = $this->getParam("routeID");
        $send = $this->getParam("send");
        
        $route = \DB::table('routes')->where('id','=',$routeID)->get()->first();
        $widget = \DB::table('widgets')->where('route_id','=',$routeID)->get()->first();

        $showForm = true;

        if ($send == true) {
            $showForm = false;
            // $view->addErrorItem("Senha Alterada com sucesso!");
            // $view->showMessage("Senha Alterada com sucesso!");

            \Session::put('route_' . $routeID . '_username',$this->getParam('username'));
            \Session::put('route_' . $routeID . '_password', $this->getParam('password'));
            $view->runSignal("ew-refresh-route",array("route" => $route->url));
            $view->runAction("ew_load",array("route" => $route->url));
            $view->runAction("ew_closeAndRefresh");
            // $view->setFab("done","Fechar","ew_close",array());	
        }
		
		if ($showForm) {

            $view->addPaperItemImage("data:image/jpeg;base64," . $widget->icon,$widget->name,$widget->description);
            $view->addHiddenInput("route", $this->getParam("route"));
            $view->addHiddenInput("routeID", $this->getParam("routeID"));
            $view->addHiddenInput("send", "true");
            $view->addTextInput("username","Usuário","",true,"","lock-outline");
			$view->addTextInput("password", "Senha", "", true, "", "lock-open", "password");
			$view->setFab("done", "Autenticar", "ew_send", array());		
		}

		return response()->json($view);
	}



}
?>