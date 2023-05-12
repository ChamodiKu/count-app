<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\CountController;

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

////Products Routes
//Route::get('/products/', [ProductController::class, 'index']);
//Route::get('/products/create/', [ProductController::class, 'create']);
//Route::get('/products/{id}/', [ProductController::class, 'view']);
//Route::get('/products/update/{id}', [ProductController::class, 'update']);
//Route::get('/products/delete/{id}', [ProductController::class, 'delete']);


//Sections Routes
Route::get('/sections/', [SectionController::class, 'index']);
Route::get('/sections/create/', [SectionController::class, 'create']);
Route::get('/sections/{id}/', [SectionController::class, 'view']);
Route::get('/sections/update/{id}', [SectionController::class, 'update']);
Route::get('/sections/delete/{id}', [SectionController::class, 'delete']);


//Counts Routes
Route::get('/counts/', [CountController::class, 'index']);
Route::get('/counts/create/', [CountController::class, 'create']);
Route::get('/counts/{id}/', [CountController::class, 'view']);
Route::get('/counts/update/{id}', [CountController::class, 'update']);
Route::get('/counts/delete/{id}', [CountController::class, 'delete']);
Route::get('/counts/viewbyproduct/{id}', [CountController::class, 'viewByProduct']);
Route::get('/counts/viewbysection/{id}', [CountController::class, 'viewBySection']);
