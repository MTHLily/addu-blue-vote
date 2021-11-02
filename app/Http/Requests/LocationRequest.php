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
}
