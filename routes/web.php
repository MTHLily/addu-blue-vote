<?php

use App\Http\Controllers\CandidateController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrequentlyAskedQuestionController;
use App\Http\Controllers\InformationSnippetController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\NewsArticleController;
use App\Http\Controllers\PointOfInterestController;
use App\Http\Controllers\SVGController;

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

// Route::get("/", function () {
//     return Inertia::render("Welcome", [
//         "faqs" => FrequentlyAskedQuestion::all(),
//         "information" => InformationSnippet::all(),
//         "districts" => District::all(),
//         "registrationSites" => PointOfInterest::where(
//             "point_of_interest_type_id",
//             "=",
//             1
//         )
//             ->with("district")
//             ->get(),
//     ]);
// });

//admin resources
Route::middleware(["auth"])->group(function () {
    // Route::domain("http://dashboard." . env("SHORT_URL"))->group(function () {
    Route::prefix("dashboard")->group(function () {
        Route::get("/", [DashboardController::class, "index"])->name(
            "dashboard"
        );
        Route::resource("faqs", FrequentlyAskedQuestionController::class);
        Route::resource("information", InformationSnippetController::class);
        Route::resource("locations", LocationController::class);
        Route::resource("cities", CityController::class);
        Route::resource("districts", DistrictController::class);
        Route::resource("poi", PointOfInterestController::class);
        Route::resource("news", NewsArticleController::class);
        Route::resource("candidates", CandidateController::class);
    });
});

Route::get("/", [GuestController::class, "voters_registration"])->name(
    "voters-registration"
);
Route::get("/voters-education", [
    GuestController::class,
    "voters_education",
])->name("voters-education");

Route::get("/candidate-profiles", [
    GuestController::class,
    "candidate_profiles_index",
])->name("candidate-profiles.index");

Route::get("/candidate-profile/{id}", [
    GuestController::class,
    "candidate_profile",
])->name("candidate-profiles.show");

Route::get("/login", [RegisteredUserController::class, "create"]);
Route::get("/svg/map_marker.svg", [SVGController::class, "create"]);

require __DIR__ . "/auth.php";
