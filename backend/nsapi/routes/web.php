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

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('/login', 'AuthController@login');
$router->post('/register', 'AuthController@register');

$router->group(['middleware' => 'jwt.auth'], function () use ($router) {
    $router->group(['prefix' => 'notes'], function () use ($router) {
        $router->get('/', 'NoteController@index');
        $router->get('/{id}', 'NoteController@getNote');
        $router->post('/', 'NoteController@store');
        $router->put('/{id}', 'NoteController@update');
        $router->delete('/{id}', 'NoteController@delete');
    });
    $router->post('/logout', 'AuthController@logout');
    $router->get('/profile', 'UserController@show');
});
