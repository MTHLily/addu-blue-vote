<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SVG\SVG;

class SVGController extends Controller
{
    public function create(Request $request ){
        
        if( $request->color != null)
            $color = "#".$request->color;
        else
            $color = "#000";
        // image with 100x100 viewport
        $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="' . $color .'" class="bi bi-geo-alt-fill" viewBox="0 0 16 16" outline="#000">';
        $svg .= '<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>';
        $svg .='</svg>';

        $image=SVG::fromString($svg);

        return response($image)->header('Content-Type', 'image/svg+xml');
    }
}
