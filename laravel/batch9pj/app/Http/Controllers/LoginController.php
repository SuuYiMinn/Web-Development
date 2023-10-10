<?php

namespace App\Http\Controllers;

use App\Http\Requests\signupRequest;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login()
    {
        return view("login");
    }
    public function signup(){
        return view("signup");
    }
    public function loginCheck(Request $request){
        
        $user = new User();
        $userdata = $user->checkUser($request);
        if($userdata == null) return redirect("/login");
        
        if (Hash::check($request->password, $userdata->password)){
            $request->session()->put("email",$request->email);
            return redirect("/dashboard");
        }
        $request->session()->flush();
        return redirect("/login");
        
    }

    public function createUser(signupRequest $request){
        $user = new User();
        $user->addUser($request);
        return redirect("/dashboard");
    }

    
}
