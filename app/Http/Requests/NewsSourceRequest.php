<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsSourceRequest extends FormRequest
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
            "home_url" => "required",
            "color" => "required",
        ];
    }

    public function messages()
    {
        return [
            "name.*" => "Please enter a name.",
            "home_url.*" => "Please enter a valid url.",
            "color.*" => "There is something wrong with the color.",
        ];
    }
}
