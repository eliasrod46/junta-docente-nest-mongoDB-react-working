<?php

namespace Database\Seeders\Blog;

use App\Models\Blog\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Tag::factory(10)->create();
        $tags = [
            [
                'name' => 'Tag 1',
                'slug' => 'tag-1',
                'color' => 'orange',
            ],
            [
                'name' => 'Tag 2',
                'slug' => 'tag-2',
                'color' => 'yellow',
            ],
            [
                'name' => 'Tag 3',
                'slug' => 'tag-3',
                'color' => 'sky',
            ],

        ];

        for ($i=0; $i < 3; $i++) { 
            Tag::create([
                'name' => $tags[$i]['name'],
                'slug' => $tags[$i]['slug'],  
                'color' => $tags[$i]['color'],  
            ]);

        }
    }
}
