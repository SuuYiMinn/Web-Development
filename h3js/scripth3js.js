var answer;
var x;
var y;
var first=0;
var second=0;
var totalScore = 0;
var totalTime = 0;
function start(){
    document.getElementById("start").style.backgroundColor="grey";
    document.getElementById("start").disabled = true;
    random();
    document.getElementById("question").innerHTML= first+"+"+second;
    document.getElementById("box1").style.backgroundColor="cyan";
    document.getElementById("box1").disabled=false;
    document.getElementById("box2").disabled=false;
    document.getElementById("box3").disabled=false;
    document.getElementById("box2").style.backgroundColor="cyan";
    document.getElementById("box3").style.backgroundColor="cyan";
    document.getElementById("stop").style.backgroundColor="red";  
    document.getElementById("stop").disabled=false;
   
}
function random(){
    
    first = Math.floor(Math.random()*100);
    second = Math.floor(Math.random()*100);
    answer = first + second;

    x = Math.floor(Math.random()*100);
    y = Math.floor(Math.random()*100);
    var position = Math.floor(Math.random()*(3-1+1))+1;
    if(position == 1){
        document.getElementById("box1").innerHTML = first + second;
        document.getElementById("box2").innerHTML = x;
        document.getElementById("box3").innerHTML = y;
    }
    else if(position == 2){
        document.getElementById("box1").innerHTML = x;
        document.getElementById("box2").innerHTML = first + second;
        document.getElementById("box3").innerHTML = y;
    }
    else{
        document.getElementById("box1").innerHTML = x;
        document.getElementById("box2").innerHTML = y;
        document.getElementById("box3").innerHTML = first + second;

    }
     
    
    
}
function check1(){
    if(answer == document.getElementById("box1").innerHTML){
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
    document.getElementById("question").innerHTML= first+"+"+second;
}
function check2(){
    if(answer == document.getElementById("box2").innerHTML){
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
    document.getElementById("question").innerHTML= first+"+"+second;
}
function check3(){
    if(answer == document.getElementById("box3").innerHTML){
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
    document.getElementById("question").innerHTML= first+"+"+second;
}
function stop(){
    
    document.getElementById("box1").innerHTML="";
    document.getElementById("box1").style.backgroundColor="grey";
    document.getElementById("box1").disabled=true;
    document.getElementById("box2").innerHTML="";
    document.getElementById("box2").style.backgroundColor="grey";
    document.getElementById("box2").disabled=true;
    document.getElementById("box3").innerHTML="";
    document.getElementById("box3").style.backgroundColor="grey";
    document.getElementById("box3").disabled=true;
    document.getElementById("stop").style.backgroundColor="grey";
    document.getElementById("start").disabled=false;
    document.getElementById("start").style.backgroundColor="greenyellow";
    document.getElementById("score").innerHTML="";
    document.getElementById("time").innerHTML="";
    document.getElementById("question").innerHTML="";
    document.getElementById("history").innerHTML +="<span>Your Scores is :</span>" + totalScore + "<br/><br/>";
    document.getElementById("stop").disabled=true;
    totalScore = 0;
    totalTime = 0;
}