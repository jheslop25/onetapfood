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

Route::get('/dev', 'HomeController@devInt');

Route::get('/test', 'HomeController@test');

Route::post('/test/post', 'HomeController@post');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//instacart controller

Route::get('/instacart', function () {
    return view('development.instacart');
});

Route::post('/callAPI', 'instacartController@login');

Route::post('/searchInstacart', 'instacartController@search');

Route::post('/addAllToCart', 'instacartController@AddAllToCart');

Route::post('/instacart/address', 'instacartController@setAddress');

Route::post('/instacart/checkout', 'instacartController@checkout');

//ingredients controller

Route::post('/ingredients/all', 'ingredientsController@getAllIngredients');

Route::post('/ingredients/create', 'ingredientsController@createIngredient');

Route::post('/ingredients/search/id', 'ingredientsController@searchId');

Route::post('/ingredients/search/name', 'ingredientsController@searchName');

Route::post('/ingredients/update', 'ingredientsController@updateIngredient');

Route::post('/ingredients/destroy', 'ingredientsController@destroyIngredient');

//Meal plan controller

Route::post('/meal-plan', 'mealPlanController@getAllMeals');

Route::post('/meal-plan/make', 'mealPlanController@storeMealPlan');

Route::post('/meal-plan/update', 'mealPlanController@updateMealPlan');


// family controller

Route::post('/family/create', 'familyController@createFamily');

Route::post('/family/update', 'familyController@updateFamily');

Route::post('/family/destroy', 'familyController@destroyFamily');

// cart controller

Route::post('/cart/add', 'cartController@addList');

Route::post('/cart/get', 'cartController@getCart');

Route::post('/cart/empty', 'cartController@emptyCart');

// family controller

Route::post('/family/create', 'familyController@create');

Route::post('/family/update', 'familyController@update');

Route::post('/family/destroy', 'familyController@destroy');

