<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class appointment extends Model
{
    use HasFactory;
    public function getAll(){
        return DB::table("appointments")->orderBy("id","desc")->where("del_flg","=",0)->paginate(10);
        
    }
    public function getFourAppointment(){
        return DB::table("appointments")->where("del_flg","=",0)->orderBy("id","desc")->limit(4)->get();
    }
    public function addappointment($request){
        DB::table("appointments")
            ->insert([
                "a_name"=>$request->aName,
                "a_room"=>$request->aRoom,
                "a_date"=>$request->aDate,
                "a_time"=>$request->aTime
            
    ]);
    }
    public function getappByid($id){
        return DB::table("appointments")->where("id","=",$id)->first();
    }
    public function updateappointment($request,$id){
        return DB::table("appointments")
        ->where("id","=",$id)
        ->update([
            "a_name" => $request->aName,
            "a_room" => $request->aRoom,
            "a_date" => $request->aDate,
            "a_time" => $request->aTime
        ]);
       
            
      }
      public function deleteappointment($id){
        return DB::table("appointments")
        ->where("id","=",$id)
        ->update([
            "del_flg" => 1,
            
        ]);
       
      }
}
