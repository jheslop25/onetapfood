<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', 'HomeController@mainApp');


Auth::routes();

// //instacart controller


// Route::post('/instacart/login', 'instacartController@login');

// Route::post('/instacart/search', 'instacartController@search');

// Route::post('/instacart/cart/add', 'instacartController@AddAllToCart');

// Route::post('/instacart/address', 'instacartController@setAddress');

// Route::post('/instacart/checkout', 'instacartController@checkout');

// Route::post('/price/check', 'instacartController@price');

// //ingredients controller

// Route::post('/ingredients/all', 'ingredientsController@getAllIngredients');

// Route::post('/ingredients/create', 'ingredientsController@createIngredient');

// Route::post('/ingredients/search/id', 'ingredientsController@searchId');

// Route::post('/ingredients/search/name', 'ingredientsController@searchName');

// Route::post('/ingredients/update', 'ingredientsController@updateIngredient');

// Route::post('/ingredients/destroy', 'ingredientsController@destroyIngredient');

// //Meal plan controller

// Route::post('/meal-plan', 'mealPlanController@getAllMeals');

// Route::post('/meal-plan/make', 'mealPlanController@storeMealPlan');

// Route::post('/meal-plan/update', 'mealPlanController@updateMealPlan');


// // family controller

// Route::post('/family/create', 'familyController@create');

// Route::post('/family/update', 'familyController@update');

// Route::post('/family/destroy', 'familyController@destroy');

// Route::post('/family/get', 'familyController@get');

// // cart controller

// Route::post('/cart/add', 'cartController@addList');

// Route::post('/cart/get', 'cartController@getCart');

// Route::post('/cart/empty', 'cartController@emptyCart');

// // family controller

// Route::post('/family/create', 'familyController@create');

// Route::post('/family/update', 'familyController@update');

// Route::post('/family/destroy', 'familyController@destroy');

// // store API controller

// Route::post('/store/api/v1/get/orders', 'storeApiController@getOrders');

// Route::post('/store/api/v1/confirm', 'storeApiController@confirmOrder');

// Route::post('/store/api/v1/cancel', 'storeApiController@cancelOrder');

// Route::post('/store/api/v1/modify', 'storeApiController@modifyOrder');

// Route::post('/store/api/v1/fill', 'storeApiController@fillOrder');

// Route::post('/store/api/v1/status', 'storeApiController@setStatus');

// //Order controller

// Route::post('/order/create', 'orderController@createOrder');

// Route::post('/order/cancel', 'orderController@cancelOrder');

// Route::post('/order/update', 'orderController@updateOrder');

// Route::post('/order/get/user', 'orderController@getById');

// Route::post('/order/get/', 'orderController@getByStatus');

// //service controller

// Route::post('/service/make', 'serviceController@makeComplaint');

// Route::post('/service/cancel', 'serviceController@cancelComplaint');

// Route::post('/service/get/id', 'serviceController@getComplaint');

// Route::post('/service/resolve', 'serviceController@resolve');

// Route::post('/service/update', 'serviceController@update');

// Route::post('/service/list', 'serviceController@getList');

// // vendor controller

// Route::post('/vendor/new/update', 'vendorController@newOrUpdate');

// Route::post('/vendor/delete', 'vendorController@delete');
