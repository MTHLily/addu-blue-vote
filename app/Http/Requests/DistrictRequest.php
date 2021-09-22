<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DistrictRequest extends FormRequest
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
        $rules = [
            'name' => 'required',
            'description' => 'required',
            "longitude" => 'required',
	        "latitude" => 'required',
        ];

        if( $this->district )
            $rules['color'] = [
                'required',
                Rule::unique('districts')->ignore($this->district->id)
            ];
        else
            $rules['color'] = 'required';

        return $rules;
    }
}
