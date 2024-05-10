<?php

namespace Database\Seeders\Blog;

use App\Models\Blog\BlogImage;
use App\Models\Blog\Post;
use Database\Factories\Blog\BlogImageFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = Post::factory(10)->create();
        
    
        foreach ($posts as  $post) {
            BlogImage::factory(1)->create([
                'imageable_id' => $post->id,
                'imageable_type' => Post::class
            ]);

            $post->tags()->attach([
                rand(1,3),
            ]);
        }

     

    }
}
