<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class pwnotnameRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    protected $username;
    public function __construct($username)
    {
        $this->username = $username;
    }
    // public function passes($attribute,$value){
        
    // }
    
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $username = request()->input("name");
        strpos($value, $username) === false;
        // $fail("The password must not contain the username.");
        // $username = request()->input('name');
        
        // dd(strpos($value, $username));
        // if(!strpos($value, $username) === false){
        //     $fail("cannot contain the username.");
        // }
    

  
    }
    public function message(){
        return "The password must not contain the username.";
    }
}
