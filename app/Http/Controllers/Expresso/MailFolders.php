<?php 


namespace App\Http\Controllers\Expresso;

use App\Http\Controllers\WidgetController;

use App\Http\Requests;
use App\Utils\EWListView;
use App\Utils\EWListViewItem;

    //TODO - BOTAO "ATUALIZAR" DO MENU ITEM NÃO ESTA FUNCIONANDO

class MailFolders extends WidgetController {

    var $ENABLE_NEW_MAIL_MESSAGES = false;

    public function getMailFolders() {

        $api = $this->getParam('externalAPI');
        $title = $this->getParam("title");
        $hideFab = $this->getParam("hideFab");
        $itemSize = $this->getParam("itemSize");
        $action = $this->getParam("action");
        $folderNameClean = $this->getParam("folderNameClean");

        if ($title == "") {
            $title = "Email";
        }

        if ($itemSize == "") {
            $itemSize = "medium";
        } 

        if (($api == '') || ($api == 'undefined')) {
            $api = EXTERNAL_API_URL;
        }

        $Element = new ElementWidgetsAdapter();
        $view = new EWListView($title);

        if ($action != "") {
            if (($action == "cleanTrash") || ($action == "cleanSpam")) {
                $type = "1";
                if ($action == "cleanSpam") { $type = "2"; }
                $resource = "Mail/CleanTrash";
                $_POST['params']['type'] = $type;
                $result = $Element->callExternalAPI($resource, "POST", $api, false);
                
                if ((!isset($result)) || ($result == "") || (isset($result->error))) {
                    $view->showMessage("Não foi possível esvaziar a pasta " . $folderNameClean);
                } else {
                    $view->showMessage("A pasta " . $folderNameClean . " foi esvaziada com sucesso!");                
                }
                $view->runAction("ew_load",array("route" => $this->getParam("route"), "action" => "", "itemSize" => $itemSize, "title" => $title));

            }

            if ($action == "edit") {
                $view->setBackgroundColor("blue-grey");
                $view->setWidgetTitle("Gerenciar Pastas");
            }
        }
        

        $resource = "Mail/Folders";
        $_POST['params']['folderID'] = "INBOX";
        $dataFolder = $Element->callExternalAPI($resource, "POST", $api, true);

        $resource = "Preferences/UserPreferences";
        $_POST['params']['module'] = "mail";
        $dataUserPreference = $Element->callExternalAPI($resource, "POST", $api, false);

        $hasError = false;
        if ((!isset($dataFolder)) || ($dataFolder == "") || (isset($dataFolder->error))) {
            $hasError = true;
        }
        if ((!isset($dataUserPreference)) || ($dataUserPreference == "") || (isset($dataUserPreference->error))) {
            $hasError = true;
        }

        if ($hasError) {
            $view = $this->getDatabaseOfflineView();

        } else {
            $diskSizeUsed = $dataFolder->diskSizeUsed;
            $diskSizeLimit = $dataFolder->diskSizeLimit;

            // $view->addActionToolbarButton("icons:folder-open",'ew_load',array("route" => $this->getRouteForClass("MailFolders"), "action" => "edit", "itemSize" => $this->getParam("itemSize")));
       
            if ($dataUserPreference->mail->showQuota == "1") {
                $percentPB = $this->getPercentQuota($diskSizeUsed, $diskSizeLimit);
                $titlePB = $percentPB . "% (" . $this->bytesToSize($diskSizeUsed, 1) . " / " . $this->bytesToSize($diskSizeLimit, 1) . ")";
                $view->addProgressBar($percentPB, $titlePB, 0);    
            }


            $view->addPaperItemImage("", "", "", "",array(),false);
            $item = $view->getLastItem();
            $item->addActionButton("create", "ew-expresso-mail-create", array("action" => "create", "folderID" => "", "msgID" => "", "tabID" => "mail_create_" . rand(), "tabIcon" => "create", "tabTitle" => "Nova Mensagem"), 2, "Nova Mensagem","fabTheme fabRound");
            $view->updateLastItem($item);


            foreach ($dataFolder->folders as $index => $folder) {
                if ($dataUserPreference->mail->showFoldersAndParentFolders == 0) {
                    if ($folder->folderParentID != "") {
                        unset($dataFolder->folders[$index]);
                    }
                }
            }

            $viewType = $dataUserPreference->mail->viewType;

            if ($viewType == "1") {
                $p_viewType = 0;
            } else {
                $p_viewType = 1;
            }

            $hasShowSharedFolders = false;

            $dataFolder->folders = $this->sortFolders($dataFolder->folders);

            foreach ($dataFolder->folders as $folder) {
                $params = array();
                // $params['signal'] = "ew-expresso-mail-folder-item-tap";
                $params['folderName'] = $folder->folderName;
                $params['folderParentID'] = $folder->folderParentID;
                $params['folderHasChildren'] = $folder->folderHasChildren;
                $params['qtdUnreadMessages'] = $folder->qtdUnreadMessages;
                $params['qtdMessages'] = $folder->qtdMessages;
                $params['folderID'] = $folder->folderID;
                $params['folderType'] = $folder->folderType;
                $params['diskSizeUsed'] = $folder->diskSizeUsed;
                $params['diskSizePercent'] = $folder->diskSizePercent;
                $params['tabID'] = "mail_messages_" . $folder->folderID;
                $params['tabTitle'] = $folder->folderName;
                $params['viewType'] = $p_viewType;
                $params['currentFolder'] = array();
                $params['currentFolder']['folderID'] = $folder->folderID;
                $params['currentFolder']['folderName'] = $folder->folderName;
                $params['currentFolder']['qtdMessages'] = $folder->qtdMessages;
                $params['currentFolder']['folderType'] = $folder->folderType;
                $params['tabIcon'] = $this->getIconFolder($folder->folderType);

                if ($folder->folderType == 6) {
                    if ($hasShowSharedFolders == false) {
                        $view->addHeaderItem("Compartilhamentos",true,false,"folder-shared");
                        $hasShowSharedFolders = true;
                    }
                }
                // $nameAdd = "";
                // if ($folder->folderHasChildren == 1) {
                //     $nameAdd = "";
                //     // $item->addActionButton("icons:chevron-right",$openAction,$params,1);
                // }

                $openAction = "ew-expresso-mail-messages";

                $view->addPaperItemIcon($this->getIconFolder($folder->folderType), $folder->folderName, "", $openAction, $params, true, $itemSize);
                $item = $view->getLastItem();


                if ($this->ENABLE_NEW_MAIL_MESSAGES == true) {
                    $params['route'] = $this->getRouteForClass("MailMessages");
                    $item->setAction("ew-list-view",$params);
                }
               
                if ($folder->qtdUnreadMessages > 0) {
                    $item->addActionButton("", "", array(), 3, "", "fabTheme", $folder->qtdUnreadMessages);
                }
                if ($this->isTrashFolder($folder->folderType)) {
                    $dialogParams = $view->getDialogParams("Esvaziar a pasta 'Lixeira'","Deseja realmente esvaziar a pasta 'Lixeira'?","ew_load",array("route" => $this->getParam("route"), "action" => "cleanTrash", "itemSize" => $itemSize, "folderNameClean" => "Lixeira"));
                    $item->addActionButton("delete-sweep", 'ew_dialog', $dialogParams, 1, "");
                }
                if ($this->isSpanFolder($folder->folderType)) {
                    $dialogParams = $view->getDialogParams("Esvaziar a pasta 'Spam'","Deseja realmente esvaziar a pasta 'Spam'?","ew_load",array("route" => $this->getParam("route"), "action" => "cleanSpam", "itemSize" => $itemSize, "folderNameClean" => "Spam"));
                    $item->addActionButton("delete-sweep", 'ew_dialog', $dialogParams, 1, "");
                }
                
                $deep = $this->getFolderDeep($folder->folderID);
                $item->setItemStyle(" padding-left: " . (($deep) * 10) . 'px;');
                $view->updateLastItem($item);

            }

            if (($hideFab != "") && ($hideFab != "false")) {

                if ($action != "edit") {
                    $view->setFab("create","Nova Mensagem", "ew-expresso-mail-create", array("action" => "create", "folderID" => "", "msgID" => "", "tabID" => "mail_create_" . rand(), "tabIcon" => "create", "tabTitle" => "Nova Mensagem"));
                }
            }

            $view->hideCode();

        }
        return $view;
    }

    public function getPercentQuota($diskSizeUsed, $diskSizeLimit) {
        $infoPercent = "";
        $percent = 0;
        if ($diskSizeLimit != 0) {
            $percent = round(($diskSizeUsed * 100 / $diskSizeLimit), 0);
        }

        return $percent;
    }

    public function bytesToSize($bytes, $precision) {

        $kilobyte = 1024;
        $megabyte = $kilobyte * 1024;
        $gigabyte = $megabyte * 1024;
        $terabyte = $gigabyte * 1024;

        if (($bytes >= 0) && ($bytes < $kilobyte)) {
            return $bytes . ' B';

        } else if (($bytes >= $kilobyte) && ($bytes < $megabyte)) {
            return round(($bytes / $kilobyte), $precision) . ' KB';

        } else if (($bytes >= $megabyte) && ($bytes < $gigabyte)) {
            return round(($bytes / $megabyte), $precision) . ' MB';

        } else if (($bytes >= $gigabyte) && ($bytes < $terabyte)) {
            return round(($bytes / $gigabyte), $precision) . ' GB';

        } else if ($bytes >= $terabyte) {
            return round(($bytes / $terabyte), $precision) . ' TB';

        } else {
            return $bytes + ' B';
        }
    }

    public function isTrashFolder($folderType) {
        $retVal = false;
        if ($folderType == 3) {
            $retVal = true;
        }
        return $retVal;
    }

    public function isSpanFolder($folderType) {
        $retVal = false;
        if ($folderType == 2) {
            $retVal = true;
        }
        return $retVal;
    }

    public function getIconFolder($folderType) {
        $folderIcon = "folder";
        if ($folderType == 0) {
            $folderIcon = "inbox";
        }
        if ($folderType == 4) {
            $folderIcon = "drafts";
        }
        if ($folderType == 1) {
            $folderIcon = "send";
        }
        if ($folderType == 2) {
            $folderIcon = "archive";
        }
        if ($folderType == 3) {
            $folderIcon = "delete";
        }
        if ($folderType == 5) {
            $folderIcon = "folder";
        }
        if ($folderType == 6) {
            $folderIcon = "folder-shared";
        }

        return $folderIcon;
    }

    public function getFolderDeep($folderID) {
        $deep = 0;
        $arr = array();
        $arr = explode("/", $folderID);
        $deep = count($arr);
        if ($deep == 2) {
            $deep = 1;
        }

        return $deep;
    }

    public function sortFolders($folders) {
        $tempFolders = array();
        foreach ($folders as $folder) {
            $parentID = $folder->folderParentID;
            if ($folder->folderParentID == "") {
                $parentID = "INBOX";
            }
            if (!isset($tempFolders[$parentID])) {
                $tempFolders[$parentID] = array();
            }
            $tempFolders[$parentID][] = $folder;
        }

        $newArray = array();
        foreach ($tempFolders['INBOX'] as $folder) {
            if ($folder->folderParentID != "INBOX") {
                array_push($newArray,$folder);
            }
            $newArray = $this->addSubfoldersFromFolder($folder,$newArray,$tempFolders);
        }

        if (isset($tempFolders['user'])) {
            foreach ($tempFolders['user'] as $folder) {
                array_push($newArray,$folder);
                $newArray = $this->addSubfoldersFromFolder($folder,$newArray,$tempFolders);
            }
        }
        return $newArray;
    }

    public function addSubfoldersFromFolder($folder,$newArray,$tempFolders) {
        if ($folder->folderID != "INBOX") {
            if (isset($tempFolders[$folder->folderID])){
                if (count($tempFolders[$folder->folderID]) != 0) {
                    foreach ($tempFolders[$folder->folderID] as $newFolderToAdd) {
                        array_push($newArray,$newFolderToAdd);
                        $newArray = $this->addSubfoldersFromFolder($newFolderToAdd,$newArray,$tempFolders);
                    }
                }
            }
        }
        return $newArray;
    }

    public function load() {

        $view = $this->getMailFolders();

        return $view;
    }
}

            
            
// if (DEVELOPMENT) {
              

    // if ($dataUserPreference->mail->showQuota == "1") {
    //     $percentPB = $this->getPercentQuota($diskSizeUsed, $diskSizeLimit);
    //     $titlePB = $percentPB . "% (" . $this->bytesToSize($diskSizeUsed, 1) . " / " . $this->bytesToSize($diskSizeLimit, 1) . ")";
    //     $view->addProgressBar($percentPB, $titlePB, 0);    
    // }
// }

?>