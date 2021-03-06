<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FrequentlyAnsweredQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'question' => 'required',
            'answer' => 'required',
        ];
    }
    
    public function messages()
    {
        return [
            "question.*" => "Please enter a question.",
            "answer.*" => "Please enter an answer.",
        ];
    }
}
