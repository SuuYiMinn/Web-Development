
function show(value){
    if(document.getElementById("caps").checked){
        var change = value.toUpperCase();
        document.getElementById("result").innerHTML += change;
    }
    else{
        document.getElementById("result").innerHTML += value;
    }
  
}
function clearContent(){
    document.getElementById("result").innerHTML = "";
}

function charAt(){
    var text = document.getElementById("result").innerHTML;
    var position = document.getElementById("secondbox").value;
    if(position == ""){
        window.alert("Enter input box");
    }
    else if(isNaN(position)){
        window.alert("Enter number!")
    }
    else{
        var get = text.charAt(position);
        window.alert(get);
    } 
}
function charCodeAt(){
    var text = document.getElementById("result").innerHTML;
    var position = document.getElementById("secondbox").value;
    if(position == ""){
        window.alert("Enter input box");
    }
    else if(isNaN(position)){
        window.alert("Enter number!")
    }
    else{
        var get = text.charCodeAt(position);
        window.alert(get);

    } 
}
function Upper(){
    var text = document.getElementById("result").innerHTML;
    var get = text.toUpperCase();
    window.alert(get);
}
function Lower(){
    var text = document.getElementById("result").innerHTML;
    var get = text.toLowerCase();
    window.alert(get);
}
function trim(){
    var text = document.getElementById("result").innerText;
    var get = text.trim();
    window.alert(get);
}
function includes(){
    var text = document.getElementById("result").innerHTML;
    var position = document.getElementById("secondbox").value;
    if(position == ""){
        window.alert("Enter input box");
    }else{
        var get = text.includes(position);
        window.alert(get);
    } 
}
function indexOf(){
    var text = document.getElementById("result").innerHTML;
    var position = document.getElementById("secondbox").value;
    if(position == ""){
        window.alert("Enter input box");
    }
    else if(!isNaN(position)){
        window.alert("Enter text!")
    }
    else{
        var get = text.indexOf(position);
        window.alert(get);
    } 
}
function lastIndex(){
    var text = document.getElementById("result").innerHTML;
    var position = document.getElementById("secondbox").value;
    if(position == ""){
        window.alert("Enter input box");
    }
    else if(!isNaN(position)){
        window.alert("Enter text!")
    }
    else{
        var get = text.lastIndexOf(position);
        window.alert(get);
    } 
}
function startsWith(){
    var text = document.getElementById("result").innerHTML;
    var position = document.getElementById("secondbox").value;
    if(position == ""){
        window.alert("Enter input box");
    }else{
        var get = text.startsWith(position);
        window.alert(get);
    } 
}
function endsWith(){
    var text = document.getElementById("result").innerHTML;
    var position = document.getElementById("secondbox").value;
    if(position == ""){
        window.alert("Enter input box");
    }else{
        var get = text.endsWith(position);
        window.alert(get);
    } 
}
function backSpace(){
    var text = document.getElementById("result").innerText;
    var last = text.length - 1;
    var ans =text.slice(0,last);
    document.getElementById("result").innerHTML = ans;
}