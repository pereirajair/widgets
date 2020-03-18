<?php 

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;

class Organograma extends WidgetController 
{
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

	/**
	 * Reduz recursivamente o array multidimensional com as áreas do organograma em forma hierárquica
	 */
	public function reducedim($multidim)
	{
		$aux = array();
		foreach($multidim AS $k => $v){
			$tmp = array();
			$reduced = array();
			foreach($v AS $i => $j){
				if($i != 'children')
					$tmp[$i] = $j;
				elseif(!empty($j))
					$reduced = $this->reducedim($j);
			}
			$aux[] = $tmp;
			$aux   = array_merge($aux, $reduced);
		}
		return $aux;
    }

	public function getSoapSOCAuth() 	{	return $this->getSoapClient($this->soapSOCAuth,$this->getUser(),$this->getPassword());   }
	public function getSoapSOC() 		{	return $this->getSoapClient($this->soapSOC);		 }
	public function getSoapOrgchart()   { 	return $this->getSoapClient($this->soapOrgchart);		 }
	public function getSoapCachedLDAP() {	return $this->getSoapClient($this->soapCachedLDAP,$this->USER_soapCachedLDAP,$this->PASS_soapCachedLDAP);  }
	public function getSoapExternalApplications() {	return $this->getSoapClient($this->soapExternalAplications,$this->getUser(),$this->getPassword());  }

	/**
	 * Busca da area a partir dos caracteres informados pelo widget
	 */ 	
	public function searchAreas($areas,$search) {
		if ($search != '') {
			$newAreas = array();
			foreach ($areas as $area) {
				if ( (strpos(strtolower($area['sigla']),strtolower($search)) !== FALSE) ||  (strpos(strtolower($area['descricao']),strtolower($search)) !== FALSE) ) {
					$newAreas[] = $area;
				}
			}
		} else {
			$newAreas = $areas;
		}
		return $newAreas;
	}

	/**
	 * Busca do funcionario a partir dos caracteres informados pelo widget
	 */
	public function searchEmployees($employees, $search) {
		if ($search != '') {
			$newEmployees = array();
			foreach ($employees as $employee) {
				if ( (strpos(strtolower($employee['nome']),strtolower($search)) !== FALSE) || 
					 (strpos(strtolower($employee['telefone']),strtolower($search)) !== FALSE) ||
					 (strpos(strtolower($employee['email']),strtolower($search)) !== FALSE) ) {
					$newEmployees[] = $employee;	
				}	
			}	
		} else {
			$newEmployees = $employees;
		}
		return $newEmployees;
	}

	/**
 	 * Recupera funcionarios a partir de uma area
 	 */

	public function getEmployeesFromArea($areaid) {
		$soapOrgchart = $this->getSoapOrgChart();
		$soapCachedLDAP = $this->getSoapCachedLDAP();



		// recupera os IDs dos funcionarios da area (apenas os ativos)
		$employees = $soapOrgchart->getEmployeesAreaID($areaid, true);

		$areaData = $soapOrgchart->getArea($areaid);

		// com os IDs dos usuarios da area, busca no LDAP os seus detalhes
		$output = array();
		foreach($employees AS $k => $v){
			$funcionario = $soapCachedLDAP->getEntryByID($v['funcionario_id']);
			$output[$funcionario['cn']] = $funcionario;
		}

		// ordena por nome
		ksort($output);

		$saida = array();
		foreach($output as $v)
			$saida[] = $v;

		$newEmployees = array();		

		foreach ($saida as $emp) {
			$newEmp = array();
			$newEmp['contactID'] = $emp['uidnumber'];
			$newEmp['contactUIDNumber'] = $emp['uidnumber'];
			$newEmp['contactType'] = 2;
			$newEmp['contactFirstName'] = $emp['givenname'];
			$newEmp['contactLastName'] = $emp['sn'];
			$newEmp['contactFullName'] = $emp['cn'];
			$newEmp['contactAlias'] = '';
			$newEmp['contactBirthDate'] = '';
			$newEmp['contactNotes'] = '';			
			$newEmp['contactMails'] = array($emp['mail']);
			$newEmp['contactPhones'] = array($emp['telephonenumber']);
			$newEmployees[] = $newEmp;
		}
		if ($areaData == false) {
			$areaData = array();
		} else {
			$areaData = array($areaData);
		}			

		$holderID = $areaData[0]['titular_funcionario_id'];
		$substituteID = $areaData[0]['substituto_funcionario_id'];
		$indexHolder = -1;
		$indexSub = -1;

		if ($holderID != '')  {		
			foreach ($newEmployees as $key=>$item) {
				if ($holderID == $item['contactID']) {
					$holder = $item;
					$indexHolder = $key;
				}		
			}

			if ($indexHolder >= 0) {
				unset($newEmployees[$indexHolder]);				
			}											
		}
		if ($substituteID != '') {	
			foreach ($newEmployees as $key=>$item) {
				if ($substituteID == $item['contactID']) {
					$substitute = $item;
					$indexSub = $key;
				}
			}				
			
			if ($indexSub >= 0) {				
				unset($newEmployees[$indexSub]);				
			}														
		}

		$titleEmployee = array("viewTypeHeader" => true, "headerTitle" => "Colaboradores");
		$titleSubstitute = array("viewTypeHeader" => true, "headerTitle" => "Substituto");
		$titleHolder = array("viewTypeHeader" => true, "headerTitle" => "Titular");
		
		if ($indexHolder >= 0) {
			if ($indexSub >= 0) {
				array_unshift($newEmployees, $titleHolder, $holder, $titleSubstitute, $substitute, $titleEmployee);	
			} else {
				if (count($newEmployees) > 0) {
					array_unshift($newEmployees, $titleHolder, $holder, $titleEmployee);
				} else {
					array_unshift($newEmployees, $titleHolder, $holder);
				}				
			}
		} 

		$f_data = array ('employees' => $newEmployees, 'areas' => array(), 'employeesArea' => $areaData);

		return $f_data;
	}

	/**
 	 * Recupera Area e funcionarios a partir a partir do ID do usuario 
 	 */

	public function getAreasAndEmployees($userID, $search){

		$soapClient = $this->getSoapOrgchart();

		// recupera dados do usuário logado
		$employeeData = $soapClient->getEmployee($userID);

		// recupera dados da organização do usuário logado
		$organizationData = $soapClient->getOrganization($employeeData['organizacao_id']);

		// recupera as áreas do organograma estruturadas em uma matriz
		$areas = $soapClient->getHierarchicalOrganizationAreas($employeeData['organizacao_id']);

		// reduz as dimensões da matriz de áreas
		$areas = $this->reducedim($areas);				

		if ( !empty($search) ){
			$areas = $this->searchAreas($areas,$search);

			if ( empty($areas) ) {
				// recupera os funcionários que fazem parte da organização do usuário logado
				$employees = $soapClient->getOrganizationEmployees($employeeData['organizacao_id'], true, true, false);
				$employees = $this->searchEmployees($employees, $search);
			}
		}

		$resultEmployees = array();
		if (isset($employees)) {
			foreach ($employees as $emp) {
				$newEmp = array();

				//print_r($emp);
				$newEmp['contactID'] = $emp['funcionario_id'];
				$newEmp['contactType'] = 2;
				$newEmp['contactUIDNumber'] = $emp['funcionario_id'];
				$newEmp['contactFirstName'] = $emp['nome'];
				$newEmp['contactLastName'] = $emp['nome'];
				$newEmp['contactFullName'] = $emp['nome'];
				$newEmp['contactAlias'] = '';
				$newEmp['contactBirthDate'] = '';
				$newEmp['contactNotes'] = '';
				$newEmp['contactInfo'] = $emp['area_sigla'];
				$newEmp['contactMails'] = array($emp['email']);
				$newEmp['contactPhones'] = array($emp['telefone']);
				$resultEmployees[] = $newEmp;
			}
		}

		$f_data = array ('areas' => $areas, 'employees' => $resultEmployees, 'organizacao' => $organizationData['nome']);	

		return $f_data;
    }
    
    public function addEmployeesToView($view,$f_data) {

        if (count($f_data['employees'])) {

            foreach ($f_data['employees'] as $employee) {

                if (isset($employee['viewTypeHeader'])) {
                    $view->addHeaderItem($employee['headerTitle']);
                } else {
                    $item = new EWListViewItem();
                    $item->setId($employee['contactID']);
                    $item->setAction("ew-list-view",array( "route" => "./api/rest/ew-expresso-catalog/ContactDetail","contactID" => $employee['contactID'], "contactType" => 2,"tabID"=> 'contact_detail', 
					"tabIcon"=> 'social:people', 
					"tabTitle"=> 'Contatos'));
                    $item->setTitle($employee['contactFullName']);
                    $item->setDescription($employee['contactMails'][0]);
                    $item->setSubDescription($employee['contactPhones'][0]);
					$item->setItemCssClass("normal picture");
					$contactInfo = '';
					if (isset($employee['contactInfo'])) {
						$contactInfo = $employee['contactInfo'];
					}
					$item->setDate($contactInfo);
                    $item->setEmail($employee['contactMails'][0]);
                    $view->addItem($item->getItem());
                }
            }
        } else {
            $view->showMessage("Nenhum Resultado Encontrado!");
        }

        return $view;
    }

	public function load() {

        $userID = $this->getUserId();
        $userID = 83173;
		$search = $this->getParam('search');				
		$areaid = $this->getParam('area_id');
		$route  = $this->getParam("route");
		
		$view = new EWListView();
		$view->setBackgroundColor("green");
		$view->setWidgetTitle("Organograma");
		$view->hideSearch(false,false);

		if (empty($areaid) ) {

			$f_data = $this->getAreasAndEmployees($userID, $search);

			if ($search == "") {
				$view->addHeaderItem($f_data['organizacao']);

				foreach ($f_data['areas'] as $area) {
					$action = "ew-list-view";
					$params = array("route" => $route, "area_id" => $area['area_id'], "tabID" => "organograma_" . $area['area_id'], "tabTitle" => $area['sigla'], "tabIcon" => "social:group");
					$view->addPaperItemImage("",$area['sigla'],$area['descricao'],$action,$params,true,"small");
					$item = $view->getLastItem();
					$item->setItemStyle(" padding-left: " . (intval($area["depth"]) * 20) . 'px;');
					$view->updateLastItem($item);
					
				}

			} else {
				$view->addHeaderItem("Procurando Por: " . $search);
				// print_r($f_data);
				if (count($f_data['employees']) != 0) { 
					$view = $this->addEmployeesToView($view,$f_data);
				} else {
					if (count($f_data['areas']) != 0) {
						foreach ($f_data['areas'] as $area) {
							$action = "ew-list-view";
							$params = array("route" => $route, "area_id" => $area['area_id'], "tabID" => "organograma_" . $area['area_id'], "tabTitle" => $area['sigla']);
							$view->addPaperItemImage("",$area['sigla'],$area['descricao'],$action,$params,true,"small");
							$item = $view->getLastItem();
							$item->setItemStyle(" padding-left: " . (intval($area["depth"]) * 20) . 'px;');
							$view->updateLastItem($item);									
						}								
					} else {
						$view->showMessage("Nenhum Resultado Encontrado!");
					}
				}	
			}

		} else {
			$view->hideSearch(true);
			$f_data = $this->getEmployeesFromArea($areaid);

			$title = $f_data['employeesArea'][0]['sigla'] . ' - ' . $f_data['employeesArea'][0]['descricao'];
			$view->setWidgetTitle($title);

			$view = $this->addEmployeesToView($view,$f_data);
			
		}

		$view->runAction("ew_registerBackgroundTask",array("name"=> "ew-expresso-catalog-contact-picture-background","interval" => 4000));
		$view->runAction("ew_refreshBackgroundTask",array("name"=> "ew-expresso-catalog-contact-picture-background"));

		return response()->json($view);
	}

}

?>