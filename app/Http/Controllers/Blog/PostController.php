<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Models\Blog\Category;
use App\Models\Blog\Post;
use App\Models\Blog\Tag;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Display a listing of the resource.
    public function index(){        
        $posts = Post::where('status', '=', 2)->latest('id')->paginate(5);

        
        return view('blog.post.index', compact('posts'));
    }

    // Display the specified resource.
    public function show(Post $post){
        $this->authorize('published', $post);
        $relatedContent = Post::where('category_id',$post->category_id)
        ->where('status', 2)
        ->where('id','!=', $post->id)
        ->latest('id')
        ->take(5)
        ->get();

        return view('blog.post.show',compact('post','relatedContent'));
    }

    // Return all post of a specify category.
    public function category(Category $category){
        $posts = Post::where('category_id', $category->id)
        ->where('status', 2)
        ->latest('id')
        ->paginate(6);
        return view('blog.post.category',compact('posts', 'category')) ;
    }

    // Return all post of a specify tag.
    public function tag(Tag $tag){
        $posts = $tag->posts()->where('status', 2)->latest('id')->paginate(4) ;
        return view('blog.post.tag',compact('posts', 'tag')) ;
    }

}
