<?php

use App\Http\Controllers\Blog\PostController;
use Illuminate\Support\Facades\Route;


//---Blog
Route::get('/posts',[PostController::class,'index'])->name('posts.index');
Route::get('/posts/{post}',[PostController::class,'show'])->name('posts.show');
Route::get('/category/{category}',[PostController::class,'category'])->name('posts.category');
Route::get('/tag/{tag}',[PostController::class,'tag'])->name('posts.tag');

Route::get('/', function () {
    return view('welcome');
});





Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');


require __DIR__.'/auth.php';
