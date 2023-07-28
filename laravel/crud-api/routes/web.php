<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;

use App\Http\Controllers\PdfController;
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class, 'index']);

Route::get('generate-pdf', [PdfController::class, 'generatePDF']);

Route::get('/send-mail', function () {
    $maildata = [
        'name' => 'Ashish Lodhi'
    ];
    Mail::to('alodhi@xscad.com')->send(new TestEmail($maildata));

    dd('Mail sent successfully!');
});
