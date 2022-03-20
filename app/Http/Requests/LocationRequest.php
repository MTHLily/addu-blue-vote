<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LocationRequest extends FormRequest
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
            "slug" => "required",
            "description" => "nullable",
            "color" => "required",
            "longitude" => "required",
            "latitude" => "required",
            "parent_location_id" => "nullable|exists:locations,id",
            "location_type_id" => "required|exists:location_types,id",
            "media.id" => "",
            "media.file" => "image",
        ];
    }

    public function messages()
    {
        return [
            "name.*" => "There is something wrong with the name.",
            "slug.*" => "Please enter a valid slug.",
            "description.*" => "There is something wrong with the description.",
            "color.*" => "There is something wrong with the color.",
            "longitude.*" => "Please enter a longitude value.",
            "latitude.*" => "Please enter a latitude value.",
            "parent_location_id.*" => "There is something wrong with the location Id.",
            "location_type_id.*" => "There is something wrong with the Location type.",
            "media.*" => "There is something wrong with the media.",
        ];
    }

}
