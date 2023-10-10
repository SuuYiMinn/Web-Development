<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class fourdigitRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

       
            // Use a regular expression to check if the input contains exactly four digits
            // if( !preg_match('/^\d{4}$/', $value)){
                
            // }
            
           preg_match_all('/\d/', $value, $matches);
            // Check if there are at least four digits
            if(count($matches[0]) != 4){
                
                $fail("The  must contain at least four digits.");
            }
    
       
    }
}
