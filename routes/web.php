<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\ElectionProcessStepController;
use App\Http\Controllers\Backend\InformationModuleController;
use App\Http\Controllers\Backend\InformationSnippetController;
use App\Http\Controllers\Backend\IssueController;
use App\Http\Controllers\Backend\LocationController;
use App\Http\Controllers\Backend\NewsArticleController;
use App\Http\Controllers\Backend\NewsSourceController;
use App\Http\Controllers\Backend\PointOfInterestController;
use App\Http\Controllers\Backend\PoliticalPartyController;
use App\Http\Controllers\Backend\VideoResourceController;
use App\Http\Controllers\Backend\CandidateController;
use App\Http\Controllers\Backend\FrequentlyAskedQuestionController;
use App\Http\Controllers\Frontend\CandidateProfileController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\InformationModuleFrontendController;
use App\Http\Controllers\Frontend\VotersEducationController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\SVGController;
use App\Models\Candidate;
use App\Models\NewsArticle;
use App\Services\NewscraperService;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

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

Route::get("/test", function (NewscraperService $service) {
    $article = NewsArticle::find(391);
    // dd($article);
    $keywords = $service->getMetaKeywordsFromUrl($article->url);
    $related = $service->relatedCandidates($article);

    dd($keywords, $related);
});

//admin resources
Route::middleware(["auth"])->group(function () {
    Route::domain("dashboard." . env("SHORT_URL"))->group(function () {
        // Route::prefix("dashboard")->group(function () {
        Route::get("/", [DashboardController::class, "index"])->name(
            "dashboard"
        );
        Route::resource("faqs", FrequentlyAskedQuestionController::class);
        Route::resource("information", InformationSnippetController::class);
        Route::resource("locations", LocationController::class)->except("show");
        // Route::resource("cities", CityController::class);
        // Route::resource("districts", DistrictController::class);
        Route::resource("poi", PointOfInterestController::class);
        Route::resource("news", NewsArticleController::class);

        Route::patch("/candidates/{candidate}/unlink-article/{article}", [
            CandidateController::class,
            "unlink_article",
        ])->name("candidates.unlink-article");
        Route::resource("candidates", CandidateController::class);
        Route::resource("issues", IssueController::class);
        Route::resource("political-parties", PoliticalPartyController::class);

        Route::patch("election-process-steps/reorder/{item1}/{item2}", [
            ElectionProcessStepController::class,
            "reorder",
        ])->name("election-process-steps.reorder");
        Route::resource(
            "election-process-steps",
            ElectionProcessStepController::class
        )->except("show");
        Route::resource("news-sources", NewsSourceController::class)->only([
            "index",
            "create",
            "destroy",
            "edit",
            "update",
        ]);
        Route::resource("news-sources", NewsSourceController::class);
        Route::resource(
            "information-modules",
            InformationModuleController::class
        );

        Route::patch("video-resources/{videoResource}/check}", [
            VideoResourceController::class,
            "check",
        ])->name("video-resources.check");
        Route::resource("video-resources", VideoResourceController::class);
    });
});

Route::get("/voters-education", VotersEducationController::class)->name(
    "voters-education"
);

Route::get("/", HomeController::class);

Route::get("/voting-precints", [
    GuestController::class,
    "voting_precints",
])->name("voting-precints");

Route::get("/about-us", AboutUsController::class)->name("about-us");

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

Route::prefix("information-modules")->group(function () {
    Route::get("/", [
        InformationModuleFrontendController::class,
        "index",
    ])->name("modules.index");
    Route::get("/{informationModule}", [
        InformationModuleFrontendController::class,
        "show",
    ])->name("modules.show");
});

Route::get("/login", [RegisteredUserController::class, "create"]);
Route::get("/svg/map_marker.svg", [SVGController::class, "create"]);

Route::get("/voters-registration", [
    GuestController::class,
    "voters_registration",
])->name("voters-registration");

require __DIR__ . "/auth.php";
