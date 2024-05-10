<?php

namespace App\Models\Blog;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $guarded = ['id','created_at', 'updated_at'];

    //-- Relacion 1 a N Inversa (N a 1)
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }

    //-- Relacion N a M
    public function tags(){
        return $this->belongsToMany(Tag::class);
    }

    //-- Relacion 1 a 1 Polimoprfica
    public function image(){
        return $this->morphOne(BlogImage::class, 'imageable');
    }
}
