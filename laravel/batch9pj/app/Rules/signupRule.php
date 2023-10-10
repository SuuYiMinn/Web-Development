<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class signupRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {   $specialText = ["#","$","&"];
        $firstChar = substr($value,0,1);
        $lastChar = substr($value,-1);
        if(!ctype_upper($firstChar)){
            $fail("First Character Must be Upper Case!");
        }
        if(!is_numeric($lastChar)){
            $fail("Last Character Must be Number");
        }
        $arrayChar = explode("",$value);
        for ($i=0; $i < count($arrayChar) ; $i++) { 
            for ($j=0; $j < count($specialText) ; $j++) { 
                if(!str_contains($arrayChar[$i],$specialText[$j])){
                    $fail("Need At Least 1 Special Character!");
                }
            }
            
        }

        
    }
}
