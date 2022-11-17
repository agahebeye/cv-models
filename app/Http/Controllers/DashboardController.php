<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\RouteAttributes\Attributes\Get;

class DashboardController
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    #[Get('/dashboard', name: 'dashboard', middleware: ['auth', 'verified'])]
    public function __invoke(Request $request)
    {
        return inertia()->render('Dashboard');
    }
}
