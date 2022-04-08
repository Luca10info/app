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

$router->group(['prefix'=>'nsapi'],function() use ($router){
    $router->get('/notes','NoteController@index');
    $router->post('/notes', 'NoteController@store');
    $router->put('/notes/{id}','NoteController@update');
    $router->delete('/notes/{id}','NoteController@delete');
});