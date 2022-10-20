var EWColumn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.Columns = window.Columns || {};

var __loadedWidgets = [];

window.Columns.EWColumn = EWColumn = (function() {
  var handleHandler;

  function EWColumn(properties) {
    this.escapeJSON = bind(this.escapeJSON, this);
    this.editMode = bind(this.editMode, this);
    this.log = bind(this.log, this);
    var key, thmb;
    if (properties) {
      for (key in properties) {
        if (typeof properties[key] !== 'function') {
          this[key] = properties[key];
        }
      }
    }
    // if (this.thumb != './bower_components/ew-home/img/column-unknown.png') {
    //   thmb = document.createElement("img");
    //   thmb.src = this.thumb;
    // }
    if (!this.config) {
      this.config = {};
    }
    
    if (!this.cache) {
      this.cache = [];
    }
  }

  EWColumn.prototype.log = function(message) {
    if (this.debug) {
      return console.log(message);
    }
  };

  EWColumn.prototype.error = function(holderElement) {
    var colEl, error;
    this.log('EWColumn.error');
    holderElement.setAttribute("hidden", "");
    colEl = holderElement.parentElement;
    error = colEl.querySelector(".error");
    error.removeAttribute("hidden");
    error.offsetTop;
    return error.style.opacity = 1;
  };

  EWColumn.prototype.settings = function(cb) {
    return this.log('EWColumn.settings');
  };

  EWColumn.prototype.attemptAdd = function(successCallback) {
    this.log('EWColumn.attemptAdd');
    if (typeof successCallback === 'function') {
      return successCallback();
    }
  };

  handleHandler = void 0;

  EWColumn.prototype.editMode = function(enable) {
    var getPercentage, handle, pack, preview, target;
    this.log('EWColumn.editMode');
    this.ewHome = document.getElementById('widgetsApp').getEwHome();
    if (!this.columnElement) {
      this.columnElement = $('#column-element-' + this.id)[0];
    }
    if (!this.draggie) {
      pack = this.ewHome.getPackeryFromPage(ewidgets.selectedPage);
      if (this.columnElement) {
        this.draggie = new Draggabilly(this.columnElement);
        this.draggie.unbindHandles();
        this.draggie.handles = [this.columnElement.getDragIcon()];
        this.draggie.bindHandles();
        pack.bindDraggabillyEvents(this.draggie);
      }
    }
    if (this.columnElement) {
      this.columnElement.editMode = enable;
      handle = this.columnElement.getHandle();
      if (enable) {
        getPercentage = (function(_this) {
          return function(target, width) {
            var absolute, base, baseEl, final;
            baseEl = _this.ewHome.getGridSizer(_this.page);
            if (baseEl) {
              if (width) {
                base = baseEl.clientWidth;
                absolute = Math.round((target.style.width.substring(0, target.style.width.length - 2)) / base);
                final = absolute * 10;
                if (final === 0) {
                  final = 10;
                }
              } else {
                absolute = Math.round((target.style.height.substring(0, target.style.height.length - 2)) / 100);
                final = absolute * 100;
                if (final === 0) {
                  final = 100;
                }
              }
            }
            return final;
          };
        })(this);
        preview = document.createElement("div");
        preview.classList.add("resize-preview");
        preview.style.visibility = "hidden";
        this.ewHome.getDomPage(this.page).appendChild(preview);
        target = this.columnElement;
        handle.addEventListener("mousedown", this.handleHandler = (function(_this) {
          return function(event) {
            var mouseUpBound, msmv, startX, startY;
            event.preventDefault();
            target.style.transition = "none";
            startX = event.clientX - target.clientWidth;
            startY = event.clientY - target.clientHeight;
            mouseUpBound = false;
            return document.addEventListener("mousemove", msmv = function(event) {
              var msp, newX, newY;
              event.preventDefault();
              newX = event.clientX - startX;
              newY = event.clientY - startY;
              if (preview.style.visibility !== "visible") {
                preview.style.visibility = "visible";
                preview.style.top = target.style.top;
                preview.style.left = target.style.left;
              }
              preview.style.width = getPercentage(target, true) + "%";
              preview.style.height = getPercentage(target, false) + "px";
              preview.style.position = 'absolute';
              preview.style.zIndex = '200';
              preview.style.border = '3px dotted #424242';
              target.style.zIndex = 107;
              target.style.width = newX + 'px';
              target.style.height = newY + 'px';
              if (!mouseUpBound) {
                mouseUpBound = true;
                return document.addEventListener("mouseup", msp = function(event) {
                  var heightPerc, trnstn, widthPerc;
                  event.preventDefault();
                  document.removeEventListener("mousemove", msmv);
                  document.removeEventListener("mouseup", msp);
                  target.style.transition = "width 250ms, height 250ms";
                  widthPerc = getPercentage(target, true);
                  heightPerc = getPercentage(target, false);
                  target.style.width = widthPerc + "%";
                  target.style.height = heightPerc + "px";
                  _this.width = widthPerc / 10;
                  _this.height = heightPerc / 100;
                  preview.style.visibility = "hidden";
                  ewidgets.sync(_this);
                  return target.addEventListener("webkitTransitionEnd", trnstn = function() {
                    target.removeEventListener("webkitTransitionEnd", trnstn);
                    target.style.zIndex = 1;
                    return ewidgets.layout();
                  });
                });
              }
            });
          };
        })(this));
        if (this.autoload) {
          handle.style.visibility = "visible";
        }
        this.draggie.enable();
        this.columnElement.withToolBar = true;
        return this.columnElement.classList.add("draggable");
      } else {
        if (this.handleHandler) {
          handle.removeEventListener("mousedown", this.handleHandler);
        }
        handle.style.visibility = "hidden";
        this.columnElement.withToolBar = false;
        this.draggie.disable();
        return this.columnElement.classList.remove("draggable");
      }
    }
  };

  EWColumn.prototype.drawPushElement = function(holderElement, params) {
    var colEl, customColumn, newcolumn;
    this.log('EWColumn.drawPushElement');
    holderElement.innerHTML = "";
    customColumn = {};
    if (!customColumn.id) {
      customColumn.id = Math.round(Math.random() * 1000000);
    }
    newcolumn = new Columns[params["class"]](customColumn, false);
    colEl = this.columnElement;
    colEl.params = params.params;
    return newcolumn.render(colEl, holderElement);
  };

  EWColumn.prototype.checkIfElementIsBlocked = function(_element,_blockType) {
    var found = false;
    if (localStorage.getItem('globalParams') != undefined) {

      var globalParams = JSON.parse(localStorage.getItem('globalParams'));
      
        if (globalParams.blocked != undefined) {
          for (var x = 0; x < globalParams.blocked.length; x++) {
            var currentColumn = globalParams.blocked[x];
            if (_element == currentColumn.element) {
              if (currentColumn.type == _blockType) {
                found = true;
              }
              
            }
          }
        }

    }
      return found;
  };

  EWColumn.prototype.draw = function(columnElement, holderElement, element, params) {
    var card;
    this.log('EWColumn.draw');
    if (!element) {
      console.warn("Please define the 'element' property on your column class!");
      return;
    }
    var isBlocked = this.checkIfElementIsBlocked(element,2);
    if (!isBlocked) {
      card = document.createElement(element);
      card.params = params;
      if (holderElement != undefined) {
        holderElement.innerHTML = "";
      }
      
    } else {
      var _openParams = ewidgets.ewHome.getViewBlockedParams().params;
      _openParams.hideFab = true;
      
      card = document.createElement('ew-list-view');
      card.params = _openParams;
      holderElement.innerHTML = "";
    }

    var _retVal = holderElement.appendChild(card);

    if (card.load != undefined) {
      card.load();
    }
    
    return _retVal;
  };

  EWColumn.prototype.refresh = function(columnElement, holderElement) {
    this.log('EWColumn.refresh');
    return this.draw(columnElement, holderElement, this.element, this.params);
  };

  EWColumn.prototype.render = function(columnElement, holderElement) {
    this.log('EWColumn.render');
    this.columnElement = columnElement;
    this.holderElement = holderElement;
    if (this.autoload) {
      this.draw(columnElement, holderElement, this.element, this.params);
    }
    return this.columnElement.notifyResize();
  };

  EWColumn.prototype.debug = false;

  EWColumn.prototype.columnElement = null;

  EWColumn.prototype.editables = [];

  EWColumn.prototype.toolbars = [];

  EWColumn.prototype.draggie = null;

  EWColumn.prototype.saveCache = false;

  EWColumn.prototype.syncedProperties = ["pageid", "fullScreen", "page", "position", "element", "multiColumn", "params", "class", "id", "width", "height", "name", "widgetTitle", "link", "thumb", "autoload","import","widgetId"]; 

  EWColumn.prototype.name = "";

  EWColumn.prototype.title = "";

  EWColumn.prototype.pageid = null;

  EWColumn.prototype.page = null;

  EWColumn.prototype.element = false;

  EWColumn.prototype.visible = true;

  EWColumn.prototype.columnEl = false;

  EWColumn.prototype.responseType = 'json';

  EWColumn.prototype.withToolBar = true;

  EWColumn.prototype.description = "Description from Column";

  EWColumn.prototype.width = 1;

  EWColumn.prototype.height = 1;

  EWColumn.prototype.dialog = null;

  EWColumn.prototype.columns = [];

  EWColumn.prototype.thumb = "./bower_components/ew-home/img/column-unknown.png";

  EWColumn.prototype.params = {};

  EWColumn.prototype.config = {};

  EWColumn.prototype.cache = [];

  EWColumn.prototype.opacity = 1;

  EWColumn.prototype.autoRefresh = 0;

  EWColumn.prototype.autoload = true;

  EWColumn.prototype.onlyone = false;

  EWColumn.prototype.visible = true; 

  EWColumn.prototype.escapeJSON = function(str) {
    return str.replace(/[\\]/g, '\\\\').replace(/[\"]/g, '\\\"').replace(/[\/]/g, '\\/').replace(/[\b]/g, '\\b').replace(/[\f]/g, '\\f').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r').replace(/[\t]/g, '\\t');
  };

  EWColumn.prototype.multiColumn = false;

  EWColumn.prototype.fullScreen = false;

  EWColumn.prototype.withMargin = true;

  EWColumn.prototype.toJSON = function() {
    var index, key, position, result;
    this.log('EWColumn.toJSON');
    result = {};
    index = this.syncedProperties.indexOf("cache");
    if (!this.saveCache) {
      if (index > -1) {
        this.syncedProperties.splice(index, 1);
      }
    } else {
      if (index === -1) {
        this.syncedProperties.push("cache");
      }
    }
    for (key in this) {
      if (this.syncedProperties.indexOf(key) !== -1) {
        result[key] = this[key];
      }
    }
    if (!this.columnElement) {
      this.columnElement = Polymer.dom(this.ewHome).querySelectorAll('#column-element-' + this.id)[0];
    }
    if (this.columnElement) {
      position = {
        'left': this.columnElement.style.left,
        'top': this.columnElement.style.top
      };
      result['position'] = position;
    }
    return result;
  };

  return EWColumn;

})();

var EWidgets, ewidgets,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

EWidgets = (function() {
  EWidgets.prototype.version = "1.0";

  EWidgets.prototype.ewHome = null;

  EWidgets.prototype.debug = true;

  EWidgets.prototype.editMode = false;

  EWidgets.prototype.isMobile = false;

  EWidgets.prototype.packery = null;

  EWidgets.prototype.columns = [];

  EWidgets.prototype.usedColumns = [];

  EWidgets.prototype.pages = [];

  EWidgets.prototype.hasChanges = false;

  EWidgets.prototype.selectedPage = 0;

  EWidgets.prototype.log = function(message) {
    if (this.debug) {
      return console.log(message);
    }
  };

  function EWidgets() {
    this.setEditMode = bind(this.setEditMode, this);
    this.syncAll = bind(this.syncAll, this);
    this.sync = bind(this.sync, this);
    this.log = bind(this.log, this);
    window.addEventListener('WebComponentsReady', this.webComponentsReady);
  }

  EWidgets.prototype.webComponentsReady = function() {
    // console.log('ewidgets.webComponentsReady');
    var _widgetsApp = document.getElementById('widgetsApp');
    if (_widgetsApp != undefined) { 
      this.ewHome = document.getElementById('widgetsApp').getEwHome();
      return this.ewHome.removeLoading();
    }
  };

  EWidgets.prototype.renderSavedColumns = function(cols) {
    this.log("ewidgets.renderSavedColumns");
    if (cols) {
      return ewidgets.drawCols(cols);
    }
  };

  EWidgets.prototype.getColumnForElement = function(column) {
    this.log("ewidgets.getColumnForElement:" + column);
    var retCol = false;
    var columnEL = document.createElement(column);
    if (columnEL != undefined) {
      if (columnEL._getWidgetConfig != undefined) {
        var config = columnEL._getWidgetConfig();
        config.class = 'EWColumn';
        retCol = new EWColumn(config, false);
      }
    }
    return retCol;
  };

  EWidgets.prototype.drawCols = function(cols) {
    var col, i, j, len, newcol;
    this.log("ewidgets.drawCols");
    var newCols = [];
    for (i = j = 0, len = cols.length; j < len; i = ++j) {
      col = cols[i];
      var retCol = new EWColumn(col);
      cols[i] = retCol;
    }
    ewidgets.usedColumns = cols;
    return ewidgets.renderColumns();
  };

  EWidgets.prototype.layout = function() {
    this.log("ewidgets.layout");
    return this.ewHome.layoutPackerys();
  };

  EWidgets.prototype.clearColumns = function() {
    return console.warn("ewidgets.clearColumns - DEPRECATED");
  };

  EWidgets.prototype.renderOneColumn = function(column) {
    var delay, newcol, pack;
    delay = function(ms, func) {
      return setTimeout(func, ms);
    };
    this.log("ewidgets.renderOneColumn");
    this.ewHome = document.getElementById('widgetsApp').getEwHome();
    this.ewHome.clearColumns();
    
    var that = this;

    //delay(500,function() {
      if (that.ewHome.loadedPages.indexOf(column.page) < 0) {
        that.ewHome.push('loadedPages', column.page);
      }
      that.ewHome.selectedPage = column.page;
      ewidgets.selectedPage = column.page;
      column.fullScreen = true;
      that.addColumn(column, true);
      that.ewHome = document.getElementById('widgetsApp').getEwHome();

      
    //});

    pack = this.ewHome.getPackeryFromPage(ewidgets.selectedPage);
    return delay(4000, function() {
      return pack.layout();
    });
  };

  EWidgets.prototype.renderColumns = function() {
    var column, delay, j, len, pack, ref;
    this.log("ewidgets.renderColumns");
    ref = this.usedColumns;
    for (j = 0, len = ref.length; j < len; j++) {
      column = ref[j];
      if (typeof column !== 'undefined') {
        this.addColumn(column, true);
      }
    }
    this.ewHome = document.getElementById('widgetsApp').getEwHome();
    delay = function(ms, func) {
      return setTimeout(func, ms);
    };
    pack = this.ewHome.getPackeryFromPage(ewidgets.selectedPage);
    return delay(2000, function() {
      if (pack != undefined) {
        return pack.layout();
      }
    });
  };

  EWidgets.prototype.addColumn = function(column, dontsave, fullScreenDisabled) {
    var columnEl, holder, holderEl, pack, qtdColumnsFromPage, tempPageid;
    this.log("ewidgets.addColumn");
    if ((column.page === ewidgets.selectedPage) || (column.page === null)) {
      if (!column.id) {
        column.id = Math.round(Math.random() * 1000000);
      }
      if (!column.multiColumn) {
        columnEl = document.createElement("item-column");
      }
      if (column.multiColumn) {
        columnEl = document.createElement("multi-column");
      }
      if (column.page) {
        tempPageid = column.page;
      } else {
        tempPageid = ewidgets.selectedPage;
      }

      // if (column.import != undefined) {
        var _imports = [ column.import ];  
        // this.importLazyWidgets(_imports,columnEl).then(function(results) {
        //   columnEl.fire('import-loaded', results);  

          this.ewHome = document.getElementById('widgetsApp').getEwHome();
          pack = this.ewHome.getPackeryFromPage(ewidgets.selectedPage);
          qtdColumnsFromPage = this.ewHome.getColumnsFromPage(ewidgets.selectedPage,this.usedColumns).length;
          this.log('ewidgets.qtdColumnsFromPage:' + qtdColumnsFromPage);
          if (qtdColumnsFromPage === 0) {
            column.fullScreen = true;
          }
          if (fullScreenDisabled) {
            column.fullScreen = false;
          }
          columnEl.className = 'grid-item ew-widget-on-page-' + tempPageid;
          columnEl.id = 'column-element-' + column.id;
          column.pageid = "page" + tempPageid;
          column.page = tempPageid;
          columnEl.withMargin = column.withMargin;
          columnEl.fullScreen = column.fullScreen;
          columnEl.column = column;
          holder = this.ewHome.getDomPage(tempPageid);
          if (column.autoload) {
            if (!column.fullScreen) {
              columnEl.style.width = (10 * column.width) + "%";
              columnEl.style.height = (100 * column.height) + "px";
              columnEl.style.position = 'absolute';
            }
            if (column.fullScreen) {
              columnEl.withMargin = false;
              columnEl.style.width = "100%";
              columnEl.style.height = "calc(100%)";
              columnEl.style.position = 'absolute';
            }
          }
          this.ewHome.checkIfWillDisableFullScreenOnPage(ewidgets.selectedPage);
          if (!column.autoload) {
            columnEl.style.width = "20%";
            columnEl.style.height = "80px";
          }
          holder.appendChild(columnEl);
          holderEl = columnEl.getHolder(0);
          columnEl.multiColumn = column.multiColumn;
          column.columnElement = columnEl;
          column.holderEl = holderEl;
          if (!this.isMobile) {
            if (column.position) {
              columnEl.style.left = column.position.left;
              columnEl.style.top = column.position.top;
            }
          }
          
          pack.addItems([columnEl]);
          if (!dontsave) {
            this.usedColumns.push(column);
            this.syncAll();
          }
          column.render(columnEl, holderEl);
          column.draggie = new Draggabilly(columnEl);
          column.draggie.unbindHandles();
          column.draggie.handles = [columnEl.getDragIcon()];
          column.draggie.bindHandles();
          column.draggie.disable();
          pack.bindDraggabillyEvents(column.draggie);
          columnEl.addEventListener("column-delete", (function(_this) {
            return function() {
              var msg;
              msg = "O widget '" + column.widgetTitle + "' foi removido.";
              _this.ewHome.showMessage({
                detail: {
                  message: msg
                }
              });
              pack = _this.ewHome.getPackeryFromPage(ewidgets.selectedPage);
              pack.remove(columnEl);
              _this.usedColumns = _this.usedColumns.filter(function(c) {
                return c.id !== column.id;
              });
              return _this.syncAll();
            };
          })(this));
          columnEl.addEventListener("column-refresh", (function(_this) {
            return function() {
              return column.refresh(columnEl, holderEl);
            };
          })(this));
          columnEl.addEventListener("column-settings", (function(_this) {
            return function() {
              return column.settings();
            };
          })(this));
 
          if (this.editMode) {
            return column.editMode(true);
          }

          this.layout();

        // }.bind(this));
      // }
      
    }
  };

  EWidgets.prototype.sync = function(column, dontSyncAll) {
    this.log("ewidgets.sync");
    this.usedColumns = this.usedColumns.map(function(c) {
      if (c.id === column.id) {
        c = column;
      }
      return c;
    });
    if (!dontSyncAll) {
      return this.syncAll();
    }
  };

  EWidgets.prototype.syncAll = function() {
    this.log("ewidgets.syncAll");
    window.localStorage.setItem('usedColumns',JSON.stringify(this.usedColumns));
    return ewidgets.hasChanges = true;
  };
 
  EWidgets.prototype.setEditMode = function(isEdition) {
    var column, j, k, len, len1, ref, ref1, resizerPreview, results;
    this.log("ewidgets.setEditMode");
    this.editMode = isEdition;
    ref = document.querySelectorAll(".resize-preview");
    for (j = 0, len = ref.length; j < len; j++) {
      resizerPreview = ref[j];
      resizerPreview.remove();
    }
    ref1 = this.usedColumns;
    results = [];
    for (k = 0, len1 = ref1.length; k < len1; k++) {
      column = ref1[k];
      results.push(column.editMode(isEdition));
    }
    return results;
  };


  EWidgets.prototype.importLazyWidgets = function(imports,callingElement) {
    // if (!fromElement) {
    //var fromElement = Polymer.DomModule.import(callingElement.localName);
    // }

    // var groupAttribute = group ? '[group=' + group + ']' : ':not([group])';
    // var query =
    //   'link' +groupAttribute+ '[rel=\'lazy-import\'][href]:not([href=\'\'])';
    // var imports = fromElement.querySelectorAll(query);

    var promises = [];
    for (var i = 0; i < imports.length; i++) {
      promises.push(new Promise(function(resolve) {
        var href = imports[i];
        // href = window.location.pathname.replace('index.php','') + href;
        // console.warn('lazy-import:');
        if (href != '') {
          // console.warn(href);
          var onLoad = function() {
            resolve({loaded: href});
          };
          var onFailure = function() {
            resolve({failed: href});
          };
          var resolved = href;
          if (!__loadedWidgets[resolved]) {
            __loadedWidgets[resolved] = true;
            var importHref = Polymer.importHref || callingElement.importHref;
            importHref(resolved, onLoad, onFailure);
          } else {
            resolve({loaded: href});
          }
        } else {
          resolve({loaded: href});
        }
      }));
    }
    return Promise.all(promises).then(function(importRequests) {
      return importRequests.reduce(function(requests, nextRequest) {
        if (nextRequest.loaded) {
          requests.loaded.push(nextRequest.loaded);
        }
        if (nextRequest.failed) {
          requests.failed.push(nextRequest.failed);
        }
        return requests;
      }, {loaded: [], failed: []});
    });
  };

  return EWidgets;

})();

ewidgets = new EWidgets;

