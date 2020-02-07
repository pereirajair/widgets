<?php

use Illuminate\Database\Seeder;

class TSFeriasAgendadas extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $route_id = DB::table('routes')->insertGetId(['url' => '/api/widgets/FeriasAgendadas', 'class_method' => 'Widgets\FeriasAgendadas@load']);

        $widget_id = DB::table('widgets')->insertGetId(['name' => 'Ferias Agendadas', 'description' => 'Acompanhe a previsão de férias dos colaboradores do seu setor.', 'icon' => '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', 'width' => 2, 'height' => 5,'route_id' => $route_id, 'is_new' => false, 'enabled' => true]);
        DB::table('config')->insert(['name' => 'FERIAS_CELEPAR_USERNAME', 'value' => 'cdpm', 'widget_id' => $widget_id]);
        DB::table('config')->insert(['name' => 'FERIAS_CELEPAR_PASSWORD', 'value' => 'RqKA6j', 'widget_id' => $widget_id]);
        
    }

}