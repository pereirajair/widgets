<?php 

namespace App\Utils;

class EWListViewItem 
{

	function __construct($DefaultItem = false){
		if ($DefaultItem == false) {
			$this->item = array();
			$this->item['mobile'] = true;
			$this->item['buttons'] = array();
			$this->item['viewType'] = 1;
			$this->item['pageID'] = 0;
			$this->item['selected'] = false;
			$this->item['swipeEnabled'] = false;
			// $this->item['imports'] = array();
		} else {
			$this->item = $DefaultItem;
		}
	}

	/**
	 * Define nome do item.
	 */
	public function setName($value) {
		$this->item['name'] = $value;
		return $this;
	}

	/**
	 * Define valor do item.
	 */
	public function setValue($value) {
		$this->item['value'] = $value;
		return $this;
	}

	/**
	 * Define o tipo do campo de entrada.
	 */
	public function setInputType($value) {
		$this->item['inputType'] = $value;
		return $this;
	}

	/**
	 * Define se o item é obrigatório.
	 */
	public function setRequired($value) {
		$this->item['required'] = $value;
		return $this;
	}

	/**
	 * Define título do item.
	 */
	public function setTitle($value) {
		$this->item['title'] = $value;
		return $this;
	}

	/**
	 * Define habilita o Swipe.
	 */
	public function setSwipeEnabled($value) {
		$this->item['swipeEnabled'] = $value;
		return $this;
	}

	/**
	 * Define habilita o Swipe.
	 */
	public function setSwipeAction($action,$params,$message = "") {
		$this->setSwipeLeftAction($action,$params,$message);
		$this->setSwipeRightAction($action,$params,$message);
		return $this;
	}

	/**
	 * Define a ação para o Swipe a Direita.
	 */
	public function setSwipeRightAction($action,$params,$message = "") {
		$this->item['swipeEnabled'] = true;
		$this->item['swipeRightMessage'] = $message;
		$this->item['swipeRightAction'] = array("action" => $action, "params" => $params);
		return $this;
	}

	/**
	 * Define a ação para o Swipe a Direita.
	 */
	public function setSwipeLeftAction($action,$params,$message = "") {
		$this->item['swipeEnabled'] = true;
		$this->item['swipeLeftMessage'] = $message;
		$this->item['swipeLeftAction'] = array("action" => $action, "params" => $params);
		return $this;
	}

	/**
	 * 
	 */
	public function setItems($value) {
		$this->item['items'] = $value;
		return $this;
	}

	/**
	 * Define a descrição do item.
	 */
	public function setDescription($value) {
		$this->item['description'] = $value;
		return $this;
	}

	/**
	 * Define sub descrição do item.
	 */
	public function setSubDescription($value) {
		$this->item['subdescription'] = $value;
		return $this;
	}

	/**
	 * Define email do item.
	 */
	public function setEmail($value) {
		$this->item['email'] = $value;
		return $this;
	}

	/**
	 * Define data do item.
	 */
	public function setDate($value) {
		$this->item['date'] = $value;
		return $this;
	}

	/**
	 * Define data do item.
	 */
	public function setPrice($value,$normal_price = "") {
		$fvalue = 'R$' . number_format($value, 2, ',', '.');
		$fnormal_price = "";
		if ($normal_price != "") {
			if ($value != $normal_price) {
				$fnormal_price = 'R$' . number_format($normal_price, 2, ',', '.');
			}
		}

		$this->item['price'] = $fvalue;
		$this->item['price_default'] = $fnormal_price;
		return $this;
	}

	/**
	 * Define estrutura HTML do item.
	 */
	public function setInnerHTML($value) {
		$this->item['innerHTML'] = $value;
		return $this;
	}

	/**
	 * Define ID da página.
	 */
	public function setPageID($value) {
		$this->item['pageID'] = $value;
		return $this;
	}

	/**
	 * Define imagem do item.
	 */
	public function setImage($value,$imageWidth = "150", $imageHeight = "120",$imageSizing = "contain") {
		$this->item['image'] = $value;
		$this->item['imageWidth'] = $imageWidth;
		$this->item['imageHeight'] = $imageHeight;
		$this->item['imageSizing'] = $imageSizing;
		return $this;
	}

	/**
	 * Determina se o item será exibido na versão mobile.
	 */
	public function setMobile($value) {
		$this->item['mobile'] = $value;
		return $this;
	}
	
	/**
	 * Define o icone do item.
	 */
	public function setIcon($value) {
		$this->item['icon'] = $value;
		return $this;
	}

	/**
	 * Define ID único do objeto EWListViewItem.
	 */
	public function setID($value) {
		$this->item['id'] = $value;
		return $this;
	}

	/**
	 * Determina o sinal do item.
	 */
	public function setSignal($value) {
		$this->item['signal'] = $value;
		return $this;
	}

	/**
	 * Exibe caixa de seleção e define o valor.
	 */
	public function setToggleEnabled($value) {
		$this->item['toggle'] = true;
		$this->item['toggleEnabled'] = $value;
		return $this;
	}

	/**
	 * Define uma ação ao clicar no item.
	 */
	public function setAction($value = "",$params = array(),$dialog = false) {
		if ($value != "") {
			$this->item['action'] = $value;
			$this->item['params'] = $params;
			$this->item['dialog'] = $dialog;
		}
		return $this;
	}

	/**
	 * Parametriza o ID do tipo do item.
	 */
	public function setViewType($value) {
		$this->item['viewType'] = $value;
		return $this;
	}

	/**
	 * Exibe quadro em volta do item, a expessura é parametrizada.
	 */	
	public function setViewTypeCard($value,$cardElevation = "1") {
		if ($value) {
			$this->item['viewType'] = 3;
		}
		$this->item['cardElevation'] = $cardElevation;
		return $this;
	}

	/**
	 * Define a visualização em formato HTML.
	 */
	public function setViewTypeHTML($value) {
		if ($value) {
			$this->item['viewType'] = 4;
		}
		return $this;
	}

	/**
	 * Em desenvolvimento, não utilizar.
	 */
	public function addEventButton($icon,$event) {
		$this->item['buttons'][] = array("icon" => $icon, "event" => $event );
		return $this;
	}

	/**
	 * Define configuração css.
	 */
	public function setItemCssClass($value) {
		$this->item['itemCssClass'] = $value;
		return $this;
	}

	/**
	 * Define configuração css.
	 */
	public function setItemStyle($value) {
		$this->item['itemStyle'] = $value;
		return $this;
	}

	/**
	 * Adiciona botão no item.
	 */
	public function addActionButton($icon,$action,$params,$buttonType = 1,$title = '',$cssClass = "",$badge = "",$image = "",$imageWidth = "120",$imageHeight = "120",$imageSizing = "contain",$dialog = false) {
		$this->item['buttons'][] = array("icon" => $icon, "action" => $action, "params" => $params, "buttonType" => $buttonType, "title" => $title, "cssClass" => $cssClass, "badge" => $badge , "image" => $image, "imageWidth" => $imageWidth, "imageHeight" => $imageHeight, "imageSizing" => $imageSizing,"dialog" => $dialog);
		return $this;
	}

	public function addListView($view) {
		$this->item['listview'] = $view->getResult();
	}

	/**
	 * Retorna o objeto EWListViewItem.
	 */
	public function getItem() {
		return $this->item;
	}

	/**
	 * Em desenvolvimento, não utilizar.
	 */
	public function setEvent($value) {
		$this->item['event'] = $value;
		return $this;
	}

	/**
	 * Em desenvolvimento, não utilizar.
	 */
	public function setViewTypeHeader($value) {
		if ($value) {
			$this->item['viewType'] = 2;
		}
		return $this;
	}
}


?>