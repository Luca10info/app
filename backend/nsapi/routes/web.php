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

$router->group(['middleware'=>'jwt.auth'], function () use($router){
    $router->group(['prefix'=>'nsapi'],function() use ($router){
        $router->post('/logout','AuthController@logout');
        $router->get('/notes','NoteController@index');
        $router->get('/notes/{id}','NoteController@getNote');
        $router->get('/profile','UserController@show');
        $router->post('/notes', 'NoteController@store');
        $router->put('/notes/{id}','NoteController@update');
        $router->delete('/notes/{id}','NoteController@delete');
    });
});
