<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoResourceRequest extends FormRequest
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
            "title" => "required",
            "description" => "required",
            "information" => "nullable",
            "guests" => "nullable",
            "link" => "required",
        ];
    }

    public function messages()
    {
        return [
            "title.*" => "There is something wrong with the title.",
            "description.*" => "Please enter a valid description.",
            "information.*" => "There is something wrong with the information.",
            "guests.*" => "There is something wrong with the guests.",
            "link.*" => "Please enter a valid link.",
        ];
    }
}
