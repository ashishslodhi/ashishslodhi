<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()

    {
        \App\Models\User::factory(10)->create();
        $this->call(UserSeeder::class);
        \App\Models\Post::factory(100)->create();
        \App\Models\Category::factory(10)->create();


    }
}
