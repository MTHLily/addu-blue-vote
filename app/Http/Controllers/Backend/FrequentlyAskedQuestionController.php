<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\FrequentlyAnsweredQuestionRequest;
use App\Models\FrequentlyAskedQuestion;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class FrequentlyAskedQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Backend/FAQs/Index", [
            "faqs" => FrequentlyAskedQuestion::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Backend/FAQs/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FrequentlyAnsweredQuestionRequest $request)
    {
        FrequentlyAskedQuestion::create($request->validated());

        return Redirect::route("faqs.index")->with("success", "FAQ Added!");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(FrequentlyAskedQuestion $faq)
    {
        return Inertia::render("Backend/FAQs/Show", [
            "faq" => $faq,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(FrequentlyAskedQuestion $faq)
    {
        return Inertia::render("Backend/FAQs/Edit", [
            "faq" => $faq,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(
        FrequentlyAnsweredQuestionRequest $request,
        FrequentlyAskedQuestion $faq
    ) {
        $faq->update($request->validated());

        return Redirect::route("faqs.index")->with("success", "FAQ updated!");
        // return redirect()->route('faqs.index')->with('success', 'FAQ updated!');

        // return Inertia::render( 'Backend/FAQs/Index', [
        //     'faqs' => FrequentlyAskedQuestion::all()
        // ])->with('success', 'FAQ updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FrequentlyAskedQuestion  $frequentlyAskedQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(FrequentlyAskedQuestion $faq)
    {
        $faq->delete();

        return Redirect::back()->with("message", "FAQ deleted!");
    }
}
