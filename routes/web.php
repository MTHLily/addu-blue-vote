<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FrequentlyAskedQuestionController;
use App\Http\Controllers\InformationSnippetController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\PointOfInterestController;

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

//for authorization

/*Route::get('/login', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

//admin resources

//admin dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
//edit FAQs
Route::resource('/dashboard/faqs', FrequentlyAskedQuestionController::class);
//edit Information
Route::resource('/dashboard/information', InformationSnippetController::class);

Route::resource('/dashboard/districts', DistrictController::class);

Route::resource('dashboard/poi', PointOfInterestController::class);

require __DIR__.'/auth.php';
