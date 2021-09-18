<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FrequentlyAskedQuestionController;
use App\Http\Controllers\InformationSnippetController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\PointOfInterestController;
use App\Http\Controllers\SVGController;
use App\Models\District;
use App\Models\FrequentlyAskedQuestion;
use App\Models\InformationSnippet;
use App\Models\PointOfInterest;

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

Route::get('/', function(){
    return Inertia::render('Welcome', [
        'faqs' => FrequentlyAskedQuestion::all(),
        'information' => InformationSnippet::all(),
        'districts' => District::all(),
        'registrationSites' => PointOfInterest::where('point_of_interest_type_id', '=', 1 )->with('district')->get()
    ]);
});

Route::get('/login', [RegisteredUserController::class, 'create']);

//admin resources
Route::middleware(['auth'])->group(function () {
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::resource('/dashboard/faqs', FrequentlyAskedQuestionController::class);
Route::resource('/dashboard/information', InformationSnippetController::class);
Route::resource('/dashboard/cities', CityController::class);
Route::resource('/dashboard/districts', DistrictController::class);
Route::resource('dashboard/poi', PointOfInterestController::class);
Route::get('/svg/map_marker.svg', [SVGController::class, 'create']);
   });

require __DIR__.'/auth.php';
