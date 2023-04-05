<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DishController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*DISH ROUTE*/
Route::get("dishes",[DishController::class,'index']);
Route::post('dishes',[DishController::class,'AddDish']);
Route::delete('dishes/{id}',[DishController::class,'DeleteDish']);
Route::put('dishes/{id}',[DishController::class,'UpdateDish']);

/*USER ROUTE*/
Route::group(['middleware'=>['auth:sanctum']],function (){
    Route::get('users',[UserController::class,"index"]);
    Route::delete("users/{id}",[UserController::class,'DeleteUser']);
    Route::get("gate",[AuthController::class,'Checking']);
});

/*CART ROUTE*/
Route::group(['middleware'=>['auth:sanctum']],function (){
    Route::post('carts',[CartController::class,"AddProduct"]);
    Route::get('carts',[CartController::class,'index']);
    Route::put('carts',[CartController::class,'UpdateQuantity']);
    Route::put('carts-checked',[CartController::class,'UpdateChecked']);
});

/*AUTH ROUTE*/
Route::post("register",[AuthController::class,'Register']);
Route::post("login",[AuthController::class,'Login']);


/*PAYMENT ROUTE*/
Route::group(['middleware'=>['auth:sanctum']],function (){
    Route::post('pay',[OrderController::class,"MakeOrder"]);
});

/*CATEGORY ROUTE */
Route::get("categories",[CategoryController::class,'index']);
Route::post("categories",[CategoryController::class,'create']);
Route::post("category-product",[CategoryController::class,'AddCategory']);
Route::get("sort-category/{id}",[CategoryController::class,'SortCategory']);

