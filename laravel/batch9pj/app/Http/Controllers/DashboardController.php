<?php

namespace App\Http\Controllers;

use App\Models\appointment;
use App\Models\Dashboard;
use App\Models\Drug;
use App\Models\Room;
use App\Models\Unmessage;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getData()
    {
        $roomClass = new Room();
        $rooms = $roomClass->getFourRoom();
        $unreadmesClass = new Unmessage();
        $unreadmesgs = $unreadmesClass->getFourMesg();
        $drugClass = new Drug();
        $drugs = $drugClass->getFourDrug();
        $appointmentClass = new appointment();
        $appointments = $appointmentClass->getFourAppointment();
       
        return view("dashboard", [
            "rooms" => $rooms,
            "unmesgs" => $unreadmesgs,
            "drugs" => $drugs,
            "appointments" => $appointments
        ]);
       
    }
    
}
