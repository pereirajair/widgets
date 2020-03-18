<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <title>Expresso</title>
    <meta name="description" content="Expresso Widgets">

    <!--
      The `<base>` tag below is present to support two advanced deployment options:
      1) Differential serving. 2) Serving from a non-root path.

      Instead of manually editing the `<base>` tag yourself, you should generally either:
      a) Add a `basePath` property to the build onfiguration in your `polymer.json`.
      b) Use the `--base-path` command-line option for `polymer build`.

      Note: If you intend to serve from a non-root path, see [polymer-root-path] below.
    -->
    <base href="/">

    <link rel="icon" href="images/favicon.ico">

    <!-- See https://goo.gl/OOhYW5 -->
    <link rel="manifest" href="app/manifest.json">

    <!-- See https://goo.gl/qRE0vM -->
    <meta name="theme-color" content="#3f51b5">

    <!-- Add to homescreen for Chrome on Android. Fallback for manifest.json -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="My App">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="My App">

    <!-- <link href="../../app/src/ew-home/jsxc/css/jquery-ui.min.css" media="all" rel="stylesheet" type="text/css" /> 
    <link href="../../app/src/ew-home/jsxc/css/jsxc.css" media="all" rel="stylesheet" type="text/css" /> -->

    <!-- Homescreen icons -->
    <link rel="apple-touch-icon" href="images/manifest/icon-48x48.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/manifest/icon-72x72.png">
    <link rel="apple-touch-icon" sizes="96x96" href="images/manifest/icon-96x96.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/manifest/icon-144x144.png">
    <link rel="apple-touch-icon" sizes="192x192" href="images/manifest/icon-192x192.png">

    <!-- Tile icon for Windows 8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="images/manifest/icon-144x144.png">
    <meta name="msapplication-TileColor" content="#3f51b5">
    <meta name="msapplication-tap-highlight" content="no">

    <script>
      /**
      * [polymer-root-path]
      *
      * Leave this line unchanged if you intend to serve your app from the root
      * path (e.g., with URLs like `my.domain/` and `my.domain/view1`).
      *
      * If you intend to serve your app from a non-root path (e.g., with URLs
      * like `my.domain/my-app/` and `my.domain/my-app/view1`), edit this line
      * to indicate the path from which you'll be serving, including leading
      * and trailing slashes (e.g., `/my-app/`).
      */
      window.MyAppGlobals = { rootPath: '/' };

      // Load and register pre-caching Service Worker
      // if ('serviceWorker' in navigator) {
      //   window.addEventListener('load', function() {
      //     navigator.serviceWorker.register('service-worker.js', {
      //       scope: MyAppGlobals.rootPath
      //     });
      //   });
      // }
    </script>

    


    <script src="app/node_modules/moment/moment.js"></script>
    <!-- Load webcomponents-loader.js to check and load any polyfills your browser needs -->
    <script src="app/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>




    <!-- Load your application shell -->
     <script src="app/p3/ew-home/libs.js"></script>
   <!-- <script src="src/ew-home/main.js"></script> -->
    <script>
    // private shared database
var signals = [];

// signal dispatcher
function notify(name, data) {
  // convert generic-signal event to named-signal event
  var signal = new CustomEvent('iron-signal-' + name, {
    bubbles: false,
    detail: data
  });
  // dispatch named-signal to all 'signals' instances,
  // only interested listeners will react
  signals.forEach(function(s) {
    s.dispatchEvent(signal);
  });
}

// signal listener at document
document.addEventListener('iron-signal', function(e) {
  console.warn(e);
  notify(e.detail.name, e.detail.data);
});
</script>
    <script type="module" src="app/dist/widgets-app.js"></script>
    <!-- <script type="module" src="p3/my-app.js"></script> -->

    <style>
      body {
        margin: 0;
        font-family: "Roboto", "Noto", sans-serif;
        line-height: 1.5;
        min-height: 100vh;
        background-color: #eeeeee;
      }
    </style>
  </head>
  <body id="ewidgetsBody" class="fullbleed layout vertical loading">
    <my-app></my-app>
    <widgets-app id="widgetsApp"></widgets-app>
    <noscript>
      Please enable JavaScript to view this website.
    </noscript>
  </body>
</html>
