let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let isCheckedBox1 = document.getElementById("check1");
let isCheckedBox2 = document.getElementById("check2");

window.addEventListener("keypress", (event) => {
let left;
let top;
let box;
let left2;
let top2;
let range =10;
if(isCheckedBox1.checked && !isCheckedBox2.checked){
    box = box1;
    left = Number(box1.style.left.replace("px",""));
    top = Number(box1.style.top.replace("px",""));
}else if(isCheckedBox2.checked && !isCheckedBox1.checked){
    box = box2;
    left = Number(box2.style.left.replace("px",""));
    top = Number(box2.style.top.replace("px",""));
}else if(isCheckedBox1.checked && isCheckedBox2.checked){
    left = Number(box1.style.left.replace("px",""));
    top = Number(box1.style.top.replace("px",""));
    left2 = Number(box2.style.left.replace("px",""));
    top2 = Number(box2.style.top.replace("px",""));
}else{

}

// if(condition){
//     if,while,do while နောက်မှာ condition (boolean Dat‌a Type မှားသည် မှန်သည်ပဲရှိတယ်)
    
// }
// switch(expression){
//     switch နောက်မှာ expression ဘာဖြစ်ရမယ် ဉာာဖြစ်ရမယ် မရှိဘူး
// }
switch (event.key) {
    case "a":
        if(isCheckedBox1.checked && isCheckedBox2.checked){
            box1.style.left = left - range + "px";
            box2.style.left = left2 - range + "px";
        }else{
            box.style.left = left - range + "px";//ဘယ်ဘက်ရွေ့ချငရင် -
        }
        break;
    case "d":
        if(isCheckedBox1.checked && isCheckedBox2.checked){
            box1.style.left = left + range + "px";
            box2.style.left = left2 + range + "px";
        }else{
            box.style.left = left + range + "px";//ညာဘက်ရွေ့ချင်ရင် +
        }
        break;
    case "w":
        if(isCheckedBox1.checked && isCheckedBox2.checked){
            box1.style.top = top - range + "px";
            box2.style.top = top2 - range + "px";
        }else{
            box.style.top = top - range + "px";// အပေါ်ရွေ့ချင်ရင် -
        }
        break;
    case "s":
        if(isCheckedBox1.checked && isCheckedBox2.checked){
            box1.style.top = top + range + "px";
            box2.style.top = top2 + range + "px";
        }else{
            box.style.top = top + range + "px";// အောက်ရွေ့ချင်ရင် +
        }
        break;
    default:
        console.log("Please Write A,W,S,D");
        break;
}
});

function detect(obj1,obj2){
    if  (obj1.x + obj1.width >= obj2.x &&
        obj1.x <= obj2.x + obj2.width &&
        obj1.y + obj1.height >= obj2.y &&
        obj1.y <= obj2.y + obj2.height){
            console.log("crash");
        }
}
// အချိန်နဲ့အမျှ တိုက်/မတိုက်စစ်နေဖို့အတွက် အချိန်ဘယ်လောက်ကြာရင် ဘာလုပ်ဆိုတာမျိုးဖြစ်ချင်ရင် setInterval()သုံးတယ်
setInterval(() => {
    detect(box1.getBoundingClientRect(),
            box2.getBoundingClientRect());//getBoundingClientRect()=> x နဲ့ y ကိုယူတာ
}, 0/* 1000=> 1sec, 100=> 0.1s ကြာတိုင်းစစ် အချိန်တိုင်းစစ်ချင်ရင် 0*/);