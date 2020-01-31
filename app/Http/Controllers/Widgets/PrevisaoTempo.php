<?php 

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;

use App\Http\Requests;
use App\Utils\EWListView;

class PrevisaoTempo extends WidgetController
{

		public function getCidade($cidade) {
			$url = "http://servicos.cptec.inpe.br/XML/cidade/7dias/".$cidade."/previsao.xml";
			$data = $this->getApiData($url);
			$data = simplexml_load_string($data);
			return $data;
		}
		public function getCidades($cidade = "") {
			if ($cidade == "") {
				$cidade = "Curitiba";
			}
			$url = "http://servicos.cptec.inpe.br/XML/cidade/busca/".urlencode($cidade)."/lista.xml";
			$data = $this->getApiData($url);
			$data = simplexml_load_string($data);
			return $data;
		}
		public function getSearchView() {
			$view = new EWListView("Previsão do Tempo",true); 
			$view->setBackgroundColor("blue-grey");
			$search = $this->getParam("search");
			$view->addHeaderItem("Procurando por: " . $search);
			$cidades = $this->getCidades($search);

			if (count($cidades->cidade) != 0) {
				foreach ($cidades->cidade as $cidade) {
					$params = (array) $this->getParams(true);
					$params['search'] = '';
					// $params['searchEnabled'] = false;
					$params['cidade'] = (string) $cidade->id;
					$params['view'] = 'saveData';
					$view->addPaperItemIcon("",(string) $cidade->nome, (string) $cidade->uf,"ew_load",$params); 	
				}
			} else {
				$view->addErrorItem("Nenhuma cidade encontrada.");
			}
			
			return $view;
		}
		
		public function load() {
	
			$search = $this->getParam("search");
			$cidade = $this->getParam("cidade");
			$viewName = $this->getParam("view");
			if ($cidade == "") {
				$cidade = 227;
			}
			
			$view = new EWListView("Previsão do Tempo"); 
			$view->setBackgroundColor("blue-grey");
			$view->hideSearch(false,false);
			$view->addActionToolbarButton("refresh","ew_refresh",array());
	
			if ($viewName == 'search') {
				$view = $this->getSearchView();
			}
			if ($viewName == 'saveData') {
				$params = (array) $this->getParams(true);
				$params['view'] = '';
				$params['searchEnabled'] = false;
				$view->runAction('ew_save',$params);
				// $view->runAction('ew_closeAndRefresh',$params);
			}
			if (($viewName == '') && ($search != "")) {
				$params = (array) $this->getParams(true);
				$params['view'] = 'search';
				$view->runAction('ew_load',$params); 
			} 
			
			if (($viewName == '') && ($search == "")) {

				$data = $this->getCidade($cidade);

				if (!isset($data->previsao[0]))  {
					$view->addErrorItem("Não foi possível obter a previsão do tempo.","","image:wb-cloudy");
				} else {

					$todayForeCast = $data->previsao[0];

					$todayInfo = $this->getInfoByCode($todayForeCast->tempo);
					$imageURL = $todayInfo['image'];
					$city = $data->nome . "," . $data->uf;
					$todayTemperature = $todayForeCast->maxima;

					$lastBuildDate = date_format(new \DateTime($data->atualizacao),'d/m/Y');
		
					$view->addHTML("
					<div style=' background-image: url(" . $imageURL . "); background-position: center; height: 250px; color: #FFF; text-shadow: 2px 2px 5px #000; '>
						<h5 style='margin: 0px; text-align: right; margin-right: 20px; margin-top: 20px; right: 0px; position: absolute; font-weight: bold;'><iron-icon icon='icons:arrow-drop-up'></iron-icon>" . $todayForeCast->maxima . "°c<br><iron-icon icon='icons:arrow-drop-down'></iron-icon>" . $todayForeCast->minima . "°c<br></h5>
						<h2 style='margin: 0px; padding: 20px; color: #FFF; padding-bottom: 0px;'>" . $city . "</h2>
						<h4 style='margin: 0px; padding: 20px; '><iron-icon icon='" . $todayInfo['icon'] . "'></iron-icon> " . $todayInfo['title'] . "</h4>
					</div>");
		
					$item = $view->getLastItem();
					$item->addActionButton("icons:arrow-drop-up","","",3,"" . $todayForeCast->maxima . "°c");
					$item->addActionButton("icons:arrow-drop-down","","",3,"" . $todayForeCast->minima . "°c");
					$view->updateLastItem($item);
					
					$forecast = $data->previsao;
					$view->addHeaderItem("Próximos Dias");
					foreach ($forecast as $key => $dia) {
						$date = (string) date_format(new \DateTime($dia->dia),'d/m/Y');
						$info = $this->getInfoByCode($dia->tempo);
						
						$view->addPaperItemIcon($info['icon'],$info["title"],$date);
						$item = $view->getLastItem();
						
						$item->addActionButton("icons:arrow-drop-up","","",3,"" . $dia->maxima . "°c");
						$item->addActionButton("icons:arrow-drop-down","","",3,"" . $dia->minima . "°c");
						$view->updateLastItem($item);
					}

					$view->addHeaderItem("Últ. Atual.: " . $lastBuildDate . ", Fonte: CPTEC/INPE.");

				}
			}
			return response()->json($view);
		}
		public function _calculateWeatherIcon($info) {
			$retVal = "image:wb-sunny";
			if ($info['card'] == "card_sunny") { $retVal = "image:wb-sunny"; }
			if ($info['card'] == "card_cloudy") { $retVal = "image:wb-cloudy"; }
			if ($info['card'] == "card_flash") { $retVal = "image:flash-on"; }
			if ($info['card'] == "card_rain") { $retVal = "image:wb-cloudy"; }
			if ($info['card'] == "card_snow") { $retVal = "image:wb-sunny"; }
			if ($info['card'] == "card_windy") { $retVal = "image:wb-sunny"; }
			if ($info['card'] == "card_mist") { $retVal = "image:wb-sunny"; }
			if ($info['card'] == "card_cold") { $retVal = "image:wb-sunny"; }
			return $retVal;
		}
		public function getCardImage($info) {
			$retVal = "https://source.unsplash.com/featured/?sun,sunny";
			if ($info['card'] == "card_sunny") { $retVal = "https://source.unsplash.com/featured/?sun,sunny"; }
			if ($info['card'] == "card_cloudy") { $retVal = "https://source.unsplash.com/featured/?cloud,cloudy"; }
			if ($info['card'] == "card_flash") { $retVal = "https://source.unsplash.com/featured/?thunderstorms,thunderstorm"; }
			if ($info['card'] == "card_rain") { $retVal = "https://source.unsplash.com/featured/?rainy,thunderstorm"; }
			if ($info['card'] == "card_snow") { $retVal = "https://source.unsplash.com/featured/?snowstorm,snow"; }
			if ($info['card'] == "card_windy") { $retVal = "https://source.unsplash.com/featured/?gale,windy"; }
			if ($info['card'] == "card_mist") { $retVal = "https://source.unsplash.com/featured/?mist,smoky"; }
			if ($info['card'] == "card_cold") { $retVal = "https://source.unsplash.com/featured/?cold,winter"; }
			return $retVal;
		}
		public function getInfoByCode($code) {
			if ($code == 'ec') 	{ $title = 'Encoberto com Chuvas Isoladas'; $card = 'card_cloudy'; }
			if ($code == 'ci') 	{ $title = 'Chuvas Isoladas'; $card = 'card_rain'; }
			if ($code == 'c')  	{ $title = 'Chuva'; $card = 'card_rain'; }
			if ($code == 'in') 	{ $title = 'Instável'; $card = 'card_mist'; }
			if ($code == 'pp') 	{ $title = 'Poss. de Pancadas de Chuva'; $card = 'card_cloudy'; }
			if ($code == 'cm') 	{ $title = 'Chuva pela Manhã'; $card = 'card_rain'; }
			if ($code == 'cn') 	{ $title = 'Chuva a Noite'; $card = 'card_rain'; }
			if ($code == 'pt') 	{ $title = 'Pancadas de Chuva a Tarde'; $card = 'card_rain'; }
			if ($code == 'pm') 	{ $title = 'Pancadas de Chuva pela Manhã'; $card = 'card_rain'; }
			if ($code == 'np') 	{ $title = 'Nublado e Pancadas de Chuva'; $card = 'card_rain'; }
			if ($code == 'pc') 	{ $title = 'Pancadas de Chuva'; $card = 'card_rain'; }
			if ($code == 'pn') 	{ $title = 'Parcialmente Nublado'; $card = 'card_rain'; }
			if ($code == 'cv') 	{ $title = 'Chuvisco'; $card = 'card_rain'; }
			if ($code == 'ch')  { $title = 'Chuvoso'; $card = 'card_rain'; }
			if ($code == 't') 	{ $title = 'Tempestade'; $card = 'card_flash'; }
			if ($code == 'ps') 	{ $title = 'Predomínio de Sol'; $card = 'card_sunny'; }
			if ($code == 'e') 	{ $title = 'Encoberto'; $card = 'card_cloudy'; }
			if ($code == 'n')  	{ $title = 'Nublado'; $card = 'card_cloudy'; }
			if ($code == 'cl') 	{ $title = 'Céu Claro'; $card = 'card_sunny'; }
			if ($code == 'nv') 	{ $title = 'Nevoeiro'; $card = 'card_mist'; }
			if ($code == 'g	') 	{ $title = 'Geada'; $card = 'card_cold'; }
			if ($code == 'ne')  { $title = 'Neve'; $card = 'card_cold'; }
			if ($code == 'nd') 	{ $title = 'Não Definido'; $card = 'card_sunny'; }
			if ($code == 'pnt') { $title = 'Pancadas de Chuva a Noite'; $card = 'card_rain'; }
			if ($code == 'psc') { $title = 'Possibilidade de Chuva'; $card = 'card_rain'; }
			if ($code == 'pcm') { $title = 'Possibilidade de Chuva pela Manhã'; $card = 'card_rain'; }
			if ($code == 'pct') { $title = 'Possibilidade de Chuva a Tarde'; $card = 'card_rain'; }
			if ($code == 'pcn') { $title = 'Possibilidade de Chuva a Noite'; $card = 'card_rain'; }
			if ($code == 'npt') { $title = 'Nublado com Pancadas a Tarde'; $card = 'card_cloudy'; }
			if ($code == 'npn') { $title = 'Nublado com Pancadas a Noite'; $card = 'card_cloudy'; }
			if ($code == 'ncn') { $title = 'Nublado com Poss. de Chuva a Noite'; $card = 'card_cloudy'; }
			if ($code == 'nct') { $title = 'Nublado com Poss. de Chuva a Tarde'; $card = 'card_cloudy'; }
			if ($code == 'ncm') { $title = 'Nubl. c/ Poss. de Chuva pela Manhã'; $card = 'card_cloudy'; }
			if ($code == 'npm') { $title = 'Nublado com Pancadas pela Manhã'; $card = 'card_cloudy'; }
			if ($code == 'npp') { $title = 'Nublado com Possibilidade de Chuva'; $card = 'card_cloudy'; }
			if ($code == 'vn')  { $title = 'Variação de Nebulosidade'; $card = 'card_cloudy'; }
			if ($code == 'ct')  { $title = 'Chuva a Tarde'; $card = 'card_rain'; }
			if ($code == 'ppn') { $title = 'Poss. de Panc. de Chuva a Noite'; $card = 'card_rain'; }
			if ($code == 'ppt') { $title = 'Poss. de Panc. de Chuva a Tarde'; $card = 'card_rain'; }
			if ($code == 'ppm') { $title = 'Poss. de Panc. de Chuva pela Manhã'; $card = 'card_rain'; }

			$info = array ("title" => $title, "card" => $card);
			$info["icon"] = $this->_calculateWeatherIcon($info);
			$info["image"] = $this->getCardImage($info);
			return $info;
		}
	
	}
?>