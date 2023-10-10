<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DrugController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UnmessageController;
use App\Models\Room;
use App\Models\Unmessage;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Route::get("/",function(){
//     $roomClass = new Room();
//     $rooms = $roomClass->getFourRoom();
    
//     $unmessageClass = new Unmessage();
//     $unmessages =$unmessageClass->getAll();
    
//     return view("dashboard",[
//         "rooms" => $rooms,
//         "unmessages" => $unmessages
//     ]);
// });

Route::get("/login",[LoginController::class,"login"]);
Route::post("/login",[LoginController::class,"loginCheck"]);
Route::get("/signUp",[LoginController::class,"signup"]);
Route::post("/signUp",[LoginController::class,"createUser"]);
Route::get("/test",function(){
    return strpos("I love php, I love php too!", "php");
    // return fake()->date($format = 'Y/m/d');
    // return fake()->time($format = 'H:i');

    // return fake()->amPm();
});
Route::middleware("logincheck")->group(function () {
    Route::get("/dashboard",[DashboardController::class,"getData"]);
    Route::resource("room",RoomController::class);
    Route::resource("unmessage",UnmessageController::class);
    Route::resource("drug",DrugController::class);
    Route::resource("appointment",AppointmentController::class);
});
