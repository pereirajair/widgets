<?php

namespace App\Exceptions;

use App\Utils\EWListView;
use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {

        if (isset($_POST['route'])) {
            $view = new EWListView("Erro",true);
            $view->addRefreshButton();
            $view->setBackgroundColor("red");
            $obj = parent::render($request, $exception);
            $view->addHeaderItem($exception->getMessage());
            $view->addHTML("<pre><div style='font-size: 10px;'>" . $exception->getTraceAsString() . "</div></pre>");
            // $view->printArray($exception);
            // $view->addHTML($exception->getFile() . $exception->getLine());
            $view->addHTML($obj->getContent());
            return response()->json($view); 
        } else {
            return parent::render($request, $exception);
        }

        
        
    }
}
