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

Route::get('/', 'MainController@homeIndex');

Route::get('/contacts', 'MainController@contactsIndex');

Route::get('/profile', 'MainController@profileIndex');

Route::get('/pl', 'MainController@plIndex');