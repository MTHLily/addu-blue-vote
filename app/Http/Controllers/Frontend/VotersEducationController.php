<?php

namespace App\Http\Controllers\Frontend;

use App\Models\ElectionProcessStep;
use App\Models\NewsArticle;
use App\Models\VideoResource;
use Inertia\Inertia;

class VotersEducationController
{
    public function __invoke()
    {
        $featuredVideos = VideoResource::where("featured", true)->get();
        $videoResources = VideoResource::where("featured", false)
            ->orderByDesc("updated_at")
            ->paginate(10, ["*"], "videos")
            ->onEachSide(1)
            ->withQueryString();

        $articles = NewsArticle::with("newsSource")
            ->orderByDesc("date")
            ->paginate(10)
            ->onEachSide(1)
            ->withQueryString();

        $electionProcessSteps = ElectionProcessStep::all();

        return Inertia::render("VotersEducation", [
            "articles" => $articles,
            "featuredVideos" => $featuredVideos,
            "videoResources" => $videoResources,
            "electionSteps" => $electionProcessSteps,
        ]);
    }
}
