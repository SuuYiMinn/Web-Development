<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Room extends Model
{
    use HasFactory;
    /**
     *This function is used for get all room data.  */ 
    public function getAll(){
        return DB::table("rooms")->where("del_flg","=",0)->orderBy("id","desc")->paginate(10);
        
    }
    public function getFourRoom(){
        return DB::table("rooms")->where("del_flg","=",0)->orderBy("id","desc")->limit(4)->get();
    }
    /**
     * Add room data to database
     */
    public function addRoom($request){
        DB::table("rooms")
        ->insert([
            "r_status" => $request->rStatus,
            "r_person" => $request->rPerson,
            "r_price" => $request->rPrice
        ]);
    }

    public function getRoomByid($id){
      return DB::table("rooms")->where("id","=",$id)->first();
          
    }
    /**
     * This function is used for to update data
     */
    public function updateRoom($request,$id){
        return DB::table("rooms")
        ->where("id","=",$id)
        ->update([
            "r_status" => $request->rStatus,
            "r_person" => $request->rPerson,
            "r_price" => $request->rPrice
        ]);
       
            
      }
      /**
       * This function is used for to delete data
       */
      public function deleteRoom($id){
        DB::table("rooms")
        ->where("id","=",$id)
        ->update([
            "del_flg" => 1,

        ]);
      }
}
