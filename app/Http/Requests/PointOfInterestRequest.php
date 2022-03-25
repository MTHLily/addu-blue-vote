<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PointOfInterestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name" => "required",
            "description" => "required",
            "longitude" => "required",
            "latitude" => "required",
            "location_id" => "required|exists:locations,id",
            "point_of_interest_type_id" => "required",
            "image" => ["nullable", "image"],
        ];
    }

    public function messages()
    {
        return [
            "name.*" => "Please enter a name.",
            "description.*" => "Please enter a description.",
            "point_of_interest_type_id.required" => "Please pick a type.",
            "district_id.required" => "Please pick a district.",
            "longitude.required" => "Please pick a location on the map.",
            "latitude.required" => "Please pick a location on the map.",
            "location_id.*" => "Please enter a valid location Id.",
            "image.*" => "Please enter a valid image.",
        ];
    }
}
