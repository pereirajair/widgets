<?php

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;

use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;


class AplicacoesExternas extends WidgetController
{

	private $useBASE64 = true;
	private $baseURI = '/api/widgets/AplicacoesExternasOpen/';
	private $expectedParams = array("auth","app_id");

    public function getParamsFromURI($request,$paramID) {
            $paramsURI = str_replace($this->baseURI,'',$request->uri);
            $uri = explode('/',$paramsURI);
            if ($this->useBASE64) {
                    return base64_decode($uri[$paramID]);
            } else {
                    return $uri[$paramID];
            }

    }

    public function getParamsFromGET($request) {
            $newArr = array();
            foreach ($this->expectedParams as $key => $value) {
                $newArr[$value] = $this->getParamsFromURI($request,$key);
            }
            return (object)$newArr;
    }

    function loadData($site)
	{
		/* define the dynamic values that can be used in the login process */
		$tmpUser = "";
		$tmpOrg = "";

		$tmpUser = $this->getUser(); 
		$tmpPassword = $this->getPassWord();

		$replace = array(
					'%user%' => $tmpUser,
					'%password%' => $tmpPassword);

		$dataTmp = str_replace("\r", "", $site['post']);
		$dataTmp = explode("\n", $dataTmp);

		$this->siteAddress = $site['endereco'];

		$data = array();
		foreach ($dataTmp as $aux)
		{
			list($varName,$value) = explode("=", $aux, 2);
			$data["$varName"] = $value;
		}

		/* replace the tags with the actual values */
		foreach ($data as $key => $value)
			foreach ($replace as $before => $after)
				$data[$key] = str_replace($before, $after, $data[$key]);

		/* load the data */
	    $output = array();
	    foreach ($data as $key => $value)
	        $output[] = array(
			            "name" => $key,
			            "value" => $value);

		return $output;
	}

	public function get($request)
	{
		$this->setRequest($request);
        $objParams = $this->getParamsFromGET($request);
        $this->setParams($objParams);

 		if( $this->isLoggedIn() )
 		{	


 			$user_id = $this->getUserId();
			$app_id = $this->getParam('app_id');
			 
 			$soapClient = $this->getSoapExternalApplications();

			$result = $soapClient->recuperaMinhasAplicacoesExternas($user_id);

			$user_app = false;
			foreach ($result as $app) {
				if ($app['aplicacao_externa_id'] == $app_id) {
					$user_app = $app;
				}
			}

			$loginData = $this->loadData($user_app);
			$generatedForm = "";
			foreach ($loginData as $formData)
				$generatedForm .= "<input type=\"hidden\" name=\"" . $formData['name']  . "\" id=\"" . $formData['name']  . "\" value=\"" . $formData['value']  . "\">";
			$generatedForm = 'document.write(\'' . $generatedForm . '\');';

			$encodedForm = '';
			for ($i = 0; $i < strlen($generatedForm); ++$i)
				$encodedForm .= '%' . bin2hex($generatedForm[$i]);

			$encodedForm = '<script type="text/javascript">eval(unescape(\'' . $encodedForm . '\'))</script>';

			$html = '<script type="text/javascript">
					function enviarPost()
					{
						document.getElementById("formBridge").submit();
					}
					</script>
					</head>
					<body>
					<form name="formBridge" id="formBridge" method="POST" action="' . $user_app['endereco']. '">
					' . $encodedForm . '
					</form>
					<script language="JavaScript">
					enviarPost();
					document.write(\'<p>Se a pagina nao for atualizada em alguns instantes, <a href="#" onClick="enviarPost();">clique aqui</a></p>\');
					</script>';

			if (!$user_app) {
				$response = new Response($request);
                $response->code = 204;
                return $response;
			} else {
				$response = new Response($request);
                $response->code = Response::OK;
                $response->addHeader('content-type', 'text/html');
                $response->body = $html;
                return $response;
			}

 		} 

     }
     
     private $production = true;

     private $URL_PROD = "https://soap.workflow.pr.gov.br/";
     private $URL_DESENV = "https://soap.expresso.celepar.parana/";
 
     private $soapOrgchart = 'soap.orgchart.php';
     private $soapCachedLDAP = 'soap.cachedLDAP.php';
     private $soapSOC = 'sos/soap.sos.php';
     private $soapExternalAplications = 'soap.externalApplications.php';
     
     private $soapSOCAuth = 'sos/soap.sos.auth.php';
     
     private $USER_soapCachedLDAP = 'widgets';
     private $PASS_soapCachedLDAP = 'quoD8dem';
 
     public function getSoapClient($endereco,$login = "",$password = "") {
         if ($this->production) {
             $endereco = $this->URL_PROD . $endereco;
         } else {
             $endereco = $this->URL_DESENV . $endereco;
         }
         $arrConf = array(
             'location' => $endereco,
             'uri' => $endereco,
             'encoding' => 'UTF-8',
             'soap_version' => SOAP_1_2,
             'stream_context' => stream_context_create(array(
                 'ssl' => array(
                     'verify_peer' => false,
                     'verify_peer_name' => false,
                     'allow_self_signed' => true
                 )
             ))
         );
         if ($login != '') {
             $arrConf['login'] = $login;
         }
         if ($password != '') {
             $arrConf['password'] = $password;
         }
         //1print_r($arrConf);
         $soapClient = new \SoapClient(null, $arrConf);
 
         return $soapClient;
     }

 
     public function getSoapSOCAuth() 	{	return $this->getSoapClient($this->soapSOCAuth,$this->getUser(),$this->getPassword());   }
     public function getSoapSOC() 		{	return $this->getSoapClient($this->soapSOC);		 }
     public function getSoapOrgchart()   { 	return $this->getSoapClient($this->soapOrgchart);		 }
     public function getSoapCachedLDAP() {	return $this->getSoapClient($this->soapCachedLDAP,$this->USER_soapCachedLDAP,$this->PASS_soapCachedLDAP);  }
     public function getSoapExternalApplications() {	return $this->getSoapClient($this->soapExternalAplications,$this->getUser(),$this->getPassword());  }
	 
	 
	 public function load() {

        $user_id = $this->getUserId();
        $user_id = 83173;
		$auth = $this->getParam('auth');
		// $workflow = new WorkflowAdapter();
		$soapClient = $this->getSoapExternalApplications();
		$result = $this->recuperaMinhasAplicacoesExternas($user_id);

		$view = new EWListView();
		$view->setWidgetTitle("Aplicações Externas");
		$view->setBackgroundColor("cyan");

		$categorias = array();
		foreach ($result as $app) {
			if ($app['categoria'] == "") {
				$app['categoria'] = "Aplicações Externas";
			} 
			$categorias[$app['categoria']][] = $app;
		}

		$categorias = array_reverse($categorias);

		$lastCategory = "";
		foreach ($categorias as $key => $items) {

			foreach ($items as $app) {

				$urlAuth = base64_encode($auth) . '/' . base64_encode($app['aplicacao_externa_id']);
	
				$appURL = $app['endereco'];
				if ($app['autenticacao'] == 1) {
					$appURL = "./api/rest/ew-celepar/AplicacoesExternasOpen/" . $urlAuth;
				}
	
				if ($app['categoria'] != $lastCategory) {
					$view->addHeaderItem($app['categoria']);
					$lastCategory = $app['categoria'];
				}
	
				$item = new EWListViewItem();
				$item->setTitle($app['nome']);
				$item->setDescription($app['descricao']);
				$item->setImage("data:image/png;base64," . $app['imagem_b64'],32,32);
				$item->setAction("ew_openURL",array("url" => $appURL));
				$view->addItem($item->getItem());
	
			}

		} 
		
		return response()->json($view);
	 }

}

?>