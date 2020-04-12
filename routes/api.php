<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('/user')->group( function() {
    Route::post('/login', 'Api\V1\loginController@login');
    Route::post('/register', 'Api\V1\registerController@create');
    Route::post('/logout', 'Api\V1\loginController@logout');
    Route::middleware('auth:api')->get('/all', 'Api\V1\loginController@users');
});

Route::prefix('/v1')->middleware('auth:api')->group( function(){
    //instacart controller


Route::post('/instacart/login', 'Api\V1\instacartController@login');

Route::post('/instacart/search', 'Api\V1\instacartController@search');

Route::post('/instacart/cart/add', 'Api\V1\instacartController@AddAllToCart');

Route::post('/instacart/address', 'Api\V1\instacartController@setAddress');

Route::post('/instacart/checkout', 'Api\V1\instacartController@checkout');

Route::post('/price/check', 'Api\V1\instacartController@price');

//ingredients controller

Route::post('/ingredients/all', 'Api\V1\ingredientsController@getAllIngredients');

Route::post('/ingredients/create', 'Api\V1\ingredientsController@createIngredient');

Route::post('/ingredients/search/id', 'Api\V1\ingredientsController@searchId');

Route::post('/ingredients/search/name', 'Api\V1\ingredientsController@searchName');

Route::post('/ingredients/update', 'Api\V1\ingredientsController@updateIngredient');

Route::post('/ingredients/destroy', 'Api\V1\ingredientsController@destroyIngredient');

//Meal plan controller

Route::post('/meal-plan', 'Api\V1\mealPlanController@getAllMeals');

Route::post('/meal-plan/make', 'Api\V1\mealPlanController@storeMealPlan');

Route::post('/meal-plan/update', 'Api\V1\mealPlanController@updateMealPlan');


// family controller

Route::post('/family/create', 'Api\V1\familyController@create');

Route::post('/family/update', 'Api\V1\familyController@update');

Route::post('/family/destroy', 'Api\V1\familyController@destroy');

Route::post('/family/get', 'Api\V1\familyController@get');

// cart controller

Route::post('/cart/add', 'Api\V1\cartController@addList');

Route::post('/cart/get', 'Api\V1\cartController@getCart');

Route::post('/cart/empty', 'Api\V1\cartController@emptyCart');

// family controller

Route::post('/family/create', 'Api\V1\amilyController@create');

Route::post('/family/update', 'Api\V1\familyController@update');

Route::post('/family/destroy', 'Api\V1\familyController@destroy');

// store API controller

Route::post('/store/api/v1/get/orders', 'Api\V1\storeApiController@getOrders');

Route::post('/store/api/v1/confirm', 'Api\V1\storeApiController@confirmOrder');

Route::post('/store/api/v1/cancel', 'Api\V1\storeApiController@cancelOrder');

Route::post('/store/api/v1/modify', 'Api\V1\storeApiController@modifyOrder');

Route::post('/store/api/v1/fill', 'Api\V1\storeApiController@fillOrder');

Route::post('/store/api/v1/status', 'Api\V1\storeApiController@setStatus');

//Order controller

Route::post('/order/create', 'Api\V1\rderController@createOrder');

Route::post('/order/cancel', 'Api\V1\orderController@cancelOrder');

Route::post('/order/update', 'Api\V1\orderController@updateOrder');

Route::post('/order/get/user', 'Api\V1\orderController@getById');

Route::post('/order/get/', 'Api\V1\orderController@getByStatus');

//service controller

Route::post('/service/make', 'Api\V1\serviceController@makeComplaint');

Route::post('/service/cancel', 'Api\V1\serviceController@cancelComplaint');

Route::post('/service/get/id', 'Api\V1\serviceController@getComplaint');

Route::post('/service/resolve', 'Api\V1\serviceController@resolve');

Route::post('/service/update', 'Api\V1\serviceController@update');

Route::post('/service/list', 'Api\V1\serviceController@getList');

// vendor controller

Route::post('/vendor/new/update', 'Api\V1\vendorController@newOrUpdate');

Route::post('/vendor/delete', 'Api\V1\vendorController@delete');

});

