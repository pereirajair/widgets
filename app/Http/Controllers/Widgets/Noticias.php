<?php 

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;
use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;

class Noticias extends WidgetController
{

    public function XML2Array(\SimpleXMLElement $parent) {
	    $array = array();

	    foreach ($parent as $name => $element) {
	        ($node = & $array[$name])
	            && (1 === count($node) ? $node = array($node) : 1)
	            && $node = & $node[];

	        $node = $element->count() ? $this->XML2Array($element) : trim($element);
	    }

	    return $array;
	}

	public function load() {
		$rss_url = $this->getParam('url');
		$view = new EWListView();
        $view->setWidgetTitle("Notícias");
        $view->setBackgroundColor("amber");
        $view->hideSearch(true);

		// $legislationBlockedTime = '2018-10-29 00:01'; 
		// if(strtotime($legislationBlockedTime) > strtotime("now")){ 
		//     $view->addErrorItem("Período Eleitoral","Em razão da legislação eleitoral, o histórico das notícias ficará indisponível até que o Tribunal Regional Eleitoral (TRE) oficialize o término das Eleições.");
		// 	//return $view;
		// }

		$params = (array) $this->getParams(true);
		$newParams = array();
		$newParams['route'] = $this->getParam('route');
        $newParams['view'] = 'settings';
		$view->addActionToolbarButton("refresh","ew_refresh",array());


		$feeds = array(
			array("name" => "Agência Estadual de Notícias", "url" => "http://www.aen.pr.gov.br/backend.php")
		);
		$rss_url = $feeds[0]['url'];

 		$array = array();
 		try {

	 		$ch = curl_init($rss_url);
 		
	 		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			// if (DEVELOPMENT) {
				curl_setopt($ch, CURLOPT_TIMEOUT,5);
				curl_setopt($ch, CURLOPT_PROXY, '');
				curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  
			// }
			$buffer = curl_exec($ch);

	 		$xml   = simplexml_load_string($buffer);
			$array = $this->XML2Array($xml);

			$title = $array['channel']['title'];

			if ($title == "") {
				$view->addErrorItem("O endereço do portal de notícias é inválido!","Por favor verifique se é um RSS válido!");
 				return $view;
			} 

			$view->addHeaderItem($title);

			foreach ($array['channel']['item'] as $key => $item) {
				if (is_numeric($key)) {

					$description = $item['description'];
					$doc = new \DOMDocument();
				    $doc->loadHTML($description);
				    $imageTags = $doc->getElementsByTagName('img');

				    foreach($imageTags as $tag) {
				    	$thumbnail = $tag->getAttribute('src');
				    }

					$view->addPaperCardImage($thumbnail,$item['title'],html_entity_decode(strip_tags($item['description']), ENT_COMPAT, 'UTF-8'),"ew_openURL",array("url" => $item['guid']));

					$viewItem = $view->getLastItem();

				    $pubDate = date("d/m/Y H:i", strtotime($item['pubDate']));
				    $viewItem->setDate($pubDate);

					$view->updateLastItem($viewItem);
				}			
			}

		} catch(Exception $e) {
			$view->addErrorItem("Não foi possível ler o RSS.","Por favor verifique se é um RSS válido!");
 		}
		return response()->json($view);
	}
}

?>