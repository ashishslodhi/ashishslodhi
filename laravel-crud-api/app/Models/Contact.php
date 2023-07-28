<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = ['address', 'phone_no', 'user_id'];

    public function user(){
        // A contact belongs to one user (One-One relations between Contact and User)
        return $this->belongsTo(User::class);
    }

    public function contactinformation(){
        // A contact belongs to one user (One-One relations between Contact and User)
        return $this->hasOne(User::class);
    }
}
