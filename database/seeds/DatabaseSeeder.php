<?php

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
        // $this->call(UsersTableSeeder::class);
        $this->call([
            ConfigTableSeeder::class,
            RoutesTableSeeder::class,
            TSAdmin::class,
            TSDemonstracao::class,
            TSMeusWidgets::class,
            TSAsteriscoParana::class,
            TSFeriasAgendadas::class,
            TSNoticias::class,
            TSOrganograma::class,
            TSPontoCelepar::class,
            TSPrevisaoTempo::class
        ]);
    }
}
