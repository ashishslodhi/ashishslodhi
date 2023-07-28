<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\{
    User,
    Contact
};
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'test',
            'email' => 'test@email.com',
            'password' => bcrypt('password'),
        ]);

        Contact::create([
            'user_id' => 1,
            'address' => 'address test',
            'phone_no' => '987873833',
        ]);
    }
}
