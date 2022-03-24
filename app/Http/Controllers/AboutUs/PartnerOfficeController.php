<?php

namespace App\Http\Controllers\AboutUs;

use App\Http\Controllers\Controller;
use App\Http\Requests\PartnerOfficeRequest;
use App\Services\PartnerOfficeService;
use App\Models\PartnerOffice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PartnerOfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("Backend/PartnerOffices/Index", [
            "partner_offices" => PartnerOffice::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Backend/PartnerOffices/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store( PartnerOfficeRequest $request,
   )
    {
        $partnerOffice = (new PartnerOfficeService())->updateOrCreate($request);

        return Redirect::route("partner-offices.index")->with(
            "success",
            $partnerOffice->name . " has been created!"
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(PartnerOffice $partnerOffice)
    {
        return Inertia::render("Backend/PartnerOffices/Index", [
            "partnerOffice" => $partnerOffice,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(PartnerOffice $partnerOffice)
    {
        $partnerOffice->load([
            "media",
          
        ]);

        $partnerOffice->append("mediaUrls");
        return Inertia::render("Backend/PartnerOffices/Edit", [
            "partnerOffice" => $partnerOffice,
        ]);
    }

    // public function show(PartnerOffice $partnerOffice)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        PartnerOfficeRequest $request,
        PartnerOffice $partnerOffice
       )
        {
            $partnerOffice = (new PartnerOfficeService())->updateOrCreate(
                $request,
                $partnerOffice
            );
    
            return Redirect::route("partner-offices.index")->with(
                "success",
                $partnerOffice->name . " has been updated!"
            );
        }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PartnerOffice $partnerOffice)
    {
        $partnerOffice->delete();

        return Redirect::back()->with(
            "message",
            $partnerOffice->name . " has been deleted!"
        );
    }
}
