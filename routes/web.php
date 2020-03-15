<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/instacart', function () {
    return view('development.instacart');
});

Route::post('/callAPI', 'instacartController@login');

Route::post('/searchInstacart', 'instacartController@search');

Route::post('/addAllToCart', 'instacartController@AddAllToCart');
