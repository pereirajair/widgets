<?php

use Illuminate\Database\Seeder;

class RoutesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('routes')->insert(['url' => '/api/Home/UserWidgets', 'class_method' => 'HomeController@userWidgets']);
        DB::table('routes')->insert(['url' => '/api/Home/UserData', 'class_method' => 'HomeController@userData']);
        DB::table('routes')->insert(['url' => '/api/Home/Settings', 'class_method' => 'HomeController@settings']);
        DB::table('routes')->insert(['url' => '/api/Home/VisualPreference', 'class_method' => 'HomeController@visualPreference']);
        DB::table('routes')->insert(['url' => '/api/Home/Help', 'class_method' => 'HomeController@help']);
        DB::table('routes')->insert(['url' => '/api/Home/News', 'class_method' => 'HomeController@versionNews']);
        DB::table('routes')->insert(['url' => '/api/Home/SettingsPageEditor', 'class_method' => 'HomeController@settingsPages']);
        DB::table('routes')->insert(['url' => '/api/Home/SaveSettings', 'class_method' => 'HomeController@saveSettings']);
        DB::table('routes')->insert(['url' => '/api/Home/UserWidgets', 'class_method' => 'HomeController@userWidgets']);
        DB::table('routes')->insert(['url' => '/api/Home/UserAccount', 'class_method' => 'HomeController@userAccount']);
        DB::table('routes')->insert(['url' => '/api/Home/MobileMenu', 'class_method' => 'HomeController@mobileMenu']);

        DB::table('routes')->insert(['url' => '/api/Home/Login', 'class_method' => 'Admin\Login@load']);
        

        DB::table('routes')->insert(['url' => '/api/Admin/Widgets', 'class_method' => 'Admin\Widgets@load', 'groups_acl' => 'widgets-adm']);
        DB::table('routes')->insert(['url' => '/api/Admin/WidgetPages', 'class_method' => 'Admin\WidgetPages@load', 'groups_acl' => 'widgets-adm']);
        DB::table('routes')->insert(['url' => '/api/Admin/Config', 'class_method' => 'Admin\Config@load', 'groups_acl' => 'widgets-adm']);
        DB::table('routes')->insert(['url' => '/api/Admin/Routes', 'class_method' => 'Admin\Routes@load', 'groups_acl' => 'widgets-adm']);
        DB::table('routes')->insert(['url' => '/api/Admin/AccessLog', 'class_method' => 'Admin\AccessLog@load', 'groups_acl' => 'widgets-adm']);
        // DB::table('routes')->insert(['url' => '/api/rest/Admin/Roles', 'class_method' => 'AdminRolesController@load', 'groups_acl' => 'widgets-adm']);
        
        

    }
}
