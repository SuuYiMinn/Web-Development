// let person = ["John", 24, false, ["Mary, David"], null,
//                 "Mary", 30, true, ["John, David"], "Developer"];
// console.log("Name is"+ person[5]);
// console.log("Age is" + person[6]);
// console.log("Married Status" + person[7]);
// array မှာဆို လူ၁ယောက်မက အချက်အလက်ထပ်ထည့်တိုင်း index no.တွက်၂ပြီးမှ အဲ့အချက်အလက်ကိုထုတ်လို့ရမယ်။
// အချက်အလက်ထုတ်ရတာ အရမ်းခက်ခဲသွားမယ်။
// array ထဲမှာ အချက်အလက် အပြောင်းအလဲလုပ်လိုက်တယ်ဆိုရင် 
// let person = ["Mary", 30, true, ["John, David"], "Developer"];
// console.log("Name is"+ person[5]);
// console.log("Age is" + person[6]);
// console.log("Married Status " + person[7]);
//အဖြေက အမှားတွေထွက်လာမယ်။
// dynamic ဖြစ်နေတဲ့ information တွေသိမ်းထားနိုင်တဲ့ data structure => object ဆိုပြီးဖြစ်လာတယ်။
let person = {
    fname/*(key)*/ : "John",/*(value)*/ //properties
    birthday : 1989,
    married : false,
    friends : ["Mary, David"],
    job : undefined, // object ထဲကို javascript မှာရှိတဲ့ data type အကုန်ထည့်ရတယ်။ object, function လည်းထည့်ရတယ်။
    calage: function(){
        /*return*/ console.log (2023-this.birthday/*1989*/);
    }// regular function မှာ this ကို redefined လုပ်နိုင်တယ်။
    // Arrcalage: () => console.log (2023-this.birthday/*1989*/); arrow function မှာ this ကို redefined မလုပ်နိုင်ဘူး
    // myfunc: function(a,b){
    //     console.log(a,b);
    // } function ကို parameter ပစ်လို့ရတယ်။
}
person.calage();
// person.Arrcalage();
// person.myfunc("Hello","World");
//date,array သည်လည်း objectပဲ => Non  primitive data type
// string, number,null, boolean, undefined, symbol => primitive data type
console.log(`Name is ${person.fname}`); // object မှာ value ကိုသိချင်ရင် key ကိုသိမှရမယ်။ array မှာ value ကိုသိချင်ရင် index ကိုသိမှရမယ်။
console.log(`Age is ${person.age}`);
// let person = {
//     job : null
// }
// console.log(`Name is ${person.fname}`);
// console.log(`Job is ${person.job}`);
// ဘယ်လိုပဲ အချက်အလက်တွေ အပြောင်းအလဲဖြစ်၂ ပျောက်သောက်ဖြစ်၂ key ရှိနေရင် value ထွက်တယ်။
// key မရှိဘူးဆိုရင် undefined ထွက်တယ်။