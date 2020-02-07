<?php

use Illuminate\Database\Seeder;

class TSAdmin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $route_id = DB::table('routes')->insertGetId(['url' => '/api/Admin', 'class_method' => 'Admin\Widgets@getMenu', 'groups_acl' => 'widgets-adm']);
        DB::table('widgets')->insert(['name' => 'Administrar Widgets', 'description' => 'Administração da Plataforma de widgets', 'icon' => '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', 'width' => 3, 'height' => 7,'route_id' => $route_id, 'is_new' => false, 'enabled' => true, 'groups_acl' => 'widgets-adm']);
    }
}