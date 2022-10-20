<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Psy\Exception\FatalErrorException;

Route::get('/api/upload', 'HomeController@uploadFile');
Route::post('/api/upload', 'HomeController@uploadFile');

Route::get('/p3', 'HomeController@indexpolymer3');
Route::redirect('/node_modules', '/app/node_modules', 301);
// Route::permanentRedirect('/node_modules', '/app/node_modules');

// Auth::routes();

Route::get('/Login', 'HomeController@loginIndex');
Route::post('/api/Login', 'HomeController@loginForm');


Route::group(['middleware' => 'auth'], function () {

   //Route::get('/', ['middleware'=> 'central-seguranca:widgets-adm', "uses" => 'HomeController@index']);

   
    Route::get('/api/export/{widgetID}', 'MeusWidgetsController@export');

    Route::get('/', 'HomeController@index');
    Route::get('/Logout', 'HomeController@logout');

    $routes = DB::table('routes')->where('enabled', true)->get();

   
    foreach ($routes as $route) {

        $error = false;

        if ($route->code != '') {
            $code = base64_decode($route->code);

            if (isset($_POST['route'])) {
                
            if ($_POST['route'] == $route->url) {

        
                $phpCode = str_replace("?>","",str_replace("<?php","",$code));
                try {
                    try {
                    $result = @eval($phpCode . "; return true;");
                    } catch (FatalErrorException $e) {
                        $error = true;
                    }
                } catch (FatalErrorException $e) {
                    $error = true;
                }

            }

                            
            }
            

        }

        if (!$error) {

            Route::post($route->url, $route->class_method);
         
        } else {
            
        }
        
    
    }
});



