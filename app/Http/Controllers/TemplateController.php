<?php

namespace App\Http\Controllers;

use Spatie\RouteAttributes\Attributes\Get;
use Spatie\RouteAttributes\Attributes\Post;

class TemplateController
{
    #[Get('/templates', name: 'templates.index')]
    public function index()
    {
        return inertia()->render('templates/routes/index');
    }

    #[Get('/new', name: 'templates.new', middleware: ['auth'])]
    public function create()
    {
        return inertia('templates/routes/new');
    }

    #[Post('/new', name: 'templates.store', middleware: ['auth'])]
    public function store()
    {
        dd('storing a template...');
    }

    #[Get('/templates/{id}', name: 'templates.show')]
    public function show($id)
    {
        return inertia('templates/routes/show', [
            'template' => $id
        ]);
    }
}