<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class specialcharRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        
            // Use a regular expression to check if the password contains at least one special character
           if( !preg_match('/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-=|]/', $value)){
            $fail("The :attribute must contain at least one special character.");
           }
      
       
    }
}
