<?php

namespace Database\Factories\Blog;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog\BlogImage>
 */
class BlogImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url' => 'app/Blog/posts/'.$this->faker->image('public/storage/app/Blog/posts',640,480,null,false)  
        ];
    }
}
