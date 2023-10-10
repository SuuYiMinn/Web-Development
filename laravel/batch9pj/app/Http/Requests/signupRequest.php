<?php

namespace App\Http\Requests;

use App\Rules\fourdigitRule;
use App\Rules\passwordRule;
use App\Rules\pwnotnameRule;
use App\Rules\signupRule;
use App\Rules\specialcharRule;
use Illuminate\Auth\Events\Validated;
use Illuminate\Foundation\Http\FormRequest;
use Nette\Utils\Validators;

class signupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
       
        return [
            "name" => ["required","min:4","max:20","regex:/^\S*$/u"],
            "email" => "required|email|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix",
            "password" => ["required",new fourdigitRule(),new passwordRule(),new specialcharRule(),new pwnotnameRule(request()->input('name'))]
        ];
    }
}
