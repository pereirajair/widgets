
var EWBehavior = {};

/* 
Todos os Widgets devem obrigatoriamente herdar este comportamento (behavior). 
O Behavior contem funcoes e propriedades e metodos padroes que devem estar 
presentes nos widgets.

	behaviors: [EWBehaviorWidgetBehavior,Polymer.IronResizableBehavior, window.Columns.EWColumn],
 
*/
function generatedWidgetBehavior() {

	return {
	
		generatedBy: 'generatedWidgetBehavior',
	properties: { 

		//Titulo do Widget
		widgetTitle: { type: String, value: "Sem Nome" },
		//Descricao do Widget
        description: { type: String, value: "Sem Descrição" },
        //Largura inicial do Widget
        width: { type: Number, value: 2 },
        //Altura inicial do Widget
        height: { type: Number, value: 5 },
        //Icone do Widget
        thumb: { type: String, value: "./bower_components/ew-home/img/icon.png" },
        //Link Externo do Widget
        link: { type: String, value: "#" },
        //Elemento do Widget
        element: { type: String, value: "" },
        //Use o nome do elemento que implementa a Dialog do widget
        dialog: { type: String, value: "" },
        //Parametros iniciais do Widget
        params: { notify: true, reflectToAttribute: true  },
        //Indica se o Widget irá ser multiColumn ( util somente para tablets/desktops)
        multiColumn: { type: Boolean, value: false },

        blocked: { type: Boolean, value: false },

        //Como a maioria dos Widgets irao realizar uma chamada ew-api-ajax, a propriedade data foi criada para facilitar este trabalho, sendo possivel usar o metodo ew_handleResponseToData, e esta propriedade sera populada com o resultado da API.
		data: { notify: true },
		
		//Caso seu widget possa ser chamado por outros widgets, e ele tenha que retornar um dado para o widget que o chamou, essa propriedade e setada no metod _returnData(data);
		returnData: { notify: true, reflectToAttribute: true },

		//Utilize o Debug somente para desenvolvimento, lembre-se de mudar o valor para false antes de envialo para producao.
        debug: {type: Boolean, value: false },
        

        //Propriedade utilizada para widgets que realizam tarefas em background, informa o intervalo de tempo que a tarefa devera ser executada novamente.
        refreshInterval: { type: Number, value: 0 },
        
        //Indica se o widget esta exibindo o loading para o usuario.
        isLoading: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          notify: true
        },
        
        //Indica se o widget esta sendo exibido em um dispositivo Movel.
        isMobile: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          notify: true
        },
    },

    checkIfElementIsBlocked: function(_element) {

    	var found = false;

    	if (localStorage.getItem('globalParams') != undefined) {

    		var globalParams = JSON.parse(localStorage.getItem('globalParams'));

    		if (globalParams.blocked != undefined) {

		        for (var x = 0; x < globalParams.blocked.length; x++) {
		          var colum = globalParams.blocked[x];
		          if (_element == colum.element) {
		            found = true;
		          }
		        }

	        }

    	}
    
        return found;
    },

    ready:function(){ 
        this.isMobile = ewidgets.isMobile;
    },

    attached: function() {
	  // console.log('ew-behavior.attached');

		var that = this;
		if (this.refreshInterval != 0) {
			var interval = setInterval(function () {

			    if (!that.parentNode) {
			      clearInterval(interval);
			    } else {
			      that.ew_backgroundTask();
			    }

			}, this.refreshInterval);
		}
	},

/** 
Retorna configuracao do seu widget. 
Com os valores das principais propriedades.
*/
    _getWidgetConfig: function() {
        var config = { 
            widgetTitle: this.widgetTitle,
            description: this.description,
            width: this.width,
            height: this.height,
            thumb: this.thumb,
            link: this.link,
            params: this.params,
            element: this.element,
            dialog: this.dialog,
            multiColumn: this.multiColumn,
            import: this.import,
        };
        return config;
    },


/** 
Chamado toda vez que o widget e adicionado ou atualizado na pagina.
*/
    load: function() {
      this.log('ew-behavior.load');
      this.ew_stopLoading();
    }, 


/** 
Chamado para parar o loading automatico dos widgets.
*/
    ew_stopLoading: function() {
      var that = this;
      this.async(function() { 
        that.ew_loading(false);
        if (that.notifyResize != undefined) {
        	that.notifyResize();
        }
        
      },500);
    },


/** 
Muito util para desenvolvedores, 
setando a propriedade debug=true, 
o seu widget comecara a exibir logs 
sempre que essa funcao for chamada. 

	this.debug = true; // O DEBUG DEVE ESTAR ATIVADO
	var logMessage = 'Log Message';
	this.log(logMessage); 
*/ 
    log: function(message) {
    	if (this.debug) {
    		console.log(message);
    	} 	
    },

/**
Abre um Widget, passando os parametros enviados, 
e quando o widget que foi chamado retornar 
algum valor é chamada a funcao onConfirmed.

firstWidget: Indica se este e o primeiro widget, 
caso seja o primeiro, o botao voltar sera desativado, 
esta propriedade e muito usada em widgets multiColumn = true, 
se o seu widget nao for multiColumn deixe o default como false.

onConfirmed: Uma funcao que e chamada quando o widget 
que foi aberto retorna um valor para o widget Original.

	var element = 'ew-widget';
	var params = {};
	var firstWidget = false;
	var onConfirmed = function() {
	    console.log('WIDGET CONFIRMADO');
	}
	this.ew_openWidget(element,params,firstWidget,onConfirmed) 
*/
	ew_openWidget: function(element,params,firstWidget,onConfirmed) {

		var isBlocked = this.checkIfElementIsBlocked(element);

		if (!isBlocked) {
			if (firstWidget == undefined) {
				firstWidget = false;
			}
			var params = { 
			  'class': 'EWColumn', 
			  'element': element, 
			  'params' : params,
			  'parent' : this,
			  'onConfirmed' : onConfirmed,
			  'firstWidget' : firstWidget,
			};

			this.fire('ew-push-widget',params);
		} else {

			var _openParams = ewidgets.ewHome.getViewBlockedParams().params;
			this.ew_showColumnDialog('ew-list-view',_openParams);

		}
		
	},

/** 
Exibe uma DIALOG para o usuario, solicitando que ele tome uma acao, ou de Confirmar ou de Cancelar.


	var title = 'Confirmar';
	var message = 'Deseja realmente realizar esta acao?';
	var onConfirmed = function(event) {
		alert(event.confirmed);
	};
	this.ew_showDialog(title,message,onConfirmed); 

Caso necessario, o titulo dos botoes tambem pode ser alterado nas propriedades buttonConfirm e buttonCancel.

	this.ew_showDialog(title,message,onConfirmed,'SIM','NAO'); 

*/
	ew_showDialog: function(title,message,onConfirmed,buttonConfirm,buttonCancel) {

		if (buttonCancel == undefined) {
			buttonCancel = 'Cancelar';
		}
		if (buttonConfirm == undefined) {
			buttonConfirm = 'Confirmar';
		}

		this.fire('iron-signal', {name: "ew-confirm-dialog", data: { 'title': title, 'message': message, 'buttonCancel': buttonCancel, 'buttonConfirm': buttonConfirm, 'onConfirmed' : onConfirmed }});

	},

/** 
Abre um Link Externo ao sistema, 
avisando ao usuario que ele esta sendo 
redirecionado para um outro sistema.

	var URL = 'http://www.google.com/';
	this.ew_openURL(URL); 
*/
	ew_openURL: function(url) {
		var onClose = function(e) {
			// console.log(e);
			if (!e.canceled) {
				window.open(url,'_blank');
			}
		}; 
		this.ew_showColumnDialog('ew-open-url',{ 'externalURL': url },onClose,'Continuar','Cancelar');
	}, 


	ew_showColumnDialog: function(paramelement,paramsColumn,onConfirmed,buttonConfirm,buttonCancel) {

		var isBlocked = this.checkIfElementIsBlocked(paramelement);

		if (onConfirmed == undefined) {
			onConfirmed = function(e) { }; 
		}

		if (!isBlocked) {

			if (this.isMobile) {
				this.ew_openWidget(paramelement,paramsColumn,false,onConfirmed);
			} else {
				var showButtons = false;
				// if ((buttonCancel == undefined) && (buttonConfirm == undefined)){
				// 	showButtons = false;
				// }
				// if (buttonCancel == undefined) {
				// 	buttonCancel = 'Cancelar';
				// }
				// if (buttonConfirm == undefined) {
				// 	buttonConfirm = 'Confirmar';
				// }

				this.fire('iron-signal', {name: "ew-column-dialog", data: { 'element': paramelement, 'params': paramsColumn, 'buttonCancel': buttonCancel, 'buttonConfirm': buttonConfirm, 'onConfirmed' : onConfirmed, 'showButtons' : showButtons }});
			}

		} else {
			var _openParams = ewidgets.ewHome.getViewBlockedParams().params;
			this.ew_showColumnDialog('ew-list-view',_openParams); 
		}

	},


/** 
Caso seu widget possa ser chamado por outros widgets, e ele tenha que retornar um dado para o widget que o chamou.

Utilize esse metodo para salvar a informacao que sera enviada para o widget que o chamou. 
*/
	_returnData: function(_data) {
		this.fire('ew-return-data',_data);
	},
 
/**
Funcao chamada automaticamente, ativa ou desativa o TOGGLE MENU, para dispositivos moveis em todos os headers do widget. 
*/
	ew_headerDrawerToggle: function(_drawerToggleEnabled) {
		var headers = this.querySelectorAll('ew-header');
		if (headers) {
			if (headers.length == 0) {
				if (this.shadowRoot != undefined) {
					headers = this.shadowRoot.querySelectorAll('ew-header');
				}
			}
		}
		if (headers) {
			for (var i in headers) {
              headers[i].drawerToggleEnabled = _drawerToggleEnabled;
            }
		}
		
	}, 


	ew_getHeaders: function() {
		var headers = this.querySelectorAll('ew-header');
		if (headers) {
			if (headers.length == 0) {
				headers = this.shadowRoot.querySelectorAll('ew-header');
			}
		}
		return headers;
	},


/**
Funcao chamada automaticamente, ativa ou desativa o botao voltar em todos os headers do widget. 
*/
	ew_headerBackButton: function(_backButtonEnabled) {
		var headers = this.querySelectorAll('ew-header');
		if (headers) {
			if (headers.length == 0) {
				if (this.shadowRoot != undefined) {
					headers = this.shadowRoot.querySelectorAll('ew-header');
				}
			}
		}
		if (headers) {
			for (var i in headers) {
              headers[i].backButtonEnabled = _backButtonEnabled;
            }
		}
		
	}, 



/**
Dispara um iron-signal para todos os widgets da plataforma.
*/
	ew_signal: function(_name,_data) {
		this.fire('iron-signal', {name: _name, data: _data});
	},


/**
TAREFAS EM BACKGROUND 
O funcionamento de tarefas em background ainda está em fase de desenvolvimento, sera melhor documentado no futuro, recomendado nao utilizar estes metodos sem o conhecimento.
*/
	ew_registerBackgroundTask: function(_element, _params,_refreshInterval) {
		var params = { 
		  'element': _element, 
		  'params' : _params,
		  'refreshInterval': _refreshInterval,
		};
		this.fire('ew-register-background-task',params);
	},

/**
TAREFAS EM BACKGROUND 
O funcionamento de tarefas em background ainda está em fase de desenvolvimento, sera melhor documentado no futuro, recomendado nao utilizar estes metodos sem o conhecimento.
*/
	ew_unregisterBackgroundTask: function(_element) {
		var params = { 
		  'element': _element, 
		};
		this.fire('ew-unregister-background-task',params);
	},

/**
TAREFAS EM BACKGROUND 
O funcionamento de tarefas em background ainda está em fase de desenvolvimento, sera melhor documentado no futuro, recomendado nao utilizar estes metodos sem o conhecimento.
*/
	ew_backgroundTask: function() {
      this.log('ew-behavior.ew_backgroundTask');
      
    },

/**
TAREFAS EM BACKGROUND 
O funcionamento de tarefas em background ainda está em fase de desenvolvimento, sera melhor documentado no futuro, recomendado nao utilizar estes metodos sem o conhecimento.
*/
    ew_refreshBackgroundTask: function (element) {
		var el = document.getElementsByTagName(element);
		if (el != undefined) {
			if (el[0] != undefined) {
				if (el[0].ew_backgroundTask != undefined) {
					el[0].ew_backgroundTask();
				}
			}
		}
	},

/** 
Exibe uma mensagem no Rodape da Pagina.

	var message = 'Operacao realizada com sucesso!'; 
	this.ew_showMessage(message);
*/
	ew_showMessage: function(message) {
		this.fire('ew-show-message',
			{ 'message': message }
		);
	},

/** 
Exibe uma notificação para os usuarios.


*/
	ew_sendNotification: function(notification) {
		// this.fire('ew-send-notification',
		// 	{ 'notification': notification }
		// );
	},

/**
Quando o widget foi aberto atraves 
de um outro widget atravez da funcao 
ew_openWidget, esta funcao fecha o 
Widget Atual e retorna dados para 
o widget de origem.

	var data = { closed: true };
	this.ew_closeWidget(data); 
*/
	ew_closeWidget: function(_data) {
		this._returnData(_data);
		this.fire('ew-close-widget',{ returnData: _data });
	},

/**
Realiza um refresh do conteudo do Widget.

	this.ew_refresh(); 
*/
	ew_refresh: function() {
		this.fire('ew-refresh',this.params);
	},

/**
Salva os parametros enviados como sendo os parametros deste widget.

Utilize este metodo para persistir no banco de dados os params enviado.
*/
	ew_save: function(params) {
		this.fire('ew-save-params',params);
	},

/**
Atualiza a TAB do Widget de Multi-Column.

Utilize este metodo para atualizar os parametros da TAB no Widget de Multi-column.
*/
	ew_updateTab: function(tabID,params) {
		this.log('ew_updateTab');
		this.log(tabID);
		this.log(params);
		this.fire('ew-update-tab',{ 'tabID': tabID ,'params': params });
	},

	/**
Retorna para o callback o componente Multi-Column.
*/
	ew_getMultiColum: function(_callback) {
		this.fire('ew-get-column',_callback);
	},


/**
Metodo auxiliar, processa o resultado de uma chamada ew-api-ajax, e salva os retorno na propriedade data.
*/
	ew_handleResponseToData: function(event) {

		var response = event.detail.response;
		if (response != undefined) {
			if (response.result != undefined) {
				this.set('data',response.result);
			} 
		} else {
			this.set('data',event.detail);
		}
	},

	ew_getUserId: function() {
		var _profile = false;
		_profile = this.ew_getProfile();
		var userID = _profile.contactUIDNumber;
		return userID;
	},

	ew_getProfile: function() {
		var expresso = {  };
		var retVal = false;
		if (window.localStorage.getItem('expresso') != '') {
			expresso = JSON.parse(window.localStorage.getItem('expresso'));
		}
		if (expresso.profile != undefined) {
			if (expresso.profile[0] != undefined) {
				retVal = expresso.profile[0];
			}

		}
		return retVal;
	},

/**
Metodo auxiliar, Retorna o grupo do lazy import, caso o componente esteja sendo exibido dentro do expresso.
*/
	ew_getLazyImportGroup: function(groupName) {

		var builtIn = false; 
		var options = { builtIn : false };
		if (window.localStorage.getItem('options') != '') {
			options = JSON.parse(window.localStorage.getItem('options'));
		}
		if (options) {
			builtIn = options.builtIn;
		}

		if (builtIn) {
			groupName = groupName; // + '-builtin';
		} 
		return groupName;
	},

/** 
Todos os Widgets possuem um LOADING incorporado, 
para habilitar ou desabilitar este loading 
basta chamar essa funcao. 

Obs: Essa funcao é chamada automaticamente 
sempre que estiver usando um ew-api-ajax.

	this.ew_loading(true); 
*/
		ew_loading: function(value) {
	        this.fire('ew-api-ajax-loading',{"value": value });
	    },

/** 
Utilize este metodo para parar a propagracao de eventos. 

	e.stopPropagation();
*/
      	_eatEvent: function(e) {
          e.stopPropagation();
        },


        // ew_response: function(fireEvent,response) {
		// 	this.fire('ew-response',{ 'fire': fireEvent, 'response': response});
		// },

		}
		
	};

 	/**
    @polymerBehavior
    */
	var EWBehaviorWidgetBehavior = generatedWidgetBehavior();

	