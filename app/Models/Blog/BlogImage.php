<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogImage extends Model
{
    use HasFactory;
    // protected $guarded = [];
    protected $fillable = ['url'];

    //relacion polimorfica
    public function imageable(){
        return $this->morphTo();
    }

}
