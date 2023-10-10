<?php

namespace App\Http\Controllers;

use App\Models\Drug;
use Illuminate\Http\Request;

class DrugController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $drugClass = new Drug();
        $drugs = $drugClass->getAll();
        return view("drug.drug",[
            "drugs" => $drugs
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("drug.drugcreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $drugClass = new Drug();
        $drugClass->addDrug($request);
        return redirect("/drug");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $drugClass = new Drug();
        $drug = $drugClass->getDrugByid($id);
        if($drug == null){
            return abort(404);
        }
        return view("drug.drugshow",
    [
        "drug" => $drug
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $drugClass = new Drug();
        $drug = $drugClass->getDrugByid($id);
        if($drug == null){
            return abort(404);
        }
        return view("drug.drugedit",
    [
        "drug" => $drug
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $drugClass = new Drug();
        $drugClass->updateDrug($request,$id);
        return redirect("/drug");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $drugClass = new Drug();
       $drug = $drugClass->getDrugByid($id);
       if($drug !=null){
        $drugClass->deleteDrug($id);
       }
        return redirect("/drug");
    }
}
