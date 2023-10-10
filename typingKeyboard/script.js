var easyLength = 3;
var middleLength = 6;
var hardLength = 10;
var alphaArr = [];
var alphaLength;
var wordsArr = [];
var inputWordsArr = [];
function setText(){
    if(document.getElementById("easyid").checked){
        document.getElementById("textId").innerText ="" ;  
        alphaLength = easyLength;
    }else if(document.getElementById("middleid").checked){
        document.getElementById("textId").innerText ="" ;  
        alphaLength = middleLength;
    }else if(document.getElementById("hardid").checked){
        document.getElementById("textId").innerText ="" ;  
        alphaLength = hardLength;
    }
    // var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabet = "abcdefghijklmnopqrstuvwxyz:;";
    var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
    alphaArr.push(randomCharacter);
    
    
    while(alphaArr.length < alphaLength) {
        if(alphaArr.includes(randomCharacter)){
            randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
        }else{
            alphaArr.push(randomCharacter);
           
        }
    } 
    
    for (let index = 0; index < alphaArr.length; index++) {
        document.getElementById("textId").innerText += alphaArr[index];  
    }
    var word = alphaArr.join(""); 
    wordsArr.push(word);
}
var cword = 0;
var mword =0;
var eventKeyArr =[];
var start = null;
    window.addEventListener("keypress",function (event) {
        var char = event.key;
        var check = char.match(/[abcdefghijklmnopqrstuvwxyz:;]/);
        if( check != null){
            document.getElementById("typeTextId").innerHTML += "<button class=onetextbtn id=onetextId>"+check+"</button>";
        }
        else{
            document.getElementById("typeTextId").innerHTML += " ";
        }
         
        if(!start){
            var date = new Date();
            start = date.getMinutes();
        }
        document.getElementById(event.key).style.animationName ="colorChange";
        document.getElementById(event.key).style.animationDuration = "0.3s";
        
        eventKeyArr.push(event.key);
        var correct= 0;
        var wrong =0; 
        for (let index = 0; index < eventKeyArr.length; index++) {
            if(alphaArr[index] == eventKeyArr[index]){
                document.getElementById("onetextId").style.backgroundColor = "orangered";
                correct += 1 ;
            }
            else if (alphaArr[index] != eventKeyArr[index]){
                document.getElementById("onetextId").style.backgroundColor = "green";
                wrong += 1;
            } 
        }
        if((correct == alphaLength) && (eventKeyArr.length == alphaArr.length)){
            document.getElementById("corwId").innerText ="Correct!"
            cword++;
            document.getElementById("cwordId").innerHTML = cword;
            document.getElementById("textId").innerText = " ";
            document.getElementById("typeTextId").innerHTML = " ";
            alphaArr = [];
            var inputWord = eventKeyArr.join("");
            inputWordsArr.push(inputWord);
            eventKeyArr = [];
            setText() ;
                 
        }
        else if((wrong <= alphaLength) && (eventKeyArr.length == alphaArr.length)){
            document.getElementById("corwId").innerText ="Wrong!"
            mword ++;
            document.getElementById("missId").innerHTML = mword;
            document.getElementById("textId").innerText = " ";
            document.getElementById("typeTextId").innerHTML = " ";
            document.getElementById("textId").innerText = alphaArr.join(""); 
            var inputWord = eventKeyArr.join("");
            inputWordsArr.push(inputWord);
            eventKeyArr = [];
        }
    
    
    var date = new Date();
    var elapsed = date.getMinutes()-start;
    var wpm = 0;
    // console.log(wordsArr);
    // console.log(inputWordsArr);
    console.log("e :" +elapsed);
    
        for (let index = 0; index < inputWordsArr.length; index++) {
        
            if((wordsArr[index] == inputWordsArr[index]) && (elapsed <= 1) ){
                wpm++;
                console.log("w :"+ wpm);
            }else if(elapsed == 1){
                document.getElementById("wpmId").innerText = wpm;
            }
        }
    });  
    



    
    

    

