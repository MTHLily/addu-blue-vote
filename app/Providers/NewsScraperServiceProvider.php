<?php

namespace App\Providers;

use App\Services\NewscraperService;
use Illuminate\Support\ServiceProvider;

class NewsScraperServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(NewscraperService::class, function ($app) {
            return new NewscraperService();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
