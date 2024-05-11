<?php

namespace Database\Seeders\Blog;

use App\Models\Blog\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Category::factory(3)->create();
        $categories = [
            [
                'name' => 'Categoria 1',
                'slug' => 'categoria-1',
            ],
            [
                'name' => 'Categoria 2',
                'slug' => 'categoria-2',
            ]
        ];

        for ($i=0; $i < 2; $i++) { 
            Category::create([
                'name' => $categories[$i]['name'],
                'slug' => $categories[$i]['slug'],  
            ]);

        }

    }
}
