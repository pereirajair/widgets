<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Widgets</title>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <link rel="shortcut icon" type="image/png" href="./favicon.ico"/>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="apple-touch-icon" href="/src/ew-home/img/icon-144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/src/ew-home/img/icon-152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/src/ew-home/img/icon-180.png">
    <link rel="apple-touch-icon" sizes="167x167" href="/src/ew-home/img/icon-167.png">

    <link rel="apple-touch-icon" sizes="57x57" href="/src/ew-home/img/icon-57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/src/ew-home/img/icon-72.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/src/ew-home/img/icon-114.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/src/ew-home/img/icon-144.png" />

    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/src/ew-home/img/icon-57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/src/ew-home/img/icon-72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/src/ew-home/img/icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/src/ew-home/img/icon-144.png" />
    
    <style>

      #splash {
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          will-change: opacity;
          z-index: 100000;
          /* z-index: -1; */
          /* display: none; */
        }

        #splash::before {
          position: absolute;
          content: '';                    
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          
          background-size: 150px;
          background-color: #fff;
        }

        body.loading #splash {
          opacity: 1;
          /* z-index: 100000; */
          /* display: inline; */
        }
        
        html {
          width: 100%;
          height: 100%;
          margin: 0px;
        }

        body {
          height: inherit;
          width: inherit;
          margin: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #FFFFFF !important;
          overflow: hidden;
        }

        #widgetsApp{
          /* position: absolute; */
          width: 100%;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          overflow: auto;
          z-index: 10001;
        }

        /*IPHONE X*/
        @media only screen 
          and (device-width : 375px) 
          and (device-height : 812px) 
          and (-webkit-animated-maildevice-pixel-ratio : 3)
          and (orientatanimated-mailion : portrait) { 
            #widgetsAppanimated-mail {
              /* padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); */
              /* bottom: 200px !important; */
              /* top: 100px !important; */
            }
        }

        #toolbar {
            position: fixed !important;
            top: 0px !important;
            width: 100% !important;
            left: 0px !important;
        }


        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px
        }

        .ball {
          width: 80px;
          height: 50px;
          border-radius: 41px;
          margin: 0 15px;
          
          animation: 2s bounce ease infinite;
        }

        .blue {
          background-color: #4285F5;
        }

        .red {
          background-color: #EA4436;
          animation-delay: .1s;
        }

        .yellow {
          background-color: #FBBD06;
          animation-delay: .2s;
        }

        .green {
          background-color: #34A952;
          animation-delay: .3s;
        }

        @keyframes bounce {  
            50% {
                transform: translateY(50px);
            }
        }



.letter-image {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 325px;
  height: 200px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 100000;
}

.animation-splash {
  animation: hide-splash 1.5s;
  -moz-animation: hide-splash 1.5s; /* Firefox */
  -webkit-animation: hide-splash 1.5s; /* Safari and Chrome */
  -o-animation: hide-splash 1.5s; /* Opera */
  -webkit-animation-fill-mode: forwards;
}

@keyframes hide-splash {
  from {
    display: inline;
  }
  to {
    display: none;
    z-index: -1;
    -webkit-animation-fill-mode: forwards;
  }
}

@-webkit-keyframes hide-splash { /* Safari and Chrome */
  from {
    display: inline;
  }
  to {
    display: none;
    z-index: -1;
    -webkit-animation-fill-mode: forwards;
  }
}


div.cardBrowser {
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: left; 
}

div.headerBrowser {
    background-color: #EFEFEF;
    color: white;
    padding: 10px;
    font-size: 40px;
    text-align: center;
}

div.containerBrowser {
    padding: 10px;
    font-family: Verdana;
    font-size: 14px;
}


  </style>
  <link rel="manifest" href="/app/manifest.json">
  <script>
    var ENABLE_SHADOWDOM = true;
    var POLYMER = 2;
    var HAS_LOADED_EDITOR = false;

    var MIN_FIREFOX_VERSION = 50;
    var MIN_CHROME_VERSION = 42;

    var AUTH = '{{$auth}}';

    // window.localStorage.setItem('expresso','{{htmlspecialchars_decode($auth)}}');

    window.localStorage.setItem('expresso','{ "auth": "' + AUTH + '", "externalAPI" : "", "serverAPI" : "", "profile": { "contactID" : "12345", "contactMails" : "pereira.jair@celepar.pr.gov.br" } }');

    window.localStorage.setItem('options','{ "builtIn": false, "showLogo": false, "logoSystem": "/app/src/ew-home/img/logo_expresso.png", "top": 0 }');

  </script>
  </script>
  <script src="/app/bower_components/webcomponentsjs/webcomponents-loader.js"></script>
</head>
<body id="ewidgetsBody" class="fullbleed layout vertical loading">
     <div id="splash" class="animation-splash">
      <div class="letter-image">
          <img src="/app/src/ew-home/img/logo_celepar_325x100.png" style="width:325px;">
          <div class="wrapper">
            <div class="blue ball"></div>
            <div class="red ball"></div>  
            <div class="yellow ball"></div>  
            <div class="green ball"></div>  
          </div>
      </div>
      
    </div>
    <div id="incompatible_browser" class="cardBrowser"  style=" display: none; ">
        <div class="headerBrowser">
           <img src="/app/src/ew-home/img/logo_expresso.png">
        </div>
        <div id="messageError" class="containerBrowser"></div>
      </div>
    <div>
    </div>
    <script>
      navigator.browserSpecs = (function(){
          var ua = navigator.userAgent, tem, 
              M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
          if(/trident/i.test(M[1])){
              tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
              return {name:'IE',version:(tem[1] || '')};
          }
          if(M[1]=== 'Chrome'){
              tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
              if(tem != null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
          }
          M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
          if((tem = ua.match(/version\/(\d+)/i))!= null)
              M.splice(1, 1, tem[1]);
          return {name:M[0], version:M[1]};
      })();

      var loadScript = function(src, callback) {
        var s,
            r,
            t;
        r = false;
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        s.onload = s.onreadystatechange = function() {
          //console.log( this.readyState ); //uncomment this line to see which ready states are called.
          if ( !r && (!this.readyState || this.readyState == 'complete') )
          {
            r = true;
            callback();
          }
        };
        t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
      };
      
      var _loadPlatform = function() {
          var body = document.getElementById('ewidgetsBody');

          document.head.insertAdjacentHTML('beforeend','<link rel="import" href="/app/src/ew-home/bundle-0.html"><link rel="import" href="/app/src/ew-home/bundle-1.html">');

          var widgetsApp = document.createElement('widgets-app');
          widgetsApp.id = 'widgetsApp';
          body.append(widgetsApp);

      }

      var _showError = function(_browser) {
        var incompatible_browser = document.getElementById('incompatible_browser');
        incompatible_browser.style = 'display: inline;';

        var splash = document.getElementById('splash');
        splash.style = 'display: none;'

        document.getElementById('messageError').innerHTML = '<p><h3>Aviso</h3> Você está usando a versão ' + _browser.version +' do ' + _browser.name + ', que é considerada uma versão antiga deste navegador.<br><br>Não foi possível carregar o "Expresso Widgets", porque esta versão de navegador não possui as tecnologias necessárias.<br><br>Por favor atualize seu navegador ou tente usar outro navegador.</p>';
        
        if (document.getElementById('divSubContainer') != undefined) {
          document.getElementById('divSubContainer').style = 'display: none;';
        }
        
      }
      
      var canLoadPlatform = true;
      if (navigator.browserSpecs.name == 'Firefox') {
        if (navigator.browserSpecs.version <= MIN_FIREFOX_VERSION) {
          canLoadPlatform = false;
          _showError(navigator.browserSpecs);
        }
      } 
      if (navigator.browserSpecs.name == 'Chrome') {
        if (navigator.browserSpecs.version <= MIN_CHROME_VERSION) {
          canLoadPlatform = false;
          _showError(navigator.browserSpecs);
        }
      }
      if (canLoadPlatform) {
        _loadPlatform();
      }
    </script>
</body>
</html>