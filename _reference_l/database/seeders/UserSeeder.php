<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'admin',
                'lastname' => 'admin',
                'username' => 'admin',
                'email' => 'admin@admin.com',
                'password' => Hash::make('12345678'),
                'image' => 'https://loremflickr.com/360/360',
            ],
            [
                'name' => 'Elias',
                'lastname' => 'Rodriguez',
                'username' => 'eliasrod46',
                'email' => 'eliasrod46@gmail.com',
                'password' => Hash::make('12345678'),
                'image' => 'https://loremflickr.com/360/360',
            ],
            [
                'name' => 'Usuario',
                'lastname' => 'Tercero',
                'username' => 'el_tercero46',
                'email' => 'el_tercero46@gmail.com',
                'password' => Hash::make('12345678'),
                'image' => 'https://loremflickr.com/360/360',
            ],
        
        ];

        DB::table('users')->insert($users);
    }
}
