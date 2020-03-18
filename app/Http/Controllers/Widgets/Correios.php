<?php

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;

use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;


class Correios extends WidgetController
{

    public function getCorreioData($code) {
       $url = 'http://wsmobile.correios.com.br/service/rest/rastro/rastroMobile/FALECONOSC/12345678/L/T/';

       
       $code = $this->getParam('code');

       $objetos = explode(';', $code);
       $retorno = array();
       foreach ($objetos as $objeto) {

           if (!empty($objeto)) {
                $url1 = '';
                $obj = explode('-', $objeto);

                $url1 = $url . $obj[0] . '/101';

                $options = array();

                // if (DEVELOPMENT) {
                    $options[CURLOPT_PROXY] = 'proxy00.eparana.parana:8080';
                // }

               $cont = $this->getJsonApiData($url1, false, $options);

               $value = $cont->objeto;

               $j = 0;
               for ($i = 0; $i < count($value); $i++) {
                   /*
                   $cont1 = explode('<td> ', $value[$i]);
                   if (count($cont1) > 1 and ! empty($value[0])) {
                       $track[$j]['data'] = $value[$i]->evento[0]->data;
                       $track[$j]['local'] = $value[$i]->evento[0]->unidade->local;
                       $track[$j]['situacao'] = $value[$i]->evento[0]->descricao;
                       $track[$j]['postagem'] = $value[$i]->postagem[0]->cepdestino;
                       $track[$j]['tipo'] = $value[$i]->tipo;
                       $j++;
                   } elseif (!empty($value[0])) {
                       $track[$j]['descricao'] = trim(strip_tags($value[0]));
                       $j++;
                   } */
               }

               $retorno[$objeto] = $value;
           } else { // Assumindo que está sem histórico
               $track = array();
               $track[0]['descricao'] = 'O sistema ainda não possui dados sobre o objeto informado ou o código de rastreamento está incorreto';
               $retorno[$objeto] = $track;
           }
       }
      return $retorno;
    }

    public function load() {
        $view = new EWListView();
        $view->hideSearch(true);
        $view->setBackgroundColor("amber");
        $view->setWidgetTitle("Correios");

        $code = $this->getParam("code");

        $view->addHeaderItem("Código de Rastreio", false);
        $view->addHiddenInput("route",$this->getParam("route"));
        $value = "";
        // if (DEVELOPMENT) {
        //     if ($code != "") {
        //         $value = $code;
        //     } else {
        //         $value = "PM291791253BR";
        //     }
        // }
        $view->addTextInput("code","Código de Rastreio",$value,true,"Informe o código de Rastreio da sua encomenda.");

        if (($code != "") && ($code != "null")) {
        $data = $this->getCorreioData($code);

        foreach ($data as $key => $encomenda) {
            $view->addHeaderItem($key);

            foreach ($encomenda as $produto) {

                $item = new EWListViewItem();
                $item->setTitle($produto->numero);
                $item->setDescription($produto->categoria);
                $view->addItem($item->getItem());

                if (count($produto->evento) != 0) {

                $view->addHeaderItem("Eventos");

              /*  foreach ($produto->evento as $evento) {
                    $item = new EWListViewItem();
                    $item->setTitle($evento->descricao);
                    $item->setDate($evento->data . " " . $evento->hora);
                    $item->setViewTypeCard(true);
                    $item->setDescription($evento->unidade->local . " - " . $evento->unidade->cidade . " - " . $evento->unidade->uf);
                    $view->addItem($item->getItem());
                } */
                }

            }
        }
        } 

        $view->setFab("search","Fechar","ew_send");
        return response()->json($view);
    }
}

?>