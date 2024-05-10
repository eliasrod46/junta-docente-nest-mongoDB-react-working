<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;




//---Admin
Route::get('/admin', function () {
    return view('admin.home');
})->middleware('can:admin.home')->name('admin.home');



Route::resource('admin/users', UserController::class)->only(['index','edit','update'])->names('admin.users');
Route::resource('admin/categories', CategoryController::class)->except('show')->names('admin.categories');
Route::resource('admin/tags', TagController::class)->names('admin.tags');
Route::resource('admin/posts', PostController::class)->names('admin.posts');
Route::resource('admin/roles', RoleController::class)->names('admin.roles');



require __DIR__.'/auth.php';
