function setRandomIdArr(){
    var idArr = [];
    var randomId = Math.floor(Math.random()*10+1);
    idArr.push(randomId);
    while(idArr.length < 10) {
        if(idArr.includes(randomId)){
            randomId = Math.floor(Math.random()*10+1);
        }else{
            idArr.push(randomId);
        }
    }
    return idArr;
}
function setRandomAlphaArr(){
    var alphaArr = [];
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
    alphaArr.push(randomCharacter);
    while(alphaArr.length < 10) {
        if(alphaArr.includes(randomCharacter)){
            randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
        }else{
            alphaArr.push(randomCharacter);
        }
    } 
    return alphaArr;
}
function startGame(){
    var idArr = setRandomIdArr();
    var alphaArr = setRandomAlphaArr();
    for (let index = 0; index <idArr.length; index++) {
       document.getElementById(idArr[index]).innerText = alphaArr[index];
    }
   setCirPosition(); 
   
   window.addEventListener("keyup",function(event){
    console.log(event.key);
     if(alphaArr.includes(event.key)){
         var charIndex = alphaArr.indexOf(event.key);
         console.log(charIndex);
         console.log(idArr[charIndex]);
         document.getElementById(idArr[charIndex]).style.display = "none";
         console.log(document.getElementById(idArr[charIndex]).innerText)
     }
     else if(event.key == " "){
        location.reload();
     }
 });
}
       
function setCirPosition() {
    var circlePositionArr = [];
    var circlePosition = Math.floor(Math.random()*1200+1);
    
    circlePositionArr.push(circlePosition);
    while(circlePositionArr.length < 10) {
        if(circlePositionArr.includes(circlePosition)){
            circlePosition = Math.floor(Math.random()*1200+1);
           
        }else{
            circlePositionArr.push(circlePosition);
        }
    } 
    var delayArr =[2, 1.7, 0.2, 1, 2.5, 1.3, 0, 1.6, 0.9, 0.5];
    var aniDur = [4,2.5,3,4,5,6,7,8,9,10];
    for (let index = 0; index < circlePositionArr.length; index++) {
        
        document.getElementById(index+1).style.left = circlePositionArr[index] + "px";
        document.getElementById(index+1).style.animationDelay = delayArr[index] + "s" ; 
        document.getElementById(index+1).style.animationDuration = aniDur[index] + "s" ; 
    }
}

