<?php

use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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

Route::middleware("auth:sanctum")->get("/user", function (Request $request) {
    return $request->user();
});

Route::get("candidate/slug-valid/{string}", function (string $string) {
    $slug = Str::slug($string);
    $valid = true;
    $candidate = Candidate::where("slug", $slug);
    if ($candidate != null) {
        $valid = false;
    }

    return response()->json([
        "slug" => $slug,
        "valid" => $valid,
    ]);
})->name("candidates.slug-valid");
