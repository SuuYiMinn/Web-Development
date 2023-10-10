var answer;
var x;
var y;
var totalScore = 0;
var totalTime = 0;
function start(){
    document.getElementById("start").style.backgroundColor="grey";
    document.getElementById("start").disabled = true;
    document.getElementById("box1").disabled = false;
    document.getElementById("box2").disabled = false;
    document.getElementById("stop").disabled = false;
    document.getElementById("box1").style.backgroundColor="cyan";
    document.getElementById("box2").style.backgroundColor="cyan";
    
    document.getElementById("stop").style.backgroundColor="red";  
    random();
}
function random(){
    x = Math.floor(Math.random()*100);
    y = Math.floor(Math.random()*100);
    if(x<y){
        answer = y;
    }
    else{
        answer = x;
    }
    document.getElementById("box1").innerHTML = x;
    document.getElementById("box2").innerHTML = y;
}
function check1(){
    if(x>y){
        totalScore += 10;
        document.getElementById("score").innerHTML = totalScore; 
    }
    else{
        totalScore -= 10;
        document.getElementById("score").innerHTML = totalScore; 
    }
    totalTime += 1;
    document.getElementById("time").innerHTML = totalTime;
    random();
}
function check2(){
    if(y>x){
        totalScore += 10;
        document.getElementById("score").innerHTML = totalScore; 
    }
    else{
        totalScore -= 10;
        document.getElementById("score").innerHTML = totalScore; 
    }
    totalTime += 1;
    document.getElementById("time").innerHTML = totalTime;
    random();
}
function stop(){
    document.getElementById("stop").disabled=true;
    document.getElementById("stop").style.backgroundColor="grey";
    document.getElementById("box1").innerHTML="";
    document.getElementById("box1").style.backgroundColor="grey";
    document.getElementById("box2").innerHTML="";
    document.getElementById("box2").style.backgroundColor="grey";
    document.getElementById("start").disabled=false;
    document.getElementById("start").style.backgroundColor="greenyellow";
    document.getElementById("score").innerHTML="";
    document.getElementById("time").innerHTML="";
    document.getElementById("history").innerHTML +="<span>Your Scores is :</span>" + totalScore + "<br/><br/>";
    document.getElementById("box1").disabled = true;
    document.getElementById("box2").disabled = true;
    totalScore = 0;
    totalTime = 0;


}