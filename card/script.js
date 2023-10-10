

function changeColor(){
    var indexArr=[];
    var colorArr=[];
    while (colorArr.length <= 5) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        
        if (!colorArr.includes(randomColor)){
            
            
            var firstIndex =Math.floor((Math.random()*12)+1);
            
            var secIndex = Math.floor((Math.random()*12)+1);
            
            if((!indexArr.includes(firstIndex)) && (!indexArr.includes(secIndex)) && (firstIndex != secIndex)) {
                console.log(firstIndex);
                console.log(secIndex);
                console.log(randomColor);
                
                colorArr.push(randomColor);
                indexArr.push(firstIndex);
                indexArr.push(secIndex);
                document.getElementById(firstIndex).style.backgroundColor = "#"+randomColor;
                document.getElementById(secIndex).style.backgroundColor = "#"+randomColor;
            }
        }
        
        /*if((!colorArr.includes(randomColor)) && (!indexArr.includes(firstIndex))&& (!indexArr.includes(secIndex))){
            colorArr.push(randomColor); 
            console.log(colorArr.length);  
            indexArr.push(firstIndex);
            indexArr.push(secIndex);
            console.log(colorArr);
            
            } */ 
     } 
    
}
function dispearColor(){
    for (let index = 1; index < 13; index++) {
        document.getElementById(index).style.backgroundColor="gray";   
    } 
}
let second = 30;
function interval(){
    if(second >=0){
        document.getElementById("seconds").innerHTML = second--;
    } 
    
}
function start(){
    changeColor();
    setTimeout(dispearColor,2000);
    setInterval(interval,1000) 
    for (let index = 1; index < 13; index++) {
        document.getElementById(index).setAttribute("onclick","click(this)");
    }
} 
var firstClick = false;
var fClick="";
var fid;
var sClick="";
var sid;
function click(obj){
    document.getElementById(obj.id).style.backgroundColor= "yellow";
    /*if(firstClick == false){
        fClick =document.getElementById(obj.id).style.backgroundColor;
        firstClick =true;
        fid = obj.id;
    }else{
        sClick =document.getElementById(obj.id).style.backgroundColor;
        sid =obj.id;
    }
    if(fClick == sClick){
        document.getElementById(fid).style.display = "none";
        document.getElementById(sid).style.display = "none";
    }*/
}


