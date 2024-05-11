<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog\Tag;
use Illuminate\Http\Request;

class TagController extends Controller{

    public $colors =  [
        null => 'Selecciona un color',
        'orange' => 'Naranja',
        'yellow' => 'Amarillo',
        'sky' => 'Cielo',
        'red' => 'Rojo',
        'violet' => 'Violeta',
        'green' => 'Verde',
        'slate' => 'Plata',
        'pink' => 'Rosa',
    ];

    // Display a listing of the tags.
    public function index(){
        $tags = Tag::all();
        return view('admin.tags.index', compact('tags'));
    }

    // Show the form for creating a new tag.
    public function create(){
        return view('admin.tags.create',['colors'=>$this->colors]);
    }

    // Store a newly created tag in storage.
    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'color' => 'required',
            'slug' => 'required|unique:tags'
        ]);

        $tag = Tag::create($request->all());
        return redirect()->route('admin.tags.edit',$tag)->with('info', 'Etiqueta agregada con exito');
   
    }

    // Display the specified tag.
    public function show(Tag $tag){
        return view('admin.tags.show', compact('tag'));
    }

    // Show the form for editing the specified tag.
    public function edit(Tag $tag){

        
        return view('admin.tags.edit', ['colors'=>$this->colors,'tag'=>$tag]);
    }

    // Update the specified tag in storage.
    public function update(Request $request, Tag $tag){
        $request->validate([
            'name' => 'required',
            'color' => 'required',
            //--TODO: don't ignore the same slug when update   
            'slug' => "required|unique:tags,slug,$tag->id"
        ]);

        $tag->update($request->all());

        return redirect()->route('admin.tags.edit',$tag)->with('info', 'Etiqueta actualizada con exito');
    }

    // Remove the specified tag from storage.
    public function destroy(Tag $tag){
        $tag->delete();
        return redirect()->route('admin.tags.index')->with('info', 'Etiqueta eliminada con exito');
    }
}
