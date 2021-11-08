<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class MatchesLocationType implements Rule
{
    private $location_id = null;
    private $position_id = null;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(int $location_id, int $position_id)
    {
        $this->location_id = $location_id;
        $this->position_id = $position_id;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "The validation error message.";
    }
}
