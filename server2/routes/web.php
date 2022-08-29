<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });
$router->get('user/{id}', 'UserController@show');

$router->get('foo', function () {
    return 'Hello World';
});

// $router->group(['prefix' => 'api'], function () use ($router) {
//     $router->post('login', 'AuthController@login');

//     $router->group(['middleware' => 'auth'], function () use ($router) {
//         $router->get('user', 'UserController@index');
//     });
// });
$router->group([
    'prefix' => 'api'
], function () use ($router) {
    $router->post('login', 'AuthController@login');
});
$router->group([

    'prefix' => 'api/auth'

], function () use ($router) {
    // Route::post('login', 'AuthController@login');
    $router->group(['middleware' => 'auth:api'], function () use ($router) {    
        $router->post('logout', 'AuthController@logout');
        $router->post('refresh', 'AuthController@refresh');
        $router->post('register', 'AuthController@register');
        $router->get('user', 'AuthController@me');
        $router->get('users', 'UserController@index');
    });

});