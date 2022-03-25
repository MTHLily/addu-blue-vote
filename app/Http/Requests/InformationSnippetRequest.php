<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InformationSnippetRequest extends FormRequest
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
            "content" => "required",
            "link" => "nullable|string",
            "cover.file" => "image|nullable",
        ];
    }

    public function messages()
    {
        return [
            "title.*" => "There is something wrong with the title.",
            "content.*" => "Please enter a valid content.",
            "link.*" => "There is something wrong with the link.",
            "cover.*" => "There is something wrong with the cover.",

        ];
    }
}
