<?php 

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;

class AsteriscoParana extends WidgetController {

	public function getUserOrganizationName() {
        /* TODO - IMPLEMENTAR UMA LOGICA PARA RETORNAR O NOME DA ORGANIZACAO DO USUARIO, DE ACORDO COM A ORGANIZACAO OU O EMAIL DELE. 
        E ENTAO O NOME DA ORGANIZACAO SERA USADO PARA BUSCAR A VARIAVEL DE AMBIENTE COM A URL DO SERVIDOR E A CREDENCIAL DO PABX.


        */
        return "CELEPAR";
    }

	public function setupServerCredentials() {

        $this->action = 'ew-list-view';
		$organization = $this->getUserOrganizationName();
        $this->SERVER = $this->getConfigValue("ASTERISCO_PABX_" . $organization . "_URL");
        $this->CREDENCIAL = $this->getConfigValue("ASTERISCO_PABX_" . $organization . "_USER");
        $this->SENHACREDENCIAL = $this->getConfigValue("ASTERISCO_PABX_" . $organization . "_PASSWORD");

        // if (DEVELOPMENT) {
        //     $this->SERVER =  "https://10.15.151.54/servicorest/v1/";
        //     $this->CREDENCIAL = 'testecodec';
        //     $this->SENHACREDENCIAL = 't1t2t3t4t5';
        // }

        $this->uriMeusRamais        = $this->SERVER . "ramaisporemail";
        $this->uriCentroDeCusto     = $this->SERVER . "centrodecusto";
        $this->uriListaTelefonica   = $this->SERVER . "listatelefonica";
        $this->uriAgenda            = $this->SERVER . "usuario/LOGIN/agenda";
        $this->uriChamada           = $this->SERVER . "usuario/LOGIN/chamada";
        $this->uriRamalMovel        = $this->SERVER . "usuario/LOGIN/ramalmovel";
        $this->uriAlteraRamalMovel  = $this->SERVER . "usuario/LOGIN/ramalmovel/estado";
        $this->uriCadeado           = $this->SERVER . "usuario/LOGIN/cadeado";
        $this->uriAlteraCadeado     = $this->SERVER . "usuario/LOGIN/cadeado/estado";
        $this->uriClic2CallAdmin    = $this->SERVER . "click2calladmin";
    }

    public function requestServerApi($genericUri, $options = array(), $dados = false, $method = "GET") {

        $this->generalOptions = array(CURLOPT_PROXY => "");
        $this->headerOptions = array('Accept: application/json', 'credencial: ' . $this->CREDENCIAL, 'senhacredencial: ' . $this->SENHACREDENCIAL );

        if ( !empty( $options ) ) {
            foreach ( $options as $option ) {
                $this->headerOptions[] = $option;
            }
        }
        $this->generalOptions[CURLOPT_HTTPHEADER] = $this->headerOptions;
        if ($method == "PUT") {
            $this->headerOptions[] = 'Content-Type: application/json';
            $this->generalOptions[CURLOPT_HTTPHEADER] = $this->headerOptions;
            $this->generalOptions[CURLOPT_CUSTOMREQUEST] = "PUT";
            $this->generalOptions[CURLOPT_POSTFIELDS] = $dados;
        }
        if ($method == "POST") {
             $this->headerOptions[] = 'Content-Type: application/json';
             $this->generalOptions[CURLOPT_HTTPHEADER] = $this->headerOptions;
        }
        set_time_limit(0);
        $this->generalOptions[CURLOPT_CONNECTTIMEOUT] = 10000;
        $this->generalOptions[CURLOPT_TIMEOUT] = 10000;
        $result = $this->getJsonApiData( $genericUri, $dados, $this->generalOptions );
        return $result;
    }

    public function getEmail() {
        $userSession = unserialize(\Session::get('central-seguranca-usuario'));
        return $userSession->email;
    }

    public function getRamais( $email ) {
        if (!isset($_SESSION['ASTERISCO_ramais_' . $email])) {
            $data = $this->requestServerApi( $this->uriMeusRamais, array( "email: " . trim($email) ) );
            // $_SESSION['ASTERISCO_listatelefonica'] = $lista;
        } else {
            $data = $_SESSION['ASTERISCO_ramais_' . $email];
        }
        return $data;
    }

    public function getRamalByNumber($ramalNumber) {
        $ramais = $this->getRamais($this->getEmail());
        $retVal = false;
        foreach ($ramais->ramais as $ramal) {
            if ($ramal->ramal == $ramalNumber) {
                $retVal = $ramal;
            }
        }
        return $retVal;
    }

    public function click2Call ( $origem, $destino ) {
        $dados = new \stdClass();
        $dados->origem = $origem;
        $email = $this->getEmail();
        $dados->destino = str_replace(" ","",str_replace("+","",str_replace("-","",str_replace(")","",str_replace("(","",$destino)))));
        $dados = json_encode( $dados );
        return $this->requestServerApi( $this->uriClic2CallAdmin, array("email: $email"), $dados ,'POST');
    } 


    public function getListaTelefonica() {
        if (!isset($_SESSION['ASTERISCO_listatelefonica'])) {
            $lista = $this->requestServerApi( $this->uriListaTelefonica );
            $_SESSION['ASTERISCO_listatelefonica'] = $lista;
        } else {
            $lista = $_SESSION['ASTERISCO_listatelefonica'];
        }
        return $lista;
    }

    public function getRamalMovel($ramal) {
        $uriRamalMovel = str_replace( 'LOGIN', $ramal->login, $this->uriRamalMovel );
        return $this->requestServerApi( $uriRamalMovel );
    }
    
    public function putRamalMovel($ramal) {
        $return = $this->getRamalMovel($ramal);
        $return->estado = ( $return->estado == 'on' ) ? 'off' : 'on';
        $dados = json_encode( $return );
        $uriAlteraRamalMovel = str_replace( 'LOGIN', $ramal->login, $this->uriAlteraRamalMovel );
        return $this->requestServerApi( $uriAlteraRamalMovel, null, $dados , "PUT");
    }
    
    public function getCadeado($ramal) {
        $uriCadeado = str_replace( 'LOGIN', $ramal->login, $this->uriCadeado );
        return $this->requestServerApi( $uriCadeado );
    }

    public function putCadeado ( $ramal ) {
        $return = $this->getCadeado( $ramal );
        $return->estado = ( $return->estado == 'on' ) ? 'off' : 'on';
        $dados = json_encode( $return );
        $uriAlteraCadeado = str_replace( 'LOGIN', $ramal->login, $this->uriAlteraCadeado );
        return $this->requestServerApi( $uriAlteraCadeado, null, $dados,"PUT");
    }

    public function getViewListaTelefonica() {
        $view = new EWListView("Asterisco Paraná");
        $view->setBackgroundColor("amber");
        $lista = $this->getListaTelefonica();

        foreach ( $lista->listaTelefonica as $item ) {
            $listitem = new EWListViewItem();
            $listitem->setViewType(1);
            $listitem->setPageID(0);
		    $listitem->setAction($this->action,array("route" => $this->getParam("route"), "view" => "click2call", "isMobile" => $this->getParam("isMobile"), "ramal" => $this->getParam("ramal"), "phone" => $item->ramal,"tabTitle" => "Ligar para " . $item->ramal,"tabIcon" => "communication:call" ,"tabID" => "asteriscopr_call_" . $item->ramal),true);
            $listitem->setTitle($item->nome);
            $listitem->setItemCssClass("small");
            // $listitem->setEmail($item->email);
            $listitem->addActionButton("","","",3,"" . $item->ramal. "");
            $view->addItem($listitem->getItem());
        }
        if (count($this->ramais->ramais) != 0) {    
            $view->addActionToolbarButton("settings",$this->action,array("route" => $this->getParam("route"),"view" => "settings","tabID" => "asterisco_settings","tabTitle"=>"Configurações","tabIcon"=>"settings"));        
        }
        return $view;
    }

    public function getViewSettings( $ramal ) {
        
        $view = new EWListView("Configurações",true);
        $view->setBackgroundColor("amber");

        $params = array("route" => $this->getParam("route"), "view" => "");

        $action = "ew-list-view";
        $params['view'] = "toggle";
        $params['type'] = "ramalmovel";

        $view->addHeaderItem("Ramal Móvel");

        $view->addPaperCardImage("","O que é o Ramal Móvel?","Ramal móvel possibilita que em um ambiente com rede wi-fi, as chamadas destinadas ao seu ramal fixo sejam encaminhadas para o seu aparelho móvel com softphone instalado. A habilitação inicial é feita pelo Administrador Local.","",array(),true,array(),1);

        foreach ($this->ramais->ramais as $ramal) {

            $ramalMovel = $this->getRamalMovel( $ramal );
            $params['ramal'] = $ramal->ramal;
            if ( $ramalMovel->estado == 'on' ) {
                $view->addPaperItemIcon("icons:settings-phone",$ramal->ramal,"Ativado",$action,$params);
            } else {
                $view->addPaperItemIcon("icons:block",$ramal->ramal,"Desativado",$action,$params);
            }
            
        }

        $view->addHeaderItem("Cadeado");
        $view->addPaperCardImage("","O que é o Cadeado?","Utilize o cadeado para bloquear/liberar o seu ramal fixo de efetuar ligações.","",array(),true,array(),1);

        $params['view'] = "toggle";
        $params['type'] = "cadeado";

        foreach ($this->ramais->ramais as $ramal) {
            $cadeado = $this->getCadeado( $ramal );
            $params['ramal'] = $ramal->ramal;

            if ( $cadeado->estado == 'on' ) {
                $view->addPaperItemIcon("icons:lock",$ramal->ramal,"Ativado",$this->action,$params);
            } else {
                $view->addPaperItemIcon("icons:lock-open",$ramal->ramal,"Desativado",$this->action,$params);
            }
        }
        return $view;
    }

    public function getViewCalling($origem,$destino) {
        $view = new EWListView("Ligação Telefônica");
        $view->setBackgroundColor("amber");

        if (count($this->ramais->ramais) > 1) {
            $message = "Você possui mais de um ramal liberado para o seu usuário, escolha a partir de qual ramal você gostaria de realizar esta ligação.";
        } else {
            $message = "Confirme que você deseja realmente realizar esta ligação, ao clicar no Telefone o seu ramal irá iniciar uma ligação para o número informado.";
        }
            $view->addPaperCardImage("","Fazer uma ligação para o Telefone: " . $destino,$message,"",array(),true,array(),1);

        // }

        if (($origem == '')) {
            $phone = $this->getParam("phone");
            if (count($this->ramais->ramais) == 1) {
                $ramal = $this->ramais->ramais[0];
                $params = array("route" => $this->getParam("route"), "view" => "calling", "ramal" => $ramal->ramal, "phone" => $phone);
                $view->runAction("ew_load",$params);
                
            } else {
                foreach ($this->ramais->ramais as $ramal) {
                    if ($ramal->ramal != $destino) {
                        $params = array("route" => $this->getParam("route"), "view" => "calling", "ramal" => $ramal->ramal, "phone" => $phone);
                        $view->addPaperItemIcon( "icons:communication:call", $ramal->ramal, '', "ew_load", $params,true);
                    }
                }
            }

        } else {
            if ( $origem == $destino ) {
                $view->showMessage("O ramal de Origem é igual ao ramal de destino! ");
            } else {
                $this->click2Call( $origem, $destino );
                $view->showMessage("Ligando de " . $origem . " para " . $destino . ".");
            }
            $view->runAction("ew_closeAndRefresh",array());
        
        }
        

        return $view;
    }

    public function getViewToggle( $ramalNumber ,$type = "cadeado" ) {
        $ramal = $this->getRamalByNumber( $ramalNumber );
        if ($type == "ramalmovel") {
            $title = "Ramal Móvel ";
            $this->putRamalMovel( $ramal );
            $objeto = $this->getRamalMovel($ramal);
        } else {
            $title = "Cadeado ";
            $data = $this->putCadeado( $ramal );
            $objeto = $this->getCadeado( $ramal );
        }

        if ($objeto->estado == 'on') {
            $message =  $title . $ramalNumber . ' Ativado!';
        } else {
            $message =  $title . $ramalNumber . ' Desativado!';
        }
        
        $view = new EWListView();
        $view->showMessage($message);
        $view->runAction("ew_closeAndRefresh",array());
        
        return $view;
    }

	public function load() {
		$pView = $this->getParam("view");
            $type = $this->getParam("type");
            $ramal = $this->getParam("ramal");
            $phone = $this->getParam("phone");

            $this->setupServerCredentials();
            $email = $this->getEmail();
            $this->ramais = $this->getRamais($email);

            if ($pView == "") {
                $view = $this->getViewListaTelefonica( $ramal );
            } else {

                if ($pView == "settings")        { $view = $this->getViewSettings( $ramal ); }
                if ($pView == "toggle")          { $view = $this->getViewToggle( $ramal ,$type); }
                if ($pView == "click2call")      { 

                    $view = new EWListView("Ligar para " . $phone);
                    $view->hideSearch(true);
                    $view->setBackgroundColor("amber");

                    $arrParams = array("route" => $this->getParam("route"),"isMobile" =>  $this->getParam("isMobile"), "view" => "calling", "ramal" => $ramal, "phone" => $phone,"tabTitle" => "Ligar para " . $phone,"tabIcon" => "communication:call" ,"tabID" => "asteriscopr_call_" . $phone);

                    if (count($this->ramais->ramais) == 0) {    
                        
                        
                        if ($this->getParam("isMobile") == "true") {
                            $phone = str_replace("(","",$phone);
                            $phone = str_replace(")","",$phone);
                            $phone = str_replace(" ","",$phone);
                            $phone = str_replace("-","",$phone);
                            $phone = str_replace("+","",$phone);
                            //$javascript = "window.open('tel:$phone');";
                            $javascript = "document.location.href='tel:$phone';";

                            $view->runAction("ew_js",$javascript);
                            $view->showMessage("Ligando para: " .$phone );    
                        } else {
                            $view->showMessage("Não foi possível identificar o ramal associado a sua conta.");
                        }
                        $view->runAction('ew_close',$arrParams,true);
                    } else {

                        if ($this->getParam("isMobile") == "true") {
                                
                            // $message = "Confirme que você deseja realmente realizar esta ligação, ao clicar no ícone do telefone o seu ramal " . $ramal . " irá iniciar uma ligação para o número " . $phone . ".";                    
                            // $view->addPaperCardImage("","Fazer uma ligação para o telefone: " . $phone,$message,"",array(),true,array(),1);

                            $message = "Confirme que você deseja realmente realizar esta ligação, ao clicar no ícone do telefone o seu celular " . $ramal . " irá iniciar uma ligação para o número acima.";                    
                            $view->addPaperCardImage("","Fazer uma ligação para o telefone: " . $phone,$message,"",array(),true,array(),1);

                            $phone = str_replace("(","",$phone);
                            $phone = str_replace(")","",$phone);
                            $phone = str_replace(" ","",$phone);
                            $phone = str_replace("-","",$phone);
                            $phone = str_replace("+","",$phone);
                            //$javascript = "window.open('tel:$phone');";
                            $javascript = "document.location.href='tel:$phone';";
                            $view->setFab("communication:call","Fazer Ligação","ew_js",$javascript);
                            

                        }
                    

                        if (count($this->ramais->ramais) == 1) {

                            // $view->printArray($this->ramais->ramais);

                            $userRamal = $this->ramais->ramais[0];
                            

                            if ($this->getParam("isMobile") == "true") {

                                $view->addHeaderItem("Opções de Ligação");

                                $view->addPaperItemIcon( "icons:communication:call", $userRamal->ramal, 'Realizar esta ligação através do ramal fixo.', "ew_load", $arrParams,true);

                                $view->addPaperItemIcon( "icons:communication:call", "Meu Celular", 'Realizar esta ligação através do celular.','ew_js' , $javascript,true);

                            } else {
                                
                                $message = "Confirme que você deseja realmente realizar esta ligação, ao clicar no ícone do telefone o seu ramal " . $ramal . " irá iniciar uma ligação para o número " . $phone . ".";                    
                                $view->addPaperCardImage("","Fazer uma ligação para o telefone: " . $phone,$message,"",array(),true,array(),1);

                                $view->setFab("communication:call","Fazer Ligação","ew_load",$arrParams,true);
                            } 
                            
                        } else {
                            
                            $view->runAction('ew_close',$arrParams,true);
                            $view->runAction($this->action,$arrParams,true);
                        }
                    }
                    
                    
                }
                if ($pView == "calling")         { $view = $this->getViewCalling( $ramal,$phone ); }
            }
		
		return response()->json($view);
	}
}
?>