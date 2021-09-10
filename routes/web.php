<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FrequentlyAskedQuestionController;
use App\Http\Controllers\InformationSnippetController;
use App\Http\Controllers\DashboardController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|

Route::get('/login', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::resource('/dashboard', DashboardController::class);

Route::resource('/dashboard/faqs', FrequentlyAskedQuestionController::class);

Route::resource('/dashboard/information', InformationSnippetController::class);


/*
Route::get('/dashboard/faqtest', function () {
    return Inertia::render('FAQs');
});Route::get('/dashboard/information', function () {
    return Inertia::render('Information');
});//->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/faqs', function () {
    return Inertia::render('FAQs');
});//->middleware(['auth', 'verified'])->name('dashboard');

//
/*Route::get('/faqs', function() {
    return Inertia::render('FAQs', 
        [
            'faqs' => [
                'question' => 'where to register',
                'answer' => 'here in the philippines'
            ]
        ]);
});*/

require __DIR__.'/auth.php';
