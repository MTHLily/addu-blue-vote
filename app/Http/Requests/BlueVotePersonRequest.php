<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlueVotePersonRequest extends FormRequest
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
            "name" => ["string", "required"],
            "position" => ["string", "required"],
            "volunteer" => ["boolean", "required"],
            "profile_photo.file" => ["image", "sometimes"],
            "profile_photo.id" => ["sometimes"],
        ];
    }

    public function messages()
    {
        return [
            "name.*" => "A name is required.",
            "position.*" => "A position is required.",
            "volunteer.*" => "Indicate if this person is a volunteer.",
            "profile_photo.file.image" => "Profile photo must be an image.",
        ];
    }
}
