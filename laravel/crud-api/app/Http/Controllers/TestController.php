<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;


class TestController extends Controller
{
    public function index() {
        // get one User having a contact
        // $user = User::with('contact')->first();
        // return $user;

        // get one Contact having a user
        // $contact = Contact::with('user')->first();
        // return $contact;

        // User with details of its contact and posts
        // $user = User::with(['contact', 'post'])->find(1);
        // return $user;

        // Post with their user
        // $post = Post::with('user')->first();
        // return $post;

        // all Categories
        $categories = Category::all();

        // first post with categories
        $posts = Post::with('categories')->first();
        // attach, sync or detach categories to posts
        $posts->categories()->attach([1,2]);
        $posts = Post::with('categories')->first();

        return $posts;

    }
}
