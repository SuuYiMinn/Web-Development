<?php

namespace App\Http\Controllers;

use App\Models\appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appointmentClass = new appointment();
        $appointments = $appointmentClass->getAll();
        return view("appointment.appointment",
        [
            "appointments" => $appointments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("appointment.appointmentcreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $appointmentClass = new appointment();
        $appointmentClass->addappointment($request);
        return redirect("/appointment");

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $appointmentClass = new appointment();
        $appointments = $appointmentClass->getappByid($id);
        if($appointments == null){
            return abort(404);
        }
        return view("appointment.appointmentshow",[
            "appointment"=>$appointments
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $appointmentClass = new appointment();
        $appointments = $appointmentClass->getappByid($id);
        if($appointments == null){
            return abort(404);
        }
        return view("appointment.appointmentedit",[
            "appointment"=>$appointments
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $appointmentClass = new appointment();
        $appointmentClass->updateappointment($request,$id);
        return redirect("/appointment");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $appointmentClass = new appointment();
       $appointment = $appointmentClass->getappByid($id);
       if($appointment !=null){
        $appointmentClass->deleteappointment($id);
       }
        return redirect("/appointment");
    }
}
