<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', 'HomeController@index');

Route::get('/vendor/signup', 'HomeController@vendorCreate');

Route::prefix('/app')->group( function(){
    Route::middleware('auth:web')->get('/main', 'HomeController@mainApp');
    Route::middleware('auth:web')->get('/vend', 'HomeController@vendorApp');
    Route::middleware('auth:web')->get('/service', 'HomeController@serviceApp');
});

Auth::routes();

