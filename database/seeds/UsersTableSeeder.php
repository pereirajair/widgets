<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('users')->insert([
        //     'id' => 83173,
        //     'name' => 'Jair Goncalves Pereira Junior',
        //     'email' => 'pereira.jair@gmail.com',
        //     'password' => bcrypt('password'),
        // ]);

        // for ($i = 1; $i <= 10; $i++) {
        //     DB::table('users')->insert([
        //         'name' => Str::random(10),
        //         'email' => Str::random(10).'@gmail.com',
        //         'password' => bcrypt('password'),
        //     ]);
        // }
       
    }
}
