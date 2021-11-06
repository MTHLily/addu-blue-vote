<?php

namespace App\Console\Commands;

use App\Services\NewscraperService;
use Illuminate\Console\Command;

class ScrapeNewsArticles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "scrape:news";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Scrape the news sites for new articles.";

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $service = new NewscraperService();
        $service->abs_cbn();
        $service->rappler();
        $service->phil_star();
        $service->comelec();

        return 0;
    }
}
