<?php

namespace App\Http\Controllers;

use App\Http\Requests\CandidateRequest;
use App\Models\Candidate;
use App\Models\CandidateBackgroundType;
use App\Models\Issue;
use App\Models\Location;
use App\Models\LocationType;
use App\Models\NewsArticle;
use App\Models\PoliticalParty;
use App\Models\RunningPosition;
use App\Services\CandidateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $candidates = Candidate::with("relatedArticles:id,url,title,date")
            ->withCount("relatedArticles")
            ->get();

        return Inertia::render("Candidates/Index", [
            "candidates" => $candidates,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $locationTypes = LocationType::all();
        $positions = RunningPosition::all()->groupBy("location_type_id");
        $locations = Location::all();
        $location_tree = Location::regions()
            ->with("children.children.children")
            ->get();
        $issues = Issue::all();
        $parties = PoliticalParty::orderBy("name")->get();
        $background_types = CandidateBackgroundType::all();
        $articles = NewsArticle::all();

        return Inertia::render("Candidates/Create", [
            "location_types" => $locationTypes,
            "positions" => $positions,
            "locations" => $locations,
            "location_tree" => $location_tree,
            "issues" => $issues,
            "parties" => $parties,
            "background_types" => $background_types,
            "articles" => $articles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CandidateRequest $request)
    {
        $candidate = (new CandidateService())->updateOrCreate($request);

        return Redirect::route("candidates.index")->with(
            "success",
            $candidate->name . " has been created!"
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Candidate  $candidate
     * @return \Illuminate\Http\Response
     */
    public function show(Candidate $candidate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Candidate  $candidate
     * @return \Illuminate\Http\Response
     */
    public function edit(Candidate $candidate)
    {
        $locationTypes = LocationType::all();
        $positions = RunningPosition::all()->groupBy("location_type_id");
        $locations = Location::all();
        $location_tree = Location::regions()
            ->with("children.children.children")
            ->get();
        $issues = Issue::all();
        $articles = NewsArticle::all();
        $parties = PoliticalParty::orderBy("name")->get();
        $background_types = CandidateBackgroundType::all();

        $candidate->load([
            "media",
            "background",
            "stances",
            "runningPosition",
            "platforms",
            "relatedArticles",
        ]);
        $candidate->append("mediaUrls");

        return Inertia::render("Candidates/Edit", [
            "candidate" => $candidate,
            "location_types" => $locationTypes,
            "positions" => $positions,
            "locations" => $locations,
            "location_tree" => $location_tree,
            "issues" => $issues,
            "parties" => $parties,
            "background_types" => $background_types,
            "articles" => $articles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Candidate  $candidate
     * @return \Illuminate\Http\Response
     */
    public function update(CandidateRequest $request, Candidate $candidate)
    {
        (new CandidateService())->updateOrCreate($request, $candidate);

        return Redirect::route("candidates.index")->with(
            "success",
            $candidate->name . " has been updated!"
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Candidate  $candidate
     * @return \Illuminate\Http\Response
     */
    public function destroy(Candidate $candidate)
    {
        $candidate->delete();

        return Redirect::back()->with(
            "message",
            $candidate->name . " has been deleted!"
        );
    }

    public function unlink_article(Candidate $candidate, NewsArticle $article)
    {
        $candidate->relatedArticles()->detach($article->id);

        return Redirect::back()->with(
            "success",
            "Unlinked article from candidate!"
        );
    }
}
