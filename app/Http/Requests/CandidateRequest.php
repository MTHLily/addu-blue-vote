<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CandidateRequest extends FormRequest
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
            "profile_photo.file" => "image",
            "name" => "required",
            "slug" => "required",
            "running_position_id" => "required|exists:running_position,id",
            "running_location_id" => "nullable|exists:location",
            "description" => "nullable",
        ];
    }
}
