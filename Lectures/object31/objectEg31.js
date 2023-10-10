//array ထဲမှာလည်း object ထည့်ရတယ်။ object ထဲမှာလည်း array ထည့်ရတယ်.
let person =[
    {
        name : "John",
        age : 24,
        married : true,
        photo : "men2.jpg"
    },
    {
        name : "Mary",
        age : 20,
        married : false, 
        photo : "women.jpg"  
    },
    {
        name : "David",
        age : 35,
        married : true, 
        photo : "men.jpg" 
    }
];
for (const value of person) {
    var marriedStatus = (value.married == false) ? "Single" : "Married";
     // html, css ဘက်မှာ အရင်ရေးပြီးမှ js မှာ ရေးပါ။  
    document.getElementById("main").innerHTML +=
        `
            <div class="card">
                <img src="${value.photo}" width = "100px">
                <p>Name: <span>${value.name}</span></p>
                <p>Age: <span>${value.age}</span></p>
                <p>Status: <span>${marriedStatus}</span></p>
            </div>
        `
}
// let person ={
//     name : "John",
//     age : 24,
//     married : false
// };
// object တွေကို loop ပတ်ချင်ရင် for in ကိုသုံးတယ်။
// for (const key in person) {
//     // console.log(key);
//     console.log(`key is ${key} => value is ${person[key]}`);//ဘာkey လဲဆိုတာ မသိရင် သုံးတယ်။ person.name => key ကိုသိမှရတယ်
// }
// for of ကို Array, string တို့ iteration လုပ်လို့ရတာတွေမှာ သုံးတယ်။ 
// object လို key တွေထုတ်ဖို့ မလိုတဲ့အခါ for of နဲ့သုံးရတာပိုလွယ်ကူစေပါတယ်။
// let age = [12, 45, 32];
// for (const value of age) {
//     console.log(value);
// }
// for (const key in age) {
//     console.log(key);
// } index key တွေထွက်လာတယ်။