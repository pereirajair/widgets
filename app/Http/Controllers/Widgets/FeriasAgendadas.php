<?php 

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;

function date_compare($a, $b) {	
    $dateA = date('Y-m-d',strtotime(strtr($a['periodoFeriasDataIni'], '/', '-')));
    $dateB = date('Y-m-d',strtotime(strtr($b['periodoFeriasDataIni'], '/', '-')));
    $result = strtotime($dateA) - strtotime($dateB); 
    return $result;
}	

class FeriasAgendadas extends WidgetController {

    /**
	 * Recupera informacoes de ferias a partir do web service
	 */ 
	public function callVacationAPI() {
		
		$user =   $this->getConfigValue("FERIAS_CELEPAR_USERNAME"); 
		$passwd = $this->getConfigValue("FERIAS_CELEPAR_PASSWORD"); 
		$data = base64_encode( $user . ':' . $passwd);
		$pagina = 'https://www.gestaorh.celepar.pr.gov.br/rhcelepar/rest/service/consultarFerias';

		$options = array(
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTPHEADER =>  array('Content-Type:application/json'),
		);

		// if (DEVELOPMENT) {
		//	$options[CURLOPT_PROXY] = false;
		// }

		$retorno = json_decode(json_encode($this->getJsonApiData($pagina,$data,$options)),true);


		$str_response = str_replace("'","",json_encode($retorno));


		return $retorno;
    }
    

	public function load() {
        $view = new EWListView("Férias Agendadas - Celepar");
        $view->setBackgroundColor("green");
        
        $feriasData = $this->callVacationAPI();

        foreach($feriasData as $funcionario) {
            //foreach ($funcionariosDaArea['employees'] as $func) {
              //  if ($funcionario['login'] == $func['contactUID']) {

                    // if ($hasAddedHeader == false) {
                    //     $view->addHeaderItem($area['sigla']);
                    //     $hasAddedHeader = true;
                    //     $lastArea = $area['sigla'];
                    // }

                    $previsao = 'De: ' . $funcionario['periodoFeriasDataIni'] . ' à ' . $funcionario['periodoFeriasDataFim'];
                    $autorizacao = "Pendente de Autorização";
                    if ($funcionario['autorizada'] == "Sim") {
                        $autorizacao = "Autorizada";
                    }

                    //$view->printArray($funcionario);

                    $item = new EWListViewItem();
                    $item->setId($funcionario['matricula']);
                    $item->setTitle($funcionario['nome']);
                    $item->setDescription($previsao);
                    $item->setSubDescription($autorizacao);
                    $view->addItem($item->getItem());

/*
                    $item = new EWListViewItem();
                    $item->setId($func['contactID']);
                    $item->setAction("ew-list-view",array("route" => "./api/rest/ew-expresso-catalog/ContactDetail" ,"contactID" => 12345, "contactType" => 2,"tabID"=> 'contact_detail', 
                    "tabIcon"=> 'social:people', 
                    "tabTitle"=> 'Contatos'));
                    $item->setTitle($func['contactFullName']);
                    $item->setDescription($previsao);
                    $item->setSubDescription($autorizacao);
                    $item->setItemCssClass("normal picture");
                    $item->setEmail($func['contactMails'][0]);
                    $view->addItem($item->getItem()); */
              //  }
          //  }		
        }
		
		return response()->json($view);
	}
}
?>