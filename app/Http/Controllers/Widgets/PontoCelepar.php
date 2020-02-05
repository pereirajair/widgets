<?php 

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;

class PontoCelepar extends WidgetController {

	public function load() {

		$view = new EWListView("Ponto Celepar",true);

		$_server_url = "https://www.gestaorh.celepar.pr.gov.br/rhcelepar/rest/service/login";

        $routeUser = $this->getRouteUser();

        if ($routeUser == false) {
            $view->addErrorItem("Necessário se autenticar para visualizar o ponto.");
            $this->requestRouteUserName($view);
        } else {

            $user = $routeUser['username'];
            $passwd = $routeUser['password'];

            $data_binary = base64_encode($user . ":" . $passwd);

       //     $view->printArray($routeUser);

            $options = array( 
                CURLOPT_HTTPHEADER => array("Content-Type: application/json", "Accept: application/json"),
            );
        //	if (DEVELOPMENT) {
                $options[CURLOPT_PROXY] = false;
        //	}

            $result = $this->getJsonApiData($_server_url,$data_binary,$options);

            $data = array_reverse($result);

            $f_data = array();

            $f_data["saldo"] = array();

            $first_element = array_shift($data);

            if ($data[0]->nome == null) {

                $item = new EWListViewItem();
                $item->setTitle("Nao foi possivel retornar os dados do ponto para o seu usuario.");
                $item->setDescription("Verifique se você possui acesso acesso no sistema de ponto da Celepar.");
                $item->setIcon("image:timer");
                $item->setViewTypeCard(true);
                $view->addItem($item->getItem());

                $this->setResult($view->getResult());
                return $view;
                // return $this->getResponse();
            }

            $f_data["user"] = $user;

            $f_data["saldo"]["nome"] = $data[0]->nome;
            $f_data["saldo"]["matricula"] = $data[0]->matricula;
            $f_data["saldo"]["saldohorasatual"] = $first_element->saldohorasatual;
            $f_data["saldo"]["saldohorasanterior"] = $first_element->saldohorasanterior;
            $f_data["saldo"]["horasmes"] = $first_element->horasmes;
            $f_data["saldo"]["dataatualizacao"] = $first_element->dataatualizacao;
            $f_data["saldo"]["ano"] = $first_element->ano;

            $f_data["registros"] = array();
            $tmp_data = array();

            foreach ($data as $i => $registro) {

                $f_data["registros"][$i]["ano"] = $registro->ano;
                $f_data["registros"][$i]["dataHora"] = $registro->dataHora;
                $f_data["registros"][$i]["dataHoraString"] = $registro->dataHoraString;
                $f_data["registros"][$i]["dataString"] = $registro->dataString;
                $f_data["registros"][$i]["horaString"] = $registro->horaString;
                $f_data["registros"][$i]["origem"] = $registro->origem;
                $f_data["registros"][$i]["local"] = $registro->local;
                $f_data["registros"][$i]["tipo"] = $registro->tipo;
                $f_data["registros"][$i]["tipoDesc"] = $this->computeTipoDesc($registro->tipo);
                $f_data["registros"][$i]["tipoString"] = $registro->tipoString;

                if(!isset($tmp_data["registros"][$registro->dataString]))
                    $tmp_data["registros"][$registro->dataString] = array();
                array_unshift($tmp_data["registros"][$registro->dataString], $f_data["registros"][$i]);

            }

            $tmp_data["saldo"]["saldohorasatual"] = $first_element->saldohorasatual;
            $tmp_data["saldo"]["saldohorasanterior"] = $first_element->saldohorasanterior;
            $tmp_data["saldo"]["horasmes"] = $first_element->horasmes;

            $items = array();

            $view->addActionToolbarButton("refresh","ew_refresh",array());

            $view->addHeaderItem("Saldo");
            $item = new EWListViewItem();
            $item->setTitle("Saldo do Mês");
            $item->setDescription($tmp_data['saldo']['horasmes']);
            $item->setIcon("image:timer");
            $view->addItem($item->getItem());

            $item = new EWListViewItem();
            $item->setTitle("Saldo Atual");
            $item->setDescription($tmp_data['saldo']['saldohorasatual']);
            $item->setIcon("image:timer");
            $view->addItem($item->getItem());

            foreach ($tmp_data['registros'] as $key => $registro) {

                $view->addHeaderItem($key);

                foreach ($registro as $ponto) {

                    $item = new EWListViewItem();
                    $item->setTitle($ponto['tipoDesc']);
                    $item->setDescription($ponto['horaString']);
                    $item->setIcon($this->computeIcon($ponto));
                    $view->addItem($item->getItem());

                }
            } 
        }

		return response()->json($view);
	}

	

	public function strToBoolean($value) {
		if ($value == "false") {
			return false;
		} else {
			return true;
		}
	}

	public function computeTipoDesc($tipo) {
 		if ($tipo == "10") { $tipoDesc = "Entrada"; }
		if ($tipo == "11") { $tipoDesc = "Saída"; }
		if ($tipo == "3") { $tipoDesc = "Tratamento"; }
		if ($tipo == "2") { $tipoDesc = "Particular"; }
		if ($tipo == "1") { $tipoDesc = "Serviço"; }
		if ($tipo == "0") { $tipoDesc = "Manual"; }
		return $tipoDesc;
 	}

 	public function computeIcon($registro) {
        $icon = "image:timer";
        if ($registro['tipo'] == "0") { $icon = "hardware:computer"; }
        if ($registro['tipo'] == "1") { $icon = "icons:assignment-ind"; }
        if ($registro['tipo'] == "2") { $icon = "maps:directions-run"; }
        if ($registro['tipo'] == "3") {  $icon = "maps:local-hospital"; }
        if ($registro['tipo'] == "10") { $icon = "image:navigate-before"; }
        if ($registro['tipo'] == "11") { $icon = "image:navigate-next";  }
        return $icon;
    }

}
?>