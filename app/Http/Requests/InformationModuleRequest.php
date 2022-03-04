<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InformationModuleRequest extends FormRequest
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
            "description" => "required",
            "media.file" => "image",
            "media.id" => "sometimes",
            "related_videos" => ["array", "nullable"],
            "speakers" => "required",
            "featured" => "boolean",
            "downloadables" => "nullable",
        ];
    }
}
