<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PoliticalPartyRequest extends FormRequest
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
            "abbreviation" => "required",
            "representation" => "nullable",

        ];
    }
    public function messages()
    {
        return [
            "name.*" => "Please enter a name.",
            "abbreviation.*" => "Please enter an abbreviation.",
            "representation.*" => "Please enter a representation.",
        ];
    }
}
