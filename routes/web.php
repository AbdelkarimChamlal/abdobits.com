<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::domain('{sub}.abdobits.com')->group(function () {
    Route::get('/', function ($sub) {
        return "<h1>Subdomain is {$sub}</h1>";
    });
});

Route::get('/', function () {
    return view('main');
});

Route::get('/resume', function(){
    
    $file= public_path(). "/download/resume.pdf";

    $headers = array(
        'Content-Type: application/pdf',
      );

    return Response::download($file, 'abdelkarim-resume.pdf', $headers);
});

Route::get('/test', function(){
    return view('test');
});