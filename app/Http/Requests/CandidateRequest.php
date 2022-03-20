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
            "name" => "required|string",
            "slug" => [
                "required",
                "string",
                /** TODO: FIX THIS */
                // "unique:candidates,slug," . $this->candidate?->id,
            ],
            "political_party_id" => "required|exists:political_parties,id",
            "running_position_id" => "required|exists:running_positions,id",
            "location_id" => "nullable|exists:locations,id",
            "twitter_timeline_feed_url" => "nullable|string",
            "stances" => "array",
            "stances.*.issue_id" => "required|exists:issues,id",
            "stances.*.positive" => "required|boolean",
            "background" => "array",
            "background.*.candidate_background_type_id" =>
                "required|exists:candidate_background_types,id",
            "background.*.id" => "sometimes|exists:candidate_backgrounds",
            "background.*.place" => "required|string",
            "background.*.occupation" => "required|string",
            "background.*.position" => "required|string",
            "background.*.description" => "required|string",
            "background.*.end_date" => "required",
            "background.*.start_date" => "required",
            "platforms.*.id" => "sometimes",
            "platforms.*.title" => "required",
            "platforms.*.description" => "nullable",
            "media.file" => "image",
            "media.id" => "sometimes",
            "keywords" => "nullable",
            "related_articles" => ["array", "nullable"],
            "related_videos" => ["array", "nullable"],
        ];
    }

    public function messages()
    {
        return [
            "background.*" => "Please enter a valid background entry.",
        ];
    }
}
