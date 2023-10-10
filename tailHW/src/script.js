var home = document.getElementById("homeId");
var popular = document.getElementById("popularId");
var btnHome = document.getElementById("btnHome");
var btnPopular = document.getElementById("btnPopular");
var loginPage = document.getElementById("loginPageId");
var getStart = document.getElementById("getStartId");
var signupPage = document.getElementById("signupPageId");
var forgotPage = document.getElementById("forgotId");
var form = document.getElementById("formId");
var nameVar = document.getElementById("nameId");
var email = document.getElementById("emailId");
var password = document.getElementById("passwordId");
var loginForm = document.getElementById("loginFormId");
var loginEmail = document.getElementById("loginEmailId");
var loginPassword = document.getElementById("loginPasswordId");
var background = document.getElementById("backgroundId");

// var loginBtn = document.getElementById("loginBtnId");
// var nav = document.getElementById("navId");
// var menu = document.getElementById("menuId");
// var home = document.getElementById("homeId");
// var popular = document.getElementById("popularId");
// var reviews = document.getElementById("reviewsId");
// var contact = document.getElementById("contactId");
// var about = document.getElementById("aboutId");
function showHome(){
    home.style.display = "block";
    popular.style.display = "none";
    btnHome.style.backgroundColor = "#4753FF";
    btnHome.style.color = "white";
    btnPopular.style.backgroundColor = "#F7DAF9";
    btnPopular.style.color = "#F347FF";

}
function showPopular(){
    popular.style.display = "flex";
    home.style.display = "none";
    btnPopular.style.backgroundColor = "#4753FF";
    btnPopular.style.color = "white";
    btnHome.style.backgroundColor = "#F7DAF9";
    btnHome.style.color = "#F347FF";
}
function closeLogin(){
    signupPage.style.display = "none";
    loginPage.style.display = "none";
    background.removeAttribute("class","blur");
    // nav.removeAttribute("class","blur");
    // menu.removeAttribute("class","blur");
    // home.removeAttribute("class","blur");
    // popular.removeAttribute("class","blur");
    // reviews.removeAttribute("class","blur");
    // about.removeAttribute("class","blur");
    // contact.removeAttribute("class","blur");
}
function showLogin(){
    loginPage.style.display="block";
    signupPage.style.display = "none";
    background.setAttribute("class","blur");
    // nav.setAttribute("class","blur");
    // menu.setAttribute("class","blur");
    // home.setAttribute("class","blur");
    // popular.setAttribute("class","blur");
    // reviews.setAttribute("class","blur");
    // about.setAttribute("class","blur");
    // contact.setAttribute("class","blur");
}
function closeSignup(){
    signupPage.style.display = "none";
    loginPage.style.display = "none";
    background.removeAttribute("class","blur");
    // nav.removeAttribute("class","blur");
    // menu.removeAttribute("class","blur");
    // home.removeAttribute("class","blur");
    // popular.removeAttribute("class","blur");
    // reviews.removeAttribute("class","blur");
    // about.removeAttribute("class","blur");
    // contact.removeAttribute("class","blur");
}
function showSignup(){
    signupPage.style.display = "block";
    loginPage.style.display = "none";
    background.setAttribute("class","blur");
    // nav.setAttribute("class","blur");
    // menu.setAttribute("class","blur");
    // home.setAttribute("class","blur");
    // popular.setAttribute("class","blur");
    // reviews.setAttribute("class","blur");
    // about.setAttribute("class","blur");
    // contact.setAttribute("class","blur");

}
function closeForgot(){
    forgotPage.style.display = "none";
    background.removeAttribute("class","blur");
    // nav.removeAttribute("class","blur");
    // menu.removeAttribute("class","blur");
    // home.removeAttribute("class","blur");
    // popular.removeAttribute("class","blur");
    // reviews.removeAttribute("class","blur");
    // about.removeAttribute("class","blur");
    // contact.removeAttribute("class","blur");
}
function showForgot(){
    forgotPage.style.display = "block";
    loginPage.style.display = "none";
}

var accountsArr =[];
form.addEventListener("submit",function (e){
    e.preventDefault();
    var nameValue = nameVar.value;
    localStorage.setItem("textvalue",nameValue);
    window.location.href = "afterlogin.html";
})
loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    var emailValue = email.value;
    var loginEmailValue = loginEmail.value;
    if(emailValue == loginEmailValue){
        var  nameValue = nameVar.value;
        localStorage.setItem("textvalue",nameValue);
        window.location.href = "afterlogin.html";

    }
    else{

    }
    
})
