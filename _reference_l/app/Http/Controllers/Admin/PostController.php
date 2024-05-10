<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use Illuminate\Http\Request;
use App\Models\Blog\Post;
use App\Models\Blog\Tag;
use Illuminate\Support\Facades\Storage;
use App\Models\Blog\Category;

class PostController extends Controller
{

    public function __construct(){
        $this->middleware('can:admin.posts.index')->only('index');
        $this->middleware('can:admin.posts.create')->only('create','store');
        $this->middleware('can:admin.posts.edit')->only('edit','update');
        $this->middleware('can:admin.posts.destroy')->only('destroy');
    }


    // Display a listing of the posts.
    public function index(){
        return view('admin.posts.index');
    }

    // Show the form for creating a new category.
    public function create(){
        $tags = Tag::all();
        $categories = Category::pluck('name', 'id');

        return view('admin.posts.create', compact('categories', 'tags'));
    }

    // Store a newly created category in storage.
    public function store(PostRequest $request){
    
        $post = Post::create($request->all());
        
        if ($request->file('file')) {
            $url = 'app/'.Storage::put('Blog/posts', $request->file('file'));


            $post->image()->create([
                'url' => $url
            ]);
        }


        if($request->tags){
            $post->tags()->attach($request->tags);
        }

        return redirect()->route('admin.posts.edit', $post)->with('info', 'post agregado con exito');

    }

    // Display the specified category.
    public function show(Post $post){
        return view('admin.posts.show', compact('post'));
    }

    // Show the form for editing the specified category.
    public function edit(Post $post){
        $this->authorize('author', $post);
        
        $tags = Tag::all();
        $categories = Category::pluck('name', 'id');
        
        return view('admin.posts.edit', compact('post','categories', 'tags'));
    }

    // Update the specified category in storage.
    public function update(PostRequest $request, Post $post){
        $this->authorize('author', $post);
        $post->update($request->all());

        if ($request->file('file')) {
            $url = 'app/'.Storage::put('Blog/posts', $request->file('file'));

            $toDelete = explode("/", $post->image->url);
            array_shift($toDelete);
            $toDelete = implode("/", $toDelete);
            
            if($post->image){     
                Storage::delete($toDelete);                
                $post->image->update([
                    'url' => $url
                ]);
            }else{
                $post->image()->create([
                    'url' => $url
                ]);
            }
        }

        if($request->tags){
            $post->tags()->sync($request->tags);
        }
        return redirect()->route('admin.posts.edit', $post)->with('info', 'post actualzado con exito');
    }

    // Remove the specified category from storage.
    public function destroy(Post $post){
        $this->authorize('author', $post);
        $post->delete();
        return redirect()->route('admin.posts.index')->with('info', 'Post eliminado con exito');

    }
}
