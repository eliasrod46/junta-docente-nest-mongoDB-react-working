<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $guarded = [];
    //--asignacion masiva
    // protected $fillable = ['name','slug',];

    public function getRouteKeyName(){
        return "slug";
    }

    //-- Relacion 1 a N
    public function posts(){
        return $this->hasMany(Post::class);
    }
}
