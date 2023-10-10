// exp1 က true ဖြစ်ရင် exp1 ကို return ပြန်တယ်။
// exp1 က false ဖြစ်ရင် exp2 ကို return ပြန်တယ်။
// o1 = true || true // t || t returns true
// o2 = false || true // f || t returns true
// o3 = true || false // t || f returns true
// o4 = false || (3 == 4) // f || f returns false
// o5 = 'Cat' || 'Dog' // t || t returns "Cat"
// o6 = false || 'Cat' // f || t returns "Cat"
// o7 = 'Cat' || false // t || f returns "Cat"
// o8 = '' || false // f || f returns false
// o9 = false || '' // f || f returns ""
// o10 = false || varObject // f || object returns varObject
// False ဖြစ်စေတဲ့အချက်က
// • null;
// • NaN;
// • 0;
// • empty string ("" or '' or ``);
// • undefined

let a = "10";
let result;
// if(a == null ){
//     result = "Error";
// }else if(a == ""){
//     result = "Error";
// }else if(a == undefined){
//     result = "Error";
// }else if(a == NaN){
//     result = "Error";
// }else if(a == 0){
//     result = "Error";
// }else {
//     result = a;
// } အဲ့လိုရေးမယ့်အစား
result = a || "Error"; // false condition တွေကိုခြုံငုံပြီးသုံးချင်ရင် || ကိုသုံးတယ်။
console.log(result);

// Nullish ??
// ===========
// Logical || နဲ့ပုံစံတူတယ်။
// ဒါပေမယ့် false ဖြစ်စေတဲ့အချက်က
// • Null
// • Undefined နှစ်ခုပဲ false ဖြစ်ပါတယ်။ ကျန်တာ true ဖြစ်ပါတယ်။

// let b = "";
// let b = 0;
let b = undefined;
// let b = null; n => small letter ဖြစ်မှရတယ်.
// let b = NaN;
let resultb = b ?? "Error" 
console.log(resultb);