<?php

namespace App\Http\Controllers;

use Spatie\RouteAttributes\Attributes\Get;

class TemplatesController
{
    #[Get('/templates', name: 'templates.index')]
    public function index()
    {
        return inertia()->render('Templates/Index');
    }
}
