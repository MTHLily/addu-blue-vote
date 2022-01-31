<?php

use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrequentlyAskedQuestionController;
use App\Http\Controllers\InformationSnippetController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\IssueController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\NewsArticleController;
use App\Http\Controllers\NewsSourceController;
use App\Http\Controllers\PointOfInterestController;
use App\Http\Controllers\PoliticalPartyController;
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

//admin resources
Route::middleware(["auth"])->group(function () {
    Route::domain("dashboard." . env("SHORT_URL"))->group(function () {
        // Route::prefix("dashboard")->group(function () {
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
        Route::resource("issues", IssueController::class);
        Route::resource("political-parties", PoliticalPartyController::class);
        Route::resource("news-sources", NewsSourceController::class);
    });
});

Route::get("/voters-education", [
    GuestController::class,
    "voters_education",
])->name("voters-education");

Route::get("/", function () {
    return redirect()->route("voters-education");
});

Route::get("/voting-precints", [
    GuestController::class,
    "voting_precints",
])->name("voting-precints");

Route::prefix("candidate-profiles")->group(function () {
    Route::get(
        "/region/{region}/province/{province}/district/{district}/city/{city}",
        [CandidateProfileController::class, "city_show"]
    )->name("locations.city.show");
    Route::get("/region/{region}/province/{province}/district/{district}", [
        CandidateProfileController::class,
        "district_show",
    ])->name("locations.district.show");
    Route::get("/region/{region}/province/{province}", [
        CandidateProfileController::class,
        "province_show",
    ])->name("locations.province.show");
    Route::get("/region/{region}", [
        CandidateProfileController::class,
        "region_show",
    ])->name("locations.region.show");
    Route::get("/location/{location}", [
        CandidateProfileController::class,
        "location_redirect",
    ])->name("locations.redirect");

    Route::get("/candidate/{candidate:slug}", [
        CandidateProfileController::class,
        "show",
    ])->name("candidate-profiles.show");

    Route::get("/", [CandidateProfileController::class, "index"])->name(
        "candidate-profiles.index"
    );
});

Route::get("/login", [RegisteredUserController::class, "create"]);
Route::get("/svg/map_marker.svg", [SVGController::class, "create"]);

Route::get("/voters-registration", [
    GuestController::class,
    "voters_registration",
])->name("voters-registration");

require __DIR__ . "/auth.php";
