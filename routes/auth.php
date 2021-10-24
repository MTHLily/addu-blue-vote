<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

// Route::get('/register', [RegisteredUserController::class, 'create'])
//                 ->middleware('guest')
//                 ->name('register');

// Route::post('/register', [RegisteredUserController::class, 'store'])
//                 ->middleware('guest');

Route::get("/login", [AuthenticatedSessionController::class, "create"])
    ->middleware("guest")
    ->name("login");

Route::post("/login", [
    AuthenticatedSessionController::class,
    "store",
])->middleware("guest");

Route::post("/logout", [AuthenticatedSessionController::class, "destroy"])
    ->middleware("auth")
    ->name("logout");
