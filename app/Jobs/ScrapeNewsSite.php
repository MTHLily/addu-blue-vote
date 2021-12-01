<?php

namespace App\Jobs;

use App\Services\NewscraperService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ScrapeNewsSite implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private string $site = "";

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $site)
    {
        $this->site = $site;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $service = app(NewscraperService::class);
        if (is_callable([$service, $this->site])) {
            $method = $this->site;
            $service->$method();
        } else {
            dump("Could not find method");
        }
    }
}
