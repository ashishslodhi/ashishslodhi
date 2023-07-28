<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'user_id'];

    public function user() {
        // one post belongs to one user
        return $this->belongsTo(User::class);
    }

    public function categories() {
        // one post belongs to one user
        return $this->belongsToMany(Category::class);
    }
}
