<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    // protected $guarded = [];
    protected $fillable = ['name','slug','color'];

    public function getRouteKeyName(){
        return "slug";
    }

    //-- Relacion N a M
    public function posts(){
        return $this->belongsToMany(Post::class);
    }

}
