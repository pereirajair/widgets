<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class Light
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check()) {
            //Auth::getUser()
            view()->share('togglerInfo', Auth::getUser()->name);
        }
//        view()->share('menu', 'menu');
//        view()->share('shortcut', 'shortcut');

        return $next($request);
    }
}
