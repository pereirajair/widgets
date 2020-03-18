<?php

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\WidgetController;

use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;


class TeatroGuaira extends WidgetController
{

    public function getNomeTeatro($code) {
        if ($code == "1") { return "Guairão"; }
        if ($code == "2") { return "Guairinha"; }
        if ($code == "3") { return "Teatro José Maria Santos"; }
        if ($code == "4") { return "Mini Auditório"; }
        if ($code == "6") { return "Outros Espaços"; }
    }
    public function load() {
        $meses	= array( "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" );
        $mesNome = $meses[((int)date('n')-1)];
        $data = date('n').'/'.date('Y');
        $codes = array(1,2,3,4,6);

        $view = new EWListView("Teatro Guaira - Agenda Cultural - " . $mesNome);
        $view->setBackgroundColor("red");
        $lastCode = 0;
        $hasSessoes = false;
        foreach ($codes as $key => $i) {

            $xml = simplexml_load_file('http://www.gestao.tguaira.pr.gov.br/guaira/consultarProgramacaoCultural?codAuditorio='.$i.'&data=' .$data);

            foreach($xml->data as $dataXml){
                foreach($dataXml->sessoes->sessao as $sessao){

                    if ($lastCode != $i) {
                        $view->addHeaderItem($this->getNomeTeatro($i));
                        $lastCode = $i;
                        $hasSessoes = true;
                    }

                    $link = "http://www.teatroguaira.pr.gov.br/modules/espetaculos/espetaculos.php?auditorio=" . $i;

                    $item = new EWListViewItem();
                    $item->setTitle((string)$sessao->espetaculo->nome);
                    $item->setDescription((string)$sessao->data . " - " . (string)$sessao->horario);

                    //AÇÃO DE COMPARTILHAR
                    $msgText = "Talvez você se interesse por este evento no Teatro Guaira - " . $this->getNomeTeatro($i);
                    $msgBody = "<br><br>" . $msgText . '<br><br><table><tr><td><b>' . (string)$sessao->espetaculo->nome . '</b><br>' . (string)$sessao->data .  ' - ' . (string)$sessao->horario . '<br><br><a href="' . $link .  '">' . $link . '</a></td></tr></table>';
                    $params = array("action"=> "create","msgSubject" => $msgText, "msgBody" => $msgBody, "tabID" => "mail_create_" . rand(), "tabIcon" => "create", "tabTitle" => "Nova Mensagem");
                    $item->addActionButton("social:share","ew-expresso-mail-create",$params);

                    //AÇÃO DE CLICAR NO ITEM
                    $formatedDescription = 'Consulte diretamente no site do Teatro Guaira para saber mais detalhes sobre o Evento. Obs.: Para facilitar o cadastro, a hora de término do evento é preenchida automaticamente em 2 horas a partir da hora de início e pode variar de acordo com o evento.';
                    $dateStart = (string)$sessao->data;
                    $dateEnd = (string)$sessao->data;

                    $horario = explode('h',(string)$sessao->horario);

                    if (count($horario)) {
                        $startHour = $horario[0];
                        $endHour = $horario[0];
                    } else {
                        $startHour = "";
                        $endHour = "";
                    }

                    $startMinute = "00";
                    $endMinute = "00";

                    $params = array(
                        "eventLocation" => "Teatro Guaira: " . $this->getNomeTeatro($i), 
                        "eventTimeStartHour" => $startHour, 
                        "eventTimeStartMin" => $startMinute, 
                        "eventTimeEndHour" => $endHour, 
                        "eventTimeEndMin" => $endMinute,
                        "eventName" => (string)$sessao->espetaculo->nome,
                        "eventDescription" => $formatedDescription, 
                        "eventDateStart" => $dateStart,
                        "eventDateEnd" => $dateEnd,
                        "tabID" => "calendar_create_" . rand(),
                        "tabIcon" => "icons:event",
                        "tabTitle" => "Novo Evento" 
                    );
                    $item->setAction("ew-expresso-calendar-create",$params);
                    $view->addItem($item->getItem());                    

                }

            }

        }
        if ($hasSessoes == false) {
            $view->addErrorItem("Nenhum evento ainda está previsto para este mês.");
        }
        return response()->json($view);
    }

}

?>