<?php

namespace App\Observers;

use App\Models\PointOfInterest;
use Illuminate\Support\Facades\Storage;

class PointOfInterestObserver
{
    /**
     * Handle the PointOfInterest "created" event.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return void
     */
    public function created(PointOfInterest $pointOfInterest)
    {
        //
    }

    /**
     * Handle the PointOfInterest "updated" event.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return void
     */
    public function updated(PointOfInterest $pointOfInterest)
    {
        if( $pointOfInterest->isDirty('image_url') ){
            Storage::delete( $pointOfInterest->getOriginal('image_url'));
        }
    }

    /**
     * Handle the PointOfInterest "deleted" event.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return void
     */
    public function deleted(PointOfInterest $pointOfInterest)
    {
        if( $pointOfInterest->image_url )
            Storage::delete($pointOfInterest->image_url);
    }

    /**
     * Handle the PointOfInterest "restored" event.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return void
     */
    public function restored(PointOfInterest $pointOfInterest)
    {
        //
    }

    /**
     * Handle the PointOfInterest "force deleted" event.
     *
     * @param  \App\Models\PointOfInterest  $pointOfInterest
     * @return void
     */
    public function forceDeleted(PointOfInterest $pointOfInterest)
    {
        //
    }
}
