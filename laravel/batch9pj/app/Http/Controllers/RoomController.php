<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roomClass = new Room();
        $rooms = $roomClass->getAll();
        return view("room.room", [
            "rooms" => $rooms
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('room.roomcreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $roomClass = new Room();
        $roomClass->addRoom($request);
        return redirect("/room");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $roomClass = new Room();
        $room = $roomClass->getRoomByid($id);
        if($room == null){
            return abort(404);
        }
        return view("room.roomshow",
    [
        "room" => $room
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $roomClass = new Room();
        $room = $roomClass->getRoomByid($id);
        if($room == null){
            return abort(404);
        }
        return view("room.roomedit",[
            "room" => $room
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $roomClass = new Room();
        $roomClass->updateRoom($request,$id);
        return redirect("/room");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $roomClass = new Room();
        //before delete
        $room = $roomClass->getRoomByid($id);
        if($room != null){
            $roomClass->deleteRoom($id);
        }
       
        return redirect("/room");
    }
}
