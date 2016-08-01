<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

Route::resource('users','UserController');

Route::resource('books','BookController');

Route::resource('users.books','UserBookController');

/*
Route::group(['prefix' => 'users/'],function(){
    Route::get('info/{id}','UserController@info');
    Route::put('turnbook/{id}','UserController@turnbook');
    Route::put('getbook/{id}/{id_user}','UserController@getbook');
});*/