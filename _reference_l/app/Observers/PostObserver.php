<?php

namespace App\Observers;

use App\Models\Blog\Post;
use Illuminate\Support\Facades\Storage;

class PostObserver
{
    /**
     * Handle the Post "created" event.
     */
    public function creating(Post $post): void
    {
        if(! \App::runningInConsole()){

            $post->user_id = auth()->user()->id;
        }
    }


    /**
     * Handle the Post "deleted" event.
     */
    public function deleting(Post $post): void
    {
        if($post->image){
            $toDelete = explode("/", $post->image->url);
            array_shift($toDelete);
            $toDelete = implode("/", $toDelete);
            Storage::delete($toDelete);
        }
    }

}
