<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call('UsersTableSeeder');
        \App\Models\User::factory()->create(['email' => 'testadmin@gmail.com']);
        \App\Models\User::factory()->count(50)->create();
    }
}
