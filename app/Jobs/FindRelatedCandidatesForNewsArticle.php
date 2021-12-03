<?php

namespace App\Jobs;

use App\Models\NewsArticle;
use App\Services\NewscraperService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class FindRelatedCandidatesForNewsArticle implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private ?NewsArticle $article = null;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(NewsArticle $article)
    {
        $this->article = $article;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $candidates = app(NewscraperService::class)->relatedCandidates(
            $this->article
        );
        $this->article->relatedCandidates()->sync($candidates->pluck("id"));
    }
}
