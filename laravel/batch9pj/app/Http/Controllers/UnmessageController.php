<?php

namespace App\Http\Controllers;

use App\Models\Unmessage;
use Illuminate\Http\Request;

class UnmessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $unmessageClass = new Unmessage();
        $unmessages =$unmessageClass->getAll();

        return view("unmessage.unmessage",[
            "unmessages" => $unmessages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return view("unmessage.unmessagecreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $unmessageClass = new Unmessage();
        $unmessageClass->addUnmessage($request);
        return redirect("/unmessage");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $unmessageClass = new Unmessage();
       $unmessages = $unmessageClass->getUnmessageByid($id);
       if ($unmessages == null) {
       return abort(404);
       }
        return view("unmessage.unmessageshow",[
            "unmessages" => $unmessages
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $unmessageClass = new Unmessage();
        $unmessages = $unmessageClass->getUnmessageByid($id);
        if ($unmessages == null) {
        return abort(404);
        }
         return view("unmessage.unmessageedit",[
             "unmessages" => $unmessages
         ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $unmessageClass = new Unmessage();
        $unmessageClass->updateUnmessage($request,$id);
        return redirect('/unmessage');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $unmessageClass = new Unmessage();
        $unmessages = $unmessageClass->getUnmessageByid($id);
        if($unmessages != null){
            $unmessageClass->deleteUnmessage($id);
        }
        
        return redirect("/unmessage");
    }
}
