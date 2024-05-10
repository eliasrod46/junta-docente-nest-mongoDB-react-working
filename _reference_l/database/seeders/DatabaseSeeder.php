<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Seeders\Blog\CategorySeeder;
use Database\Seeders\Blog\PostSeeder;
use Database\Seeders\Blog\TagSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void{

        Storage::deleteDirectory('Blog/posts');
        Storage::makeDirectory('Blog/posts');
        $this->call([
            UserSeeder::class,
            PermissionsSeeder::class,
            //Blog
            CategorySeeder::class,
            TagSeeder::class,
            PostSeeder::class,
        ]);
}
}
