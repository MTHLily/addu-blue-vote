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
            "district_id" => "required",
            "point_of_interest_type_id" => "required",
            "image" => ["nullable", "image"],
        ];
    }

    public function messages()
    {
        return [
            "point_of_interest_type_id.required" => "Please pick a type.",
            "district_id.required" => "Please pick a district.",
            "longitude.required" => "Please pick a location on the map.",
            "latitude.required" => "Please pick a location on the map.",
        ];
    }
}
