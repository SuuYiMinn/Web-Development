let simple = true;
let speedy = false;
let easy = false;
function displayTab1(){
    document.getElementById("tab1").style.display="flex";
    document.getElementById("tab2").style.display="none";
    document.getElementById("tab3").style.display="none";

    // document.getElementById("bottom1").style.borderBottomColor ="red";
    // document.getElementById("bottom1").style.borderBottomWidth ="3px";
    // document.getElementById("bottom2").style.borderBottomColor ="rgba(0,0,0,0.2)";
    // document.getElementById("bottom2").style.borderBottomWidth ="2px";
    // document.getElementById("bottom3").style.borderBottomColor ="rgba(0,0,0,0.2)";
    // document.getElementById("bottom3").style.borderBottomWidth ="2px";

}
function displayTab2(){
    
    document.getElementById("tab2").style.display="flex";
    document.getElementById("tab1").style.display="none";
    document.getElementById("tab3").style.display="none";
    // document.getElementById("bottom2").style.borderBottomColor ="red";
    // document.getElementById("bottom2").style.borderBottomWidth ="3px";
    // document.getElementById("bottom1").style.borderBottomColor ="rgba(0,0,0,0.2)";
    // document.getElementById("bottom1").style.borderBottomWidth ="2px";
    // document.getElementById("bottom3").style.borderBottomColor ="rgba(0,0,0,0.2)";
    // document.getElementById("bottom3").style.borderBottomWidth ="2px";
}
function displayTab3(){
    document.getElementById("tab3").style.display="flex";
    document.getElementById("tab1").style.display="none";
    document.getElementById("tab2").style.display="none";
    // document.getElementById("bottom3").style.borderBottomColor ="red";
    // document.getElementById("bottom3").style.borderBottomWidth ="3px";
    // document.getElementById("bottom1").style.borderBottomColor ="rgba(0,0,0,0.2)";
    // document.getElementById("bottom1").style.borderBottomWidth ="2px";
    // document.getElementById("bottom2").style.borderBottomColor ="rgba(0,0,0,0.2)";
    // document.getElementById("bottom2").style.borderBottomWidth ="2px";

}
function check1() {
    if(document.getElementById("bookId").checked){
        document.getElementById("icon1").setAttribute("name","chevron-up-outline");
        document.getElementById("icon1").style.color="red";
        document.getElementById("showp1").style.display="block";
        
    }else{
        document.getElementById("icon1").setAttribute("name","chevron-down-outline");
        document.getElementById("icon1").style.color="blue";
        document.getElementById("showp1").style.display="none";
    
    }
}
function check2() {
    if(document.getElementById("requestId").checked){
        document.getElementById("icon2").setAttribute("name","chevron-up-outline");
        document.getElementById("icon2").style.color="red";
        document.getElementById("showp2").style.display="block";
        
    }else{
        document.getElementById("icon2").setAttribute("name","chevron-down-outline");
        document.getElementById("icon2").style.color="blue";
        document.getElementById("showp2").style.display="none";
    
    }
}
function check3() {
    if(document.getElementById("appId").checked){
        document.getElementById("icon3").setAttribute("name","chevron-up-outline");
        document.getElementById("icon3").style.color="red";
        document.getElementById("showp3").style.display="block";
        
    }else{
        document.getElementById("icon3").setAttribute("name","chevron-down-outline");
        document.getElementById("icon3").style.color="blue";
        document.getElementById("showp3").style.display="none";
    
    }
    

}


function check4() {
    if(document.getElementById("otherId").checked){
        document.getElementById("icon4").setAttribute("name","chevron-up-outline");
        document.getElementById("icon4").style.color="red";
        document.getElementById("showp4").style.display="block";
        
    }else{
        document.getElementById("icon4").setAttribute("name","chevron-down-outline");
        document.getElementById("icon4").style.color="blue";
        document.getElementById("showp4").style.display="none";
    
    }
    

}
// document.getElementById("inputId").addEventListener("keyup",function(event){
//     var inputEmail += event.key;

// })
function emailValidate(){
    var input = document.getElementById("inputId").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    
    var result = mailformat.test(input);
    console.log(result);
    if(result == false){
        document.getElementById("alertId").style.display="block";
        document.getElementById("btnId").style.backgroundColor="white";
        document.getElementById("btnId").style.color="red";
        document.getElementById("btnId").style.borderColor="red";
        document.getElementById("btnId").style.borderWidth="2px";
        document.getElementById("inputId").style.borderWidth="2px";
        document.getElementById("inputId").style.borderColor="red";
        document.getElementById("iconId").style.display="block";



    }else{
        document.getElementById("iconId").style.display="none";
        document.getElementById("alertId").style.display="none";
        document.getElementById("btnId").style.backgroundColor="red";
        document.getElementById("btnId").style.color="white";
        document.getElementById("btnId").style.borderColor="white";
        document.getElementById("btnId").style.borderWidth="0px";
        document.getElementById("inputId").style.borderWidth="0px";
        document.getElementById("inputId").style.borderColor="white";
    }
}
function showMenu(){
    document.getElementById("showMenuId").style.display="block";
    document.getElementById("navId").style.display= "none";
    // document.getElementById("3lineId").style.display= "none";


}




