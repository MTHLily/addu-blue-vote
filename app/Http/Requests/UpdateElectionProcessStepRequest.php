<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateElectionProcessStepRequest extends FormRequest
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
            "title" => ["string", "required"],
            "description" => ["string", "required"],
            "primary_color" => ["string", "required"],
            "secondary_color" => ["string", "required"],
        ];
    }

    public function messages()
    {
        return [
            "title.*" => "There is something wrong with the title.",
            "description.*" => "Please enter a valid description.",
            "title.*" => "There is something wrong with the title.",
            "primary_color.*" => "There is something wrong with the primary color.",
            "secondary_color.*" => "There is something wrong with the secondary color.",
        ];
    }
}
