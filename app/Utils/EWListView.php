<?php

namespace App\Utils;

class EWListView 
{
	
	function __construct($widgetTitle = "",$hideSearch = false){
		$this->currentPage = 0;
		$this->showCode = true;
		$this->result = array();
		$this->result['widgetTitle'] = $widgetTitle;
		$this->result['showHeader'] = true;
		$this->result['hideFab'] = true;
		$this->result['hidePages'] = true;
		$this->result['autoScrollPages'] = false;
		$this->result['hideSearch'] = $hideSearch;
		$this->result['localSearch'] = true;
		$this->result['hideContent'] = false;

		$this->result['enableSelection'] = false;
		$this->result['enableMultiSelection'] = false;
		$this->result['viewState'] = 'normal';

		$this->result['actions'] = array();
		$this->result['items'] = array();
		$this->result['toolbarButtons'] = array();
		$this->result['fabButtons'] = array();
		$this->result['pages'] = array();
		$this->result['onScrollNextPageAutoLoad'] = false;
		// $this->result['imports'] = array();
		//$this->setFab("done","Fechar","ew_close",array());
	}

	/**
	 * Remove todos os itens adicionados.
	 */
	public function clearItems() {
		$this->result['items'] = array();
	}

	/**
	 * Seleciona a cor padrão do widget.
	 */
	public function setBackgroundColor($value) {
		$this->result['backgroundColor'] = $value;
	}

	/**
	 * Define o título do widget.
	 */
	public function setWidgetTitle($title) {
		$this->result['widgetTitle'] = $title;
	}

	/**
	 * Define imagem de fundo no cabeçalho do widget.
	 */
	public function setWidgetImage($value,$imageWidth = "150", $imageHeight = "120",$imageSizing = "cover") {
		$this->result['image'] = $value;
		$this->result['imageWidth'] = $imageWidth;
		$this->result['imageHeight'] = $imageHeight;
		$this->result['imageSizing'] = $imageSizing;
	}

	/**
	 * Define o título do widget.
	 */
	public function onScrollNextPageAutoLoad($resultsPerPage = 0) {
		$this->result['onScrollNextPageAutoLoad'] = true;
		$this->result['onScrollNextPageResultsPerPage'] = $resultsPerPage;
	}

	/**
	 * Seleciona a página que será exibida ao carregar o widget. 
	 */
	public function setSelectedPage($value) {
		$this->result['selectedPage'] = $value;
	}

	/**
	 * Oculta o campo de busca do cabeçaho.
	 */
	public function hideSearch($value,$localSearch = true) {
		$this->result['hideSearch'] = $value;
		$this->result['localSearch'] = false;
	}

	/**
	 * Oculta as páginas do widget.
	 */
	public function hidePages($value) {
		$this->result['hidePages'] = $value;
	}

	/**
	 * Alterna as respectivas páginas a partir do intervalo definido. 
	 */
	public function autoScrollPages($value,$interval = 15,$autoScrollToFirstPageOnEnd = true) {
		$this->result['autoScrollPages'] = $value;
		$this->result['autoScrollInterval'] = $interval;
		$this->result['autoScrollToFirstPageOnEnd'] = $autoScrollToFirstPageOnEnd;
	}

	/**
	 * Oculta o cabeçalho do widget.
	 */
	public function hideHeader($value) {
		$this->result['showHeader'] = !$value;
	}

	/**
	 * Adiciona páginas no layout do widget.
	 */
	public function addPage($title,$icon = "") {
		$page = array("title" => $title, "icon" => $icon);
		$this->hidePages(false);
		$this->result['pages'][] = $page;
		$this->setCurrentPage(count($this->result['pages']) - 1);
	}

	/**
	 * Oculta o botão principal do widget. 
	 */
	public function hideFab($value) {
		$this->result['hideFab'] = $value;
	}

	/**
	 * Define a configuração e ação do botão principal do widget. 
	 */
	public function setFab($icon,$tooltip,$action,$params = array(),$dialog = false,$viewState = "normal") {
		$this->result['fabButtons'][] = array("icon" => $icon, "tooltip" => $tooltip, "action" => $action, "params" => $params , "dialog" => $dialog, "viewState" => $viewState);
	}

	/**
	 * Estabelece uma ação no widget.
	 */
	public function runAction($action,$params = array(), $dialog = false) {
		$this->result['actions'][] = array("action" => $action, "params" => $params , "dialog" => $dialog);
	}


	/**
	 * Roda uma ação, que dispara um sinal para outros widgets.
	 */
	public function runSignal($signal,$paramsSignal = array(), $close = false) {
		$action = "ew_signal";
		$params = array("signal" => $signal, "params" => $paramsSignal, "close" => $close);
		$this->runAction($action, $params);
	}


	/**
	 * Exibe messagem definida por parâmetro.
	 */	
	public function showMessage($value) {
		$this->runAction("ew_showMessage",array("message" => $value));
	}

	/**
	 * Exibe messagem definida por parâmetro.
	 */	
	public function showDialog($title = "",$message = "",$actionConfirm = "",$paramsConfirm = array(),$actionCancel = "",$paramsCancel = array(),$confirmTitle = "Confirmar",$cancelTitle = "Cancelar") {
		$dialogParams = $this->getDialogParams($title,$message,$actionConfirm,$paramsConfirm,$actionCancel,$paramsCancel,$confirmTitle,$cancelTitle);
		$this->runAction("ew_dialog",$dialogParams);
	}

	/**
	 * Exibe messagem definida por parâmetro.
	 */	
	public function getDialogParams($title = "",$message = "",$actionConfirm = "",$paramsConfirm = array(),$actionCancel = "",$paramsCancel = array(),$confirmTitle = "Confirmar",$cancelTitle = "Cancelar") {
		return array("title" => $title, "message" => $message, "actionConfirm" => $actionConfirm,"paramsConfirm" => $paramsConfirm,"actionCancel" => $actionCancel,"paramsCancel" => $paramsCancel, "confirmTitle" => $confirmTitle, "cancelTitle" => $cancelTitle);
	}



	/**
	 * Adiciona botão no cabeçalho do widget.
	 */
	public function addActionToolbarButton($icon,$action,$params, $dialog = false,$viewState = "normal") {
		$this->result['toolbarButtons'][] = array("icon" => $icon, "action" => $action, "params" => $params , "dialog" => $dialog, "viewState" => $viewState);
	}

	/**
	 * Adiciona objeto (item) no contexto do widget. 
	 */
	public function addItem($item) {
		array_push($this->result['items'],$item);
	}

	/**
	 * Adiciona subseção no widget.
	 */
	public function addHeaderItem($title,$mobile = true,$pageID = false,$icon = '') {
		$item = new EWListViewItem();
        $item->setTitle($title);
		$item->setMobile($mobile);
		if ($pageID != false) {
			$item->setPageID($pageID);
		} else {
			$item->setPageID($this->currentPage);
		}
        if ($icon != '') {
        	$item->setIcon($icon);
        }
        $item->setViewType(2);

		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona imagem no contexto do widget.
	 */
	public function addImageItem($image,$pageID = 0,$width = "100%",$height = "100px",$sizing = "cover",$mobile = true,$itemStyle = "") {
		$item = new EWListViewItem();
        $item->setMobile($mobile);
        $item->setPageID($pageID);
		$item->setImage($image,$width,$height,$sizing);
		$item->setItemStyle($itemStyle);
        $item->setViewType(10);
		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona cartão estruturado com imagem, título e descrição.
	 * -- imports não está sendo utilizado.
	 */
	public function addPaperCardImage($image,$title,$description,$action = "",$params = array(),$mobile = true,$elevation = 1) {
		$item = new EWListViewItem();
		$item->setAction($action, $params);
		$item->setImage($image);
		$item->setTitle($title);
		$item->setMobile($mobile);
		$item->setPageID($this->currentPage);
		$item->setDescription($description);
		$item->setViewTypeCard(true,$elevation);
		$this->addItem($item->getItem());
    }

	/**
	 * Adiciona campo com imagem reduzida, título e descrição.
	 */
	public function addPaperItemImage($image,$title,$description,$action = "",$params = array(),$mobile = true,$itemCssClass = "normal") {
		$item = new EWListViewItem();
		$item->setAction($action, $params);
		$item->setImage($image,32,32,"contain");
		$item->setTitle($title);
		$item->setMobile($mobile);
		$item->setPageID($this->currentPage);
		$item->setDescription($description);
		$item->setItemCssClass($itemCssClass);
		$this->addItem($item->getItem());
    }

	/**
	 * Adiciona campo com ícone, título e descrição.
	 */
	public function addPaperItemIcon($icon,$title,$description,$action = "",$params = array(),$mobile = true,$itemCssClass = "normal") {
		$item = new EWListViewItem();
		$item->setAction($action, $params);
		$item->setIcon($icon);
		$item->setTitle($title);
		$item->setMobile($mobile);
		$item->setPageID($this->currentPage);
		$item->setItemCssClass($itemCssClass);
		$item->setDescription($description);
		$this->addItem($item->getItem());
    }

	/**
	 * Rotina responsável em captar informações de entrada, a tipagem é definida por parâmetro.
	 */
	public function getInputItem($name,$title,$value,$required = true,$description = "",$icon = "",$inputType = "text") {
		$item = new EWListViewItem();
		$item->setName($name);
		$item->setTitle($title);
		$item->setValue($value);
		$item->setDescription($description);
		$item->setRequired($required);
		$item->setInputType($inputType);
		$item->setPageID($this->currentPage);
		if ($icon != "") {
			$item->setIcon($icon);
		}
		$item->setViewType(5);
		return $item;
    }

	/**
	 * Adiciona campo tipo texto expandido.  
	 */
    public function addTextAreaInput($name,$title,$value,$required = true,$description = "",$icon = "") {
		$item = $this->getInputItem($name,$title,$value,$required,$description,$icon);
		$item->setViewType(5);
		$this->addItem($item->getItem());
	}
	
	/**
	 * Adiciona campo de edição.
	 */
	public function addCodeEditorInput($name,$value,$oldValue = "",$language = "php") {
		$item = $this->getInputItem($name,"",$value,true,"","");
		$item->setDescription($oldValue);
		$item->setSubDescription($language);
		$item->setViewType(18);
		$this->addItem($item->getItem());
	}
	
	/**
	 * Adiciona campo de edição HTML WYSISWYG.
	 */
	public function addTextHTMLEditorInput($name,$value) {
		$item = $this->getInputItem($name,"",$value,true,"","");
		$item->setViewType(20);
		$this->addItem($item->getItem());
    }

	/**
	 * Adiciona valor oculto em formulário.
	 */
    public function addHiddenInput($name,$value) {
		$item = new EWListViewItem();
		$item->setName($name);
		$item->setValue($value);
		$item->setPageID($this->currentPage);
		$item->setViewType(9);
		$this->addItem($item->getItem());
	}
		
	/**
	 * Adiciona campo tipo texto.
	 */
    public function addTextInput($name,$title,$value,$required = true,$description = "",$icon = "", $inputType = "text") {
		$item = $this->getInputItem($name,$title,$value,$required,$description,$icon,$inputType);
		$item->setViewType(6);
		$this->addItem($item->getItem());
    }

	/**
	 * Adiciona campo tipo data.
	 */
	public function addDateInput($name,$title,$value = "",$required = true,$description = "") {
		if ($value != "") {
			$date = \DateTime::createFromFormat('d/m/Y', $value);
			$newValue = date_format($date,'Y-m-d');
		} else {
			$newValue = "";
		}
		$item = $this->getInputItem($name,$title,$newValue,$required,$description);
		$item->setIcon('icons:date-range');
		$item->setViewType(7);
		$this->addItem($item->getItem());
    }

	/**
	 * Adiciona mensagem de erro no widget.
	 */
	public function addErrorItem($title,$description = "",$icon = "") {
		$item = new EWListViewItem();
        $item->setTitle($title);
        $item->setDescription($description);
        $item->setIcon($icon);
        $item->setViewType(3);
        $this->addItem($item->getItem());
	}

	/**
	 * Adiciona componente contendo informações de contato.
	 */
	public function addContactItem($name,$email,$contactID,$contactType = 2,$isMobile = false) {
		$item = new EWListViewItem();
		$params = array(
			"route" => "./api/rest/ew-expresso-catalog/ContactDetail", 
			"contactType" => $contactType, 
			"contactID"=> $contactID, 
			"showActions" => true, 
			"autoLoad" => true, 
			"tabID"=> 'contact_detail', 
			"tabIcon"=> 'social:people', 
			"tabTitle"=> 'Contatos',
			"isMobile" => $isMobile
		);
		$item->setAction("ew-list-view",$params);
		$item->setID($contactID . "-" . $contactType);
		$item->setTitle($name);
		$item->setDescription($email);
		$item->setEmail($email);
		$item->setPageID($this->currentPage);
		$this->addItem($item->getItem());
	}

	/**
	 * Retorna o último item adicionado no listView.
	 */
	public function getLastItem() {
		$lastItem = $this->result['items'][count($this->result['items']) - 1];
		return new EWListViewItem($lastItem);
	}
	
	/**
	 * Atualiza o último item. 
	 */
	public function updateLastItem($newItem) {
		$this->result['items'][count($this->result['items']) - 1] = $newItem->getItem();
	}

	/**
	 * Adiciona barra de progresso.
	 */
	public function addProgressBar($value,$title = "",$pageID = false) {
		$item = new EWListViewItem();
		$item->setTitle($title);
		$item->setValue($value);
		if ($pageID == false) {
			$item->setPageID($this->currentPage);
		} else {
			$item->setPageID($pageID);
		}
		$item->setViewType(11);
		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona caixa de seleção.
	 */
	public function addCheckbox($name,$title,$value,$required = true) {
		$item = $this->getInputItem($name,$title,$value,$required,"","","text");
		$item->setViewType(12);
		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona o botão de Refresh no header do Widget.
	 */
	public function addRefreshButton() {
		$this->addActionToolbarButton("refresh","ew_refresh",array());
	}

	/**
	 * Adiciona menu de seleção. 
	 */	
	public function addPaperDropDownMenu($name,$title,$value,$items = array(),$required = true,$description = "",$icon="") {
		$item = $this->getInputItem($name,$title,$value,$required,$description,$icon,"text");
		$item->setItems($items);
		$item->setViewType(13);
		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona botões radio.
	 */
	public function addRadios($name,$title,$value,$items = array(),$required = true,$description = "",$icon="") {
		$item = $this->getInputItem($name,$title,$value,$required,$description,$icon,"text");
		$item->setItems($items);
		$item->setViewType(15);
		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona campo para upload de arquivos. 
	 */
	public function addUploadFile($name,$description = "Arraste e solte os arquivos aqui... (16 MB Máximo)") {
		$item = new EWListViewItem();
		$item->setViewType(17);
		$item->setName($name);
		$item->setDescription($description);
		$this->addItem($item->getItem());
	}
	
	/**
	 * Adiciona código HTML na rotina do widget. 
	 */
	public function addHTML($html) {
		$item = new EWListViewItem();
		$item->setViewTypeHTML(true);
		$item->setInnerHTML($html);
		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona código HTML na rotina do widget. 
	 */
	public function addListView($view,$itemStyle) {
		$item = new EWListViewItem();
		$item->setViewType(21);
		$item->addListView($view);
		$item->setItemStyle($itemStyle);
		$this->addItem($item->getItem());
	}

	/**
	 * Exibe na tela os dados estruturados em array (desenvolvedor)
	 */
	public function printArray($data) {
		ob_start();
		echo "<pre>";
		print_r($data);
		echo "</pre>";
		$output = ob_get_contents();
		ob_end_clean();
		$this->addHTML($output);
	}

	/**
	 * Oculta o código.
	 */
	public function hideCode() {
		$this->showCode = false;
	}

	/**
	 * Obtém o objeto da classe EWListView para construir o widget. 
	 */
	public function getResult() {

		// if (DEVELOPMENT) {
		// 	if ($this->showCode == true) {
		// 		if (isset($_REQUEST['params']['route'])) {
		// 			$route = $_REQUEST['params']['route'];
		// 			$this->addActionToolbarButton("code","ew-list-view",array("route" => "./api/rest/ew-home/CodeView","routeView" => $route),true);
		// 		}
		// 	}
			
		// }
		if (isset($this->result['onScrollNextPageResultsPerPage'])) {
			if ($this->result['onScrollNextPageResultsPerPage'] != 0) {
				$tempItems = array_chunk($this->result['items'],$this->result['onScrollNextPageResultsPerPage']);
				$currentPage = $_POST['params']['page'];
				if ($currentPage == "") {
					$currentPage = 0;
				}
				
				$this->result['items'] = $tempItems[$currentPage];
			}
		}
		return $this->result;
	}

	/**
	 *  Em desenvolvimento, não utilizar.
	 */
	public function setEnableSelection($value) {
		$this->result['enableSelection'] = $value;
	}

	/**
	 * Em desenvolvimento, não utilizar.
	 */
	public function setEnableMultiSelection($value) {
		$this->result['enableMultiSelection'] = $value;
	}

	/**
	 * Limpa a página.
	 */
	public function clearPages() {
		$this->result['pages'] = array();
	}

	/**
	 * Oculta o conteúdo da página. 
	 */
	public function hideContent($value) {
		$this->result['hideContent'] = $value;
	}

	/**
	 * Define a página que a ser exibida ao carregar o widget.
	 */
	public function setCurrentPage($page) {
		$this->currentPage = $page;
	}

	/**
	 * Adiciona campo com avatar.
	 */
	public function addPictureItem($name,$email,$action,$params,$itemCssClass = "normal") {
		$item = new EWListViewItem();
		$item->setAction($action, $params);
		$item->setTitle($name);
		$item->setDescription($email);
		$item->setEmail($email);
		$item->setViewType(19);
		$item->setPageID($this->currentPage);
		$item->setItemCssClass($itemCssClass);
		$this->addItem($item->getItem());
	}

	/**
	 * Adiciona menu item. 
	 */	
	public function addToolBarMenuItem($icon,$title,$action,$params = array(),$viewState = "normal") {
		$this->result['toolbarMenuItems'][] = array("icon" => $icon, "title" => $title, "action" => $action, "params" => $params, "viewState" => $viewState);
	}

	/**
	 * Em desenvolvimento, não utilizar.
	 */
	public function addIframe($value) {
		$item = new EWListViewItem();
		$item->setValue($value);
		$item->setViewType(16);
		$this->addItem($item->getItem());
	}

	/**
	 * Em desenvolvimento, não utilizar.
	 */
  public function addTimeInput($name,$title,$value,$required = true,$description = "") {
		$item = $this->getInputItem($name,$title,$value,$required,$description);
		$item->setIcon('image:timer');
		$item->setViewType(8);
		$this->addItem($item->getItem());
	}
	
	/**
	 * Em desenvolvimento, não utilizar. 
	 */
	public function addPaperItem($id,$signal,$title,$description,$icon) {
		
		$item = new EWListViewItem();

        $item->setID($id);
        $item->setSignal($signal);
        $item->setTitle($title);
        $item->setDescription($description);
		$item->setIcon($icon);
		$item->setPageID($this->currentPage);

        $this->addItem($item->getItem());
	}

	/**
	 * Em desenvolvimento, não utilizar. 
	 */
	public function addContactsInput($name,$title,$value,$items = array(),$required = true,$description = "",$icon = "",$itemStyle = "") {
		$item = $this->getInputItem($name,$title,$value,$required,$description,$icon,"text");
		$item->setItems($items);
		$item->setViewType(14);
		$item->setItemStyle($itemStyle);
		$this->addItem($item->getItem());
	}

	/**
	 * Em desenvolvimento, não utilizar.
	 */
	public function addPaperToggleItem($id,$signal,$title,$description,$icon,$toggleEnabled) {
		
		$item = new EWListViewItem();

        $item->setID($id);
        $item->setSignal($signal);
        $item->setTitle($title);
        $item->setDescription($description);
        $item->setIcon($icon);
        $item->setToggleEnabled($toggleEnabled);

        $this->addItem($item->getItem());
	}
}

?>