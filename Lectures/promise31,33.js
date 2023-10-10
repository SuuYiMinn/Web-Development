// function testing(x){
//     if(x == 5){
//         return [1,2,3,4];
//     }else{
//         return -1;
//     }
// }
// let y = testing(5);
// x က 5ဖြစ်ရင်(array return ပြန်ရင်) array ရဲ့နောက်ဆုံးခန်းက data ကိုလိုချင်တယ်။ -1 return ပြန်ရင် Error message ထုတ်ပြချင်တယ်။
// y ကို condition စစ်ခွင့်မရှိဘူး။ ဘယ်လိုရေးလို့ရမလဲ?
//မှန်ခဲ့တာလား/မှားခဲ့တာလားဆိုတာသိအောင် var ထား
// var correct = false;
// function testing(x){
//     if(x == 5){
//         correct = true;
//         return [1,2,3,4];
//     }else{
//         correct = false;
//         return -1;
//     }
// }
// let y = testing(5);
// if(correct){
//     console.log(y.pop());
// }else{
//     console.log("Error");
// }
//နောက်ကောင်းတဲ့နည်းက
// function testing(x,fun1,fun2){
//     if(x == 5){
//         fun1([1,2,3,4]);
//     }else{
//         fun2("Error");
//     }
// }
// let y = testing(5,correct,error);//function ထဲကို parameter ထည့်ပေးလိုက်တာကို callback function
// function correct(data){
//     console.log(data.pop());
// }
// function error(err){
//     console.log(err);
// }
//ပထမဆုံးလိုမျိုး complex မဖြစ်အောင် promise ဆိုတာဖြစ်လာတယ်။
let sample = new Promise((resolve,reject) =>{
    let x = 10;
    if(x == 5){
        resolve([1,2,3,4]);
    }else if(x == 0){
        reject("Error");
    }else{
        reject("Error 1,2,3");
    }
})
sample.then((param) => {// မှန်ရင် then ထဲဝင်
    console.log("Success",param);
}).catch((error) =>{// မှားရင် catch ထဲဝင်
    console.log("Error",error);
}).finally(() => {// မှန်၂မှား၂ finally ထဲဝင် နောက်ဆုံးအဆုံးသတ်မှာ ဒါပဲလုပ်ရမယ်ဆိုရင် finally ကိုသုံးတယ်။
    console.log("Finished");
})
//database နဲ့ချိတ်ပြီး data တွေကိုရယူမယ်ဆိုရင် database connection ဖွင့်ပြီး ပိတ်ကိုပိတ်ရမယ်။finally ကိုသုံးရမယ် 
// dataတွေရခြင်းမရခြင်း၊ errorတွေတက်ခြင်းမတက်ခြင်းသည် connectionဖွင့်ပိတ်နဲ့ မသက်ဆိုင်ဘူး။  ဥပမာအနေနဲ့
let sample1 = new Promise((resolve,reject) =>{
    console.log("Connection open");
    let query = "SELECT * FROM m-students";
    //query run
    if(query){
        resolve("OK");
    }else{
        reject("Error");
    }
})
sample.then((param) => {
    console.log("Success",param);
}).catch((error) =>{
    console.log("Error",error);
}).finally(() => {
    console.log("Connection Close");
})
//Promise Example Code
function exam(){
    return new Promise((resolve,reject) =>{
        let mark = 100;
        var result;
        if(mark == 100){
            result = {price:"$100", level:"2"};
            resolve(result);
        }
        else{
            result = {fail:"Try Again!"};
            reject(result);
        }
    })
}
exam().then((message) => {
    console.log("resolve:" + message.price)
}).catch((error) => {
    console.log("reject:"+ error.fail)
}).finally(() => {
    console.log("Exam Finish");
})