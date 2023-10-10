<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class passwordRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $firstChar = substr($value,0,1);
        if(!ctype_upper($firstChar)){
            $fail("First Character Must be Upper Case!");
        }

        // $specialText = ["#","$","&"];
        // $arrayChar = explode("",$value);
        // for ($i=0; $i < count($arrayChar); $i++) { 
        //     for ($j=0; $j < count($specialText) ; $j++) { 
        //         if(!str_contains($arrayChar[$i],$specialText[$j])){
        //             $fail("Need At Least 1 Special Character!");
        //         }
        //     }
            
        // }

        $lastChar = substr($value,-1);
        if(is_numeric($lastChar)){
            $fail("Last Character Must Not be Number");
        }

        
    }
}
