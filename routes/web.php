<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', 'HomeController@index');

Route::prefix('/app')->group( function(){
    Route::middleware('auth:web')->get('/main', 'HomeController@mainApp');
});

Auth::routes();

