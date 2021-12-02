<?php

namespace App\Console\Commands;

use App\Services\NewscraperService;
use Illuminate\Console\Command;

class LinkCandidates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "scrape:link";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Command description";

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
        app(NewscraperService::class)->linkCandidates(0, true);

        return Command::SUCCESS;
    }
}
