// function clickMe(){
//     console.log("Hello");
// }

// HTML tag ထဲမှာ event (eg, onclick) တွေကိုထည့်မရေးဘဲ js ဘက်က listener နဲ့ယူရေးတာ => addEventListener
let btn = document.getElementById("btn"); // ဘယ် element ကို listenလုပ်ချင်တာလဲ targetထားချင်တာလဲ ပြောင်းလဲသွားမယ့် element။
// အဲ့ elementကို ဘာလုပ်ရင် ဒီ function ကိုအလုပ်လုပ်
btn.addEventListener("click",function () {// function name ပေးစရာမလို
    console.log("Hello");
})

// function ကိုသပ်၂ ခွဲရေးမယ်ဆိုရင်
btn.addEventListener(("click"), clickingData);
function clickingData(){
    console.log("Hello");
}// button ၂ခုရှိတယ် ဒီfunctionပဲလုပ်မယ်ဆိုရင် function ကို event listenerနဲ့တွဲမရေးဘဲ သပ်၂ရေးတာ ပိုကောင်းတယ်။

//HTML ဘက်က  လက်ရှိ information တွေပါလာချင်တယ်ဆိုရင် HTML ဘက်မှာ this ကိုထည့်ပေးတယ်။ this ကို js ဘက်မှာ ဖမ်းချင်တယ်ဆိုရင်
// paramenter ထဲကို var event ထည့်ပေးလိုက် ကြိုက်တဲ့ var ပေးလို့ရတယ်။
let inp = document.getElementById("inp");
inp.addEventListener("keyup", function (event) {
    console.log(event);// ဘာရိုက်လိုက်တာလဲကို ပြန်ထုတ်ချင်ရင် console.log(event.key); ရလာတဲ့ informationက object အနေနဲ့ရှိနေပြီး
    //key နာမည်က key, value က ရိုက်လိုက်တဲ့ စာလုံး။
})