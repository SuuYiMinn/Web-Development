<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Drug extends Model
{
    use HasFactory;
    public function getAll(){
        return DB::table("drugs")->where("del_flg","=",0)->orderBy("id","desc")->paginate(10);
    }
    public function getFourDrug(){
        return DB::table("drugs")->where("del_flg","=",0)->orderBy("id","desc")->limit(4)->get();
    }
    public function addDrug($request){
        DB::table("drugs")
        ->insert([
            "d_name" => $request->dName,
            "d_weight" => $request->dWeight,
            "d_quantity" => $request->dQuantity,
            "d_price" => $request->dPrice
        ]);
    }
    public function getDrugByid($id){
        return DB::table("drugs")->where("id","=",$id)->first();
            
      }
      public function updateDrug($request,$id){
        return DB::table("drugs")
        ->where("id","=",$id)
        ->update([
            "d_name" => $request->dName,
            "d_weight" => $request->dWeight,
            "d_quantity" => $request->dQuantity,
            "d_price" => $request->dPrice
        ]);
       
            
      }
      public function deleteDrug($id){
        return DB::table("drugs")
        ->where("id","=",$id)
        ->update([
            "del_flg" => 1,
            
        ]);
       
      }
}
