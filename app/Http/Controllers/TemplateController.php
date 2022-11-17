<?php

namespace App\Http\Controllers;

use Spatie\RouteAttributes\Attributes\Get;
use Spatie\RouteAttributes\Attributes\Post;

class TemplateController
{
    #[Get('/templates', name: 'templates.index')]
    public function index()
    {
        return inertia()->render('Templates/Index');
    }

    #[Get('/new', name: 'templates.new', middleware: ['auth'])]
    public function create()
    {
        return inertia('Templates/New');
    }

    #[Post('/new', name: 'templates.store', middleware: ['auth'])]
    public function store()
    {
        dd('storing a template...');
    }

    #[Get('/templates/{id}', name: 'templates.show')]
    public function show($id)
    {
        return inertia('Templates/Show', [
            'template' => $id
        ]);
    }
}