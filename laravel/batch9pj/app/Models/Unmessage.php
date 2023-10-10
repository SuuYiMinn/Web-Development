<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Unmessage extends Model
{
    use HasFactory;
    public function getAll(){
        return DB::table("unmessages")
        ->where("del_flg","=",0)
        ->orderBy("id","desc")
        ->paginate(10);
    }
    public function getFourMesg(){
        return DB::table("unmessages")
        ->where("del_flg","=",0)
        ->orderBy("id","desc")
        ->limit(4)->get();
    }
    public function addUnmessage($request){
        if ($request->unmVip == "") {
           $vip = 0;
        }else{
            $vip =1;
        }
        DB::table("unmessages")->insert([
            "unm_desc" => $request->unmDesc,
            "unm_time" => $request->unmTime,
            "unm_vip" => $vip
            
        ]);
    }
    public function getUnmessageByid($id){
        return $result = DB::table("unmessages")->where("id","=",$id)->first();
       
    }
    public function updateUnmessage($request,$id){
        if ($request->unmVip == "") {
            $vip = 0;
         }else{
             $vip =1;
         }
        return DB::table("unmessages")->where("id","=",$id)
        ->update([
            "unm_desc" => $request->unmDesc,
            "unm_time" => $request->unmTime,
            "unm_vip" => $vip
        ]);
    }
    public function deleteUnmessage($id){

        DB::table("unmessages")->where("id","=",$id)->update(["del_flg" => 1]);
    }
}
