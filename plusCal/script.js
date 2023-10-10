
var num = 0;
function randomNum(){
    var ranNum = Math.floor(Math.random() * 100 +1);
    document.getElementById("ranNumId").innerText = ranNum;
    num = ranNum;
}
window.addEventListener("keypress",function(event){
    document.getElementById(event.key).style.animationName ="colorChange";
        document.getElementById(event.key).style.animationDuration = "0.3s";
    document.getElementById("answerId").innerHTML += event.key + "+";
    document.getElementById("resultId").innerHTML = Number(document.getElementById("resultId").innerHTML) + Number(event.key);
    if(Number(document.getElementById("resultId").innerText) == num){
        document.getElementById("corwId").innerText = "Correct !";
        document.getElementById("corwId").style.color = "blue";
    }else if(Number(document.getElementById("resultId").innerText) > num){
        document.getElementById("corwId").innerText = "Wrong !";
        document.getElementById("corwId").style.color = "red";
    }
})
function again(){
    location.reload();
}