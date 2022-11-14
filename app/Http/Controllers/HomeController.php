<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\RouteAttributes\Attributes\Get;

class HomeController
{
    #[Get('/', name: 'home')]
    public function __invoke(Request $request)
    {
        return inertia()->render('Home');
    }
}
