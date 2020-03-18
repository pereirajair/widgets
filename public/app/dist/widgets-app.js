
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item.js';

import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/image-icons.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/editor-icons.js';
import '@polymer/iron-icons/device-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/polymer/lib/legacy/polymer.dom.js';
import '@polymer/polymer/lib/legacy/polymer-fn.js';
// import '@polymer/iron-signals/iron-signals.js';
import '@polymer/iron-localstorage/iron-localstorage.js';

// import './libs.js';
import { ewidgets } from './main.js';
import './ew-fab.js';
import './ew-snackbar.js';
import './ew-loading-spinner.js';
import './ew-header.js';
import './ew-api-ajax.js';
import './ew-login.js';
import './adamantium-editor.js';
import './ew-search.js';
import './ew-home.js';
import './widgets-app.js';
import './multi-column.js';
import './item-column.js';
import './ew-confirm-dialog.js';
import './ew-column-dialog.js';
import './ew-expresso-messenger.js';
import './ew-list-view.js';
import './ew-list.js';
import './ew-view.js';

class IronSignal extends PolymerElement {

  static get is() {
    return 'iron-signals';
  }
  attached() {
    signals.push(this);
  }
  detached() {
    var i = signals.indexOf(this);
    if (i >= 0) {
      signals.splice(i, 1);
    }
  }
};

window.customElements.define('iron-signal', IronSignal);

class WidgetsApp extends PolymerElement {
  static get is() {
    return 'widgets-app';
  }
  static get template() {
    return html`
            <style>
            :host {
              display: block;
              position: absolute;
              height: 100%;
              width: 100%;
              overflow: hidden !important;
            }
          </style>
          <ew-home id="EWHOME" development="{{development}}" options="{{options}}"></ew-home>`;
  }
  static get properties() {
    return {
      development: { type: Boolean, value: false, reflectToAttribute: true, notify: true },
      _options: { type: Object, value: {}, reflectToAttribute: true, notify: true, computed: '_computeOptions(development)' }
    };
  }
  _computeOptions(_development) {
    var _options = {};
    if (_development) {
      _options = { "builtIn": true, "top": 0 };
    }
    return _options;
  }
  getEwHome() {
    return this.$.EWHOME;
  }
};

customElements.define(WidgetsApp.is, WidgetsApp);