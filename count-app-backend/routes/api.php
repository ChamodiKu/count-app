<?php

use App\Http\Controllers\CountController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SectionController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Products Routes
Route::get('/products/', [ProductController::class, 'index']);
Route::post('/products/create/', [ProductController::class, 'create']);
Route::get('/products/{id}/', [ProductController::class, 'view']);
Route::patch('/products/update/{id}', [ProductController::class, 'update']);
Route::delete('/products/delete/{id}', [ProductController::class, 'delete']);

//Sections Routes
Route::get('/sections/', [SectionController::class, 'index']);
Route::post('/sections/create/', [SectionController::class, 'create']);
Route::get('/sections/{id}/', [SectionController::class, 'view']);
Route::patch('/sections/update/{id}', [SectionController::class, 'update']);
Route::delete('/sections/delete/{id}', [SectionController::class, 'delete']);

//Counts Routes
Route::get('/counts/', [CountController::class, 'index']);
Route::post('/counts/create/', [CountController::class, 'create']);
Route::get('/counts/{id}/', [CountController::class, 'view']);
Route::patch('/counts/update/{id}', [CountController::class, 'update']);
Route::delete('/counts/delete/{id}', [CountController::class, 'delete']);
Route::get('/counts/viewbyproduct/{id}', [CountController::class, 'viewByProduct']);
Route::get('/counts/viewbysection/{id}', [CountController::class, 'viewBySection']);
