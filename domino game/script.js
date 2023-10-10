var playerCards = [];
var comCards = [];
// var bothCards = [];
// var drawCards = [];
var playAreaArr =[];
var theLast;
var afterStart = false;
var afterPayCards = false;
var playerTurn = 1;
var computerTurn = 2;
var current;
var firstCom = false;
var firstPlayer = false;
function setRandom(){
    afterStart = true;
    for (let index = 0; index < 28; index++) {
        var left = Math.floor(Math.random()*500 + 150);
        var top = Math.floor(Math.random()*200 + 10);
        var degArr = [45,70,30,180, 90];
        var ranDeg = degArr[Math.floor(Math.random() * degArr.length)];
        // console.log(left+","+top)
        document.getElementsByClassName("uplower")[index].style.display = "none";
        document.getElementsByClassName("card")[index].style.marginLeft = left+"px";
        document.getElementsByClassName("card")[index].style.marginTop = top+"px";
        document.getElementsByClassName("card")[index].style.transform = "rotate("+ranDeg+"deg)";
        
        
    }
}
function start(){
    document.getElementById("startId").style.display = "none";
    document.getElementById("ranId").style.display = "block";
    // for (let index = 0; index < 28; index++) {
    //     document.getElementsByClassName("uplower")[index].style.display = "none"; 
    // }
    document.getElementById("textId").innerHTML = "Random Card and Draw One Card!";
}
function draw(obj){
    var cardId = obj.id;
    document.getElementById(cardId).children[0].style.display = "block";
    document.getElementById(cardId).style.marginLeft = "900px";
    document.getElementById(cardId).style.marginTop = "120px";
    var upNum = cardId.split(",")[0];
    var lowerNum = cardId.split(",")[1];
    var totaldrawNum = Number(upNum) + Number(lowerNum);
    return totaldrawNum;
    
}
function computer(){
    var uplo = [0,1,2,3,4,5,6];
    var ranup = uplo[Math.floor(Math.random() * uplo.length)];
    var ranlo = uplo[Math.floor(Math.random() * uplo.length)];
    
    if(ranup > ranlo){
        var temp = ranup;
        ranup = ranlo;
        ranlo = ranup;
    }
    // console.log("computer Card " +ranup+","+ranlo);
    document.getElementById(ranup+","+ranlo).children[0].style.display = "block";
    document.getElementById(ranup+","+ranlo).style.marginLeft = "800px";
    document.getElementById(ranup+","+ranlo).style.marginTop = "120px";
    // var totalcomNum = Number(ranup) + Number(ranlo);
    var upandloOfCom = Number(ranup)+","+Number(ranlo);
    return upandloOfCom;
    
}

function createUpLoObj(){
    var uplo = [0,1,2,3,4,5,6];
        var uploObj = {
            "up" : 0,
            "lo" : 0
        };
        var ranup = uplo[Math.floor(Math.random() * uplo.length)];
        var ranlo = uplo[Math.floor(Math.random() * uplo.length)];
        if(ranup > ranlo){
            var temp = ranup;
            ranup = ranlo;
            ranlo = ranup;
        }
        uploObj.up = ranup;
        uploObj.lo = ranlo;
        return uploObj;

}
function forPlayerCards(){
    var uploArr = [];
    while(playerCards.length < 14){
        var uploObj =createUpLoObj();
        uploArr.push(uploObj);
        playerCards = uploArr.reduce((finalArray,current) => {
            var obj = finalArray.find((item) => item.up === current.up && item.lo === current.lo);
        
            if(obj){
                return finalArray;
            }
            return finalArray.concat([current]);
        },[]);  
    }
    // console.log(result);

    for (let index = 0; index < playerCards.length; index++) {
        var noOfUpperDot="";
        var noOfLowerDot="";
        
        for (let index1 = 0; index1 < playerCards[index].up; index1++) {
            noOfUpperDot += `<div class="dot"></div>`;
            
        }
        for (let index2 = 0; index2 < playerCards[index].lo; index2++) {
            noOfLowerDot += `<div class="dot"></div>`;
            
        }
        
        // for (let index3 = 0; index3 < 28; index3++) {
        //     document.getElementsByClassName("card")[index3].removeAttribute("onclick","whoPlayFirst(this)");
        //     document.getElementsByClassName("card")[index3].style.position="static";

        // }
        console.log(playerCards);
        document.getElementById("pCardsId").innerHTML += 
        `
            <div class="cardOfPlayer" id="`+playerCards[index].up+`,`+playerCards[index].lo+`" onclick="playerDrawClick(this)">
                <div class="uplower">
                    <div class="upper">`+noOfUpperDot+`</div>
                    <hr>
                    <div class="lower">`+noOfLowerDot+`</div>
                </div>
            
            </div>
        `; 
        
    }
   
}

function forComCards(){
    // console.log(playerCards);
    var uploArr = [];
    
    
    while(comCards.length < 14){
        var found = true;
        while (found){
            var uploObj =createUpLoObj();
            // uploArr.push(uploObj);
            found = playerCards.some((obj,index) => {
                // console.log("uploObj.up and uploObj.lo"+uploObj.up+","+uploObj.lo);
                if(obj.up === uploObj.up && obj.lo === uploObj.lo){
                    return true;
                }
                return false;
            });

        }
        uploArr.push(uploObj);
        // console.log(uploObj);
        
        comCards = uploArr.reduce((finalArray,current) => {
            var obj = finalArray.find((item) => item.up === current.up && item.lo === current.lo);
        
            if(obj){
                return finalArray;
            }
            return finalArray.concat([current]);
        },[]);  
    }
    // console.log(uploArr);
    // console.log(comCards);
    
    for (let index = 0; index < comCards.length; index++) {
        var noOfUpperDot="";
        var noOfLowerDot="";
        
        for (let index1 = 0; index1 < comCards[index].up; index1++) {
            noOfUpperDot += `<div class="dot"></div>`;
            
        }
        for (let index2 = 0; index2 < comCards[index].lo; index2++) {
            noOfLowerDot += `<div class="dot"></div>`;
            
        }
        
        // for (let index3 = 0; index3 < 28; index3++) {

        //     document.getElementsByClassName("card")[index3].style.position="static";

        // }
        document.getElementById("comCardsId").innerHTML += 
        `
            <div class="cardOfPlayer" id="`+comCards[index].up+`,`+comCards[index].lo+`" onclick="">
                <div class="uplower">
                    <div class="upper">`+noOfUpperDot+`</div>
                    <hr>
                    <div class="lower">`+noOfLowerDot+`</div>
                </div>
            
            </div>
        `;  
    }
}
// function forDrawCards(){
//     bothCards = playerCards.concat(comCards);
//     var uploArr = [];
//     while(drawCards.length < 8){
//         var found = true;
//         while (found){
//             var uploObj =createUpLoObj();
//             // uploArr.push(uploObj);
//             found = bothCards.some((obj,index) => {
//                 if(obj.up === uploObj.up && obj.lo === uploObj.lo){
//                     return true;
//                 }
//                 return false;
//             });

//         }
//         uploArr.push(uploObj);
//         // console.log(uploObj);
        
//         drawCards = uploArr.reduce((finalArray,current) => {
//             var obj = finalArray.find((item) => item.up === current.up && item.lo === current.lo);
        
//             if(obj){
//                 return finalArray;
//             }
//             return finalArray.concat([current]);
//         },[]);  
//     }
//     // console.log(uploArr);
//     // console.log(comCards);
    
//     for (let index = 0; index < drawCards.length; index++) {
//         var noOfUpperDot="";
//         var noOfLowerDot="";
        
//         for (let index1 = 0; index1 < drawCards[index].up; index1++) {
//             noOfUpperDot += `<div class="dot"></div>`;
            
//         }
//         for (let index2 = 0; index2 < drawCards[index].lo; index2++) {
//             noOfLowerDot += `<div class="dot"></div>`;
            
//         }
        
//         // for (let index3 = 0; index3 < 28; index3++) {

//         //     document.getElementsByClassName("card")[index3].style.position="static";
//         //     document.getElementsByClassName("card")[index3].removeAttribute("onclick","whoPlayFirst(this)");

//         // }
//         document.getElementById("drawId").innerHTML += 
//         `
//             <div class="cardOfPlayer" id="`+drawCards[index].up+`,`+drawCards[index].lo+`" onclick= "playerDrawClick(this)">
//                 <div class="uplower">
//                     <div class="upper">`+noOfUpperDot+`</div>
//                     <hr>
//                     <div class="lower">`+noOfLowerDot+`</div>
//                 </div>
            
//             </div>
//         `;  
//     }
// }
function comFirstDraw(){
    var noOfUpperDot="";
    var noOfLowerDot="";
    for (let index1 = 0; index1 < comCards[0].up; index1++) {
        noOfUpperDot += `<div class="dot"></div>`;
        
    }
    for (let index2 = 0; index2 < comCards[0].lo; index2++) {
        noOfLowerDot += `<div class="dot"></div>`;
        
    }
    insertObj.inup = comCards[0].up;
    insertObj.inlo = comCards[0].lo;
    playAreaArr.push(insertObj);

    document.getElementById("playAreaId").innerHTML = 
    `
            <div class="cardOfPlayer" id="`+comCards[0].up+`,`+comCards[0].lo+`" onclick="">
                <div class="uplower">
                    <div class="upper">`+noOfUpperDot+`</div>
                    <hr>
                    <div class="lower">`+noOfLowerDot+`</div>
                </div>
            
            </div>
    `;
    // document.getElementById("drawId").children[0].style.display="none";
    document.getElementById(comCards[0].up+","+comCards[0].lo).style.display = "none";
    
}
function playerDrawClick(obj){
    var noOfUpperDot="";
    var noOfLowerDot="";
    var cardId = obj.id;
    var upNum = cardId.split(",")[0];
    var lowerNum = cardId.split(",")[1];
    if(firstCom){
        console.log('firstCom');
        var lastObj = playAreaArr[playAreaArr.length -1];
        console.log(playAreaArr);
        console.log(lastObj);
        console.log("upNum:"+upNum+","+"lowerNum:"+lowerNum);
        if(lastObj.inup === upNum || lastObj.inup === lowerNum || lastObj.inlo === upNum || lastObj.inlo === lowerNum){
            console.log("match!");
            for (let index1 = 0; index1 < upNum; index1++) {
                noOfUpperDot += `<div class="dot"></div>`;
                
            }
            for (let index2 = 0; index2 < lowerNum; index2++) {
                noOfLowerDot += `<div class="dot"></div>`;
                
            }
            insertObj.inup = upNum;
            insertObj.inlo = lowerNum;
            playAreaArr.push(insertObj);
        
            document.getElementById("playAreaId").innerHTML += 
            `
                    <div class="cardOfPlayer" id="`+upNum+`,`+lowerNum+`" onclick="">
                        <div class="uplower">
                            <div class="upper">`+noOfUpperDot+`</div>
                            <hr>
                            <div class="lower">`+noOfLowerDot+`</div>
                        </div>
                    
                    </div>
            `;
            document.getElementById(obj.id).style.display="none";
            if(lastObj.inup === upNum || lastObj.inlo === upNum){
                document.getElementById(obj.id).style.transform = "rotate(-90deg)";

            }else if(lastObj.inup == lowerNum || lastObj.inlo == lowerNum){
                document.getElementById(obj.id).style.transform = "rotate(-90deg)";
            }
            firstCom = false;
            setTimeout(() => {
                comNextTurn();
                document.getElementById("textId").innerHTML ="Player 1 Turn!";
                
            }, 4000);
            document.getElementById("textId").innerHTML ="Player 2 Turn!";   
        }
        
    } else if(firstPlayer){
        // console.log("firstPlayer");
        var insertObj ={
            "inup": 0,
            "inlo": 0
        }
        for (let index1 = 0; index1 < upNum; index1++) {
            noOfUpperDot += `<div class="dot"></div>`;   
        }
        for (let index2 = 0; index2 < lowerNum; index2++) {
            noOfLowerDot += `<div class="dot"></div>`;  
        }
        insertObj.inup = upNum;
        insertObj.inlo = lowerNum;
        
        playAreaArr.push(insertObj);
        
    
        document.getElementById("playAreaId").innerHTML += 
        `
                <div class="cardOfPlayer" id="`+upNum+`,`+lowerNum+`" onclick="">
                    <div class="uplower">
                        <div class="upper">`+noOfUpperDot+`</div>
                        <hr>
                        <div class="lower">`+noOfLowerDot+`</div>
                    </div>
                
                </div>
        `;
        var removeIndex = playerCards.findIndex(object =>{
            // console.log("removeIndex:"+removeIndex);
            // console.log("object.up:"+object.up);
            // console.log("object.lo:"+ object.lo);
            // console.log(object);
            // console.log(upNum+","+lowerNum);
                     return (object.up == upNum && object.lo == lowerNum) ;

                
            });
            // console.log(playerCards);
            // console.log(obj.id);
            // console.log(removeIndex);
        playerCards.splice(removeIndex,1);
        // console.log(playerCards);
        document.getElementById(obj.id).style.display="none";
        setTimeout(() => {
            comFirstTurn();
            document.getElementById("textId").innerHTML ="Player 1 Turn!";
            
        }, 1000);
        document.getElementById("textId").innerHTML ="Player 2 Turn!";   
        firstPlayer = false;
    }
    else if(firstPlayer == false){
        if(playerCards.length<1){
            document.getElementById("textId").innerHTML ="PLAYER 1 WIN!!!!!!!";
        }
        // console.log("firstPlayer == fasle");
        // console.log(playerCards);
        var lastObj = playAreaArr[playAreaArr.length -1];
        
        if(theLast == "up" && lastObj.inup == upNum || lastObj.inup == lowerNum){
            // console.log("theLast == up");
                var insertObj ={
                    "inup": 0,
                    "inlo": 0
                
                }
                for (let index1 = 0; index1 < upNum; index1++) {
                    noOfUpperDot += `<div class="dot"></div>`;
                    
                }
                for (let index2 = 0; index2 < lowerNum; index2++) {
                    noOfLowerDot += `<div class="dot"></div>`;
                    
                }
                insertObj.inup = upNum;
                insertObj.inlo = lowerNum;
                
                playAreaArr.push(insertObj);
                
                if(lastObj.inup == upNum){
                    theLast = "lower";
                    document.getElementById("playAreaId").innerHTML += 
                    `
                            <div class="cardOfPlayer rotatem90" id="`+upNum+`,`+lowerNum+`" onclick="">
                                <div class="uplower">
                                    <div class="upper">`+noOfUpperDot+`</div>
                                    <hr>
                                    <div class="lower">`+noOfLowerDot+`</div>
                                </div>
                            
                            </div>
                    `;
                }else if(lastObj.inup == lowerNum){
                    theLast = "up";
                    document.getElementById("playAreaId").innerHTML += 
                    `
                            <div class="cardOfPlayer rotate90" id="`+upNum+`,`+lowerNum+`" onclick="">
                                <div class="uplower">
                                    <div class="upper">`+noOfUpperDot+`</div>
                                    <hr>
                                    <div class="lower">`+noOfLowerDot+`</div>
                                </div>
                            
                            </div>
                    `;

                }
                var removeIndex = playerCards.findIndex(object =>{
                    // console.log("removeIndex:"+removeIndex);
                    //     console.log("object.up:"+object.up);
                    //     console.log("object.lo:"+ object.lo);
                    //     console.log(upNum+","+lowerNum);
                    //     console.log(object);
                         return (object.up == upNum && object.lo == lowerNum) ;

                    
                });
                // console.log(playerCards);
                // console.log(obj.id);
                // console.log(removeIndex);
                playerCards.splice(removeIndex,1);
                
                // console.log(playerCards);
                document.getElementById(obj.id).style.display="none";
                setTimeout(() => {
                    // console.log(comCards);
                    // console.log(comCards.length);
                    if(comCards.length<1){
                        document.getElementById("textId").innerHTML ="PLAYER 2 WIN!!!!!!!";
                    }
                    var lastObj = playAreaArr[playAreaArr.length -1];
    var lastNo;               
    if(theLast == "up"){
        lastNo = lastObj.inup;
    }else if(theLast == "lower"){
        lastNo = lastObj.inlo;
    }
    // console.log("lastNo:"+lastNo);
    var notMatchCom = 0;
    // console.log("playerCards.length"+playerCards.length);
    for (let index = 0; index < comCards.length; index++) {
        // console.log("playerCards[index].up:"+playerCards[index].up);
        // console.log("playerCards[index].lo:"+playerCards[index].lo);
        if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
            notMatchCom += 1;
        }
    }
    if(comCards.length != notMatchCom){
        comNextTurn();
        document.getElementById("textId").innerHTML ="Player 1 Turn!";
        var lastObj = playAreaArr[playAreaArr.length -1];
                        var lastNo;
                        // console.log(lastObj);
                        if(theLast == "up"){
                            lastNo = lastObj.inup;
                        }else if(theLast == "lower"){
                            lastNo = lastObj.inlo;
                        }
                        console.log("lastNo:"+lastNo);
                        var notMatch = 0;
                        // console.log("playerCards.length"+playerCards.length);
                        for (let index = 0; index < playerCards.length; index++) {
                            // console.log("playerCards[index].up:"+playerCards[index].up);
                            // console.log("playerCards[index].lo:"+playerCards[index].lo);
                            if(lastNo != playerCards[index].up && lastNo != playerCards[index].lo){
                                notMatch += 1;
                            }
                        }
                        // console.log(notMatch);
                        // if (playerCards.length == notMatch){
                                // window.alert("Match Card Is Not found in PLAYER'S CARDS! TURN TO PLAYER 2!");
                                // document.getElementById("textId").innerHTML ="Player 2 Turn!"; 
                               
                                    
                                    // setTimeout(() => {
                                        // console.log(comCards);
                                        // console.log(comCards.length);
                                        while(playerCards.length == notMatch){
                                            document.getElementById("textId").innerHTML ="Match Card Is Not found in PLAYER'S CARDS! TURN TO PLAYER 2!";
                                            
                                            if(comCards.length<1){
                                                document.getElementById("textId").innerHTML ="PLAYER 2 WIN!!!!!!!";
                                            }
                                            var lastObj = playAreaArr[playAreaArr.length -1];
                                            var lastNo;               
                                            if(theLast == "up"){
                                                lastNo = lastObj.inup;
                                            }else if(theLast == "lower"){
                                                lastNo = lastObj.inlo;
                                            }
                                            // console.log("lastNo:"+lastNo);
                                            var notMatchCom = 0;
                                            // console.log("playerCards.length"+playerCards.length);
                                            for (let index = 0; index < comCards.length; index++) {
                                                // console.log("playerCards[index].up:"+playerCards[index].up);
                                                // console.log("playerCards[index].lo:"+playerCards[index].lo);
                                                if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
                                                    notMatchCom += 1;
                                                }
                                            }
                                            if(comCards.length != notMatchCom){
                                                comNextTurn();
                                            document.getElementById("textId").innerHTML ="Player 1 Turn!";
                                            var notMatch = 0;
                                            var lastObj = playAreaArr[playAreaArr.length -1];
                                            var lastNo;
                                            console.log(lastObj);
                                            if(theLast == "up"){
                                                lastNo = lastObj.inup;
                                            }else if(theLast == "lower"){
                                                lastNo = lastObj.inlo;
                                            }
                                            console.log("lastNo:"+lastNo);
                                            
                                            // console.log("playerCards.length"+playerCards.length);
                                            for (let index = 0; index < playerCards.length; index++) {
                                                // console.log("playerCards[index].up:"+playerCards[index].up);
                                                // console.log("playerCards[index].lo:"+playerCards[index].lo);
                                                if(lastNo != playerCards[index].up && lastNo != playerCards[index].lo){
                                                    notMatch += 1;
                                                }
                                            }
                                            console.log(playerCards.length);
                                            console.log("notMatch:"+notMatch);    

                                            }else{
                                                while(comCards.length == notMatchCom){
                                                    document.getElementById("textId").innerHTML ="Player 1 Turn!"; 
                                                    var lastObj = playAreaArr[playAreaArr.length -1];
    var lastNo;               
    if(theLast == "up"){
        lastNo = lastObj.inup;
    }else if(theLast == "lower"){
        lastNo = lastObj.inlo;
    }
    // console.log("lastNo:"+lastNo);
    var notMatchCom = 0;
    // console.log("playerCards.length"+playerCards.length);
    for (let index = 0; index < comCards.length; index++) {
        // console.log("playerCards[index].up:"+playerCards[index].up);
        // console.log("playerCards[index].lo:"+playerCards[index].lo);
        if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
            notMatchCom += 1;
        }
    }
                                                   
                                                }
                                                
                                            }
                                            
                                        }
                                        document.getElementById("textId").innerHTML ="Player 1 Turn!";  
                                        
                                    // },1000);
                                    console.log(playerCards.length);
                                    console.log("notMatch:"+notMatch);
                                       
                                // }
                                

                            
                        // }
    }else{
        while(comCards.length == notMatchCom){
            document.getElementById("textId").innerHTML ="Player 1 Turn!";    
            var lastObj = playAreaArr[playAreaArr.length -1];
    var lastNo;               
    if(theLast == "up"){
        lastNo = lastObj.inup;
    }else if(theLast == "lower"){
        lastNo = lastObj.inlo;
    }
    // console.log("lastNo:"+lastNo);
    var notMatchCom = 0;
    // console.log("playerCards.length"+playerCards.length);
    for (let index = 0; index < comCards.length; index++) {
        // console.log("playerCards[index].up:"+playerCards[index].up);
        // console.log("playerCards[index].lo:"+playerCards[index].lo);
        if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
            notMatchCom += 1;
        }
    }
            
        }
       
    }
                    
                        
                                    
                },1000);
                document.getElementById("textId").innerHTML ="Player 2 Turn!";   

                               
        }
        else if(theLast == "lower" && lastObj.inlo == upNum || lastObj.inlo == lowerNum){
            // console.log("theLast == lower");
            var insertObj ={
                "inup": 0,
                "inlo": 0
            
            }
            for (let index1 = 0; index1 < upNum; index1++) {
                noOfUpperDot += `<div class="dot"></div>`;
                
            }
            for (let index2 = 0; index2 < lowerNum; index2++) {
                noOfLowerDot += `<div class="dot"></div>`;
                
            }
            insertObj.inup = upNum;
            insertObj.inlo = lowerNum;
            
            playAreaArr.push(insertObj);
            
        
            if(lastObj.inlo == upNum){
                theLast = "lower";
                document.getElementById("playAreaId").innerHTML += 
                `
                        <div class="cardOfPlayer rotatem90" id="`+upNum+`,`+lowerNum+`" onclick="">
                            <div class="uplower">
                                <div class="upper">`+noOfUpperDot+`</div>
                                <hr>
                                <div class="lower">`+noOfLowerDot+`</div>
                            </div>
                        
                        </div>
                `;
            }else if(lastObj.inlo == lowerNum){
                theLast = "up";
                document.getElementById("playAreaId").innerHTML += 
                `
                        <div class="cardOfPlayer rotate90" id="`+upNum+`,`+lowerNum+`" onclick="">
                            <div class="uplower">
                                <div class="upper">`+noOfUpperDot+`</div>
                                <hr>
                                <div class="lower">`+noOfLowerDot+`</div>
                            </div>
                        
                        </div>
                `;

            }
            
             var removeIndex = playerCards.findIndex(object =>{
                // console.log("removeIndex:"+ removeIndex);
                // console.log("object.up:"+object.up);
                // console.log("object.lo:"+ object.lo);
                // console.log(object);
                // console.log(upNum+","+lowerNum);
                         return (object.up == upNum && object.lo == lowerNum) ;

                    
                });
                // console.log(playerCards);
                // console.log(obj.id);
                // console.log(removeIndex);
            playerCards.splice(removeIndex,1);
            // console.log(playerCards);
            document.getElementById(obj.id).style.display="none";
            setTimeout(() => {
                // console.log(comCards);
                // console.log(comCards.length);
                if(comCards.length<1){
                    document.getElementById("textId").innerHTML ="PLAYER 2 WIN!!!!!!!";
                } 
                var lastObj = playAreaArr[playAreaArr.length -1];
                var lastNo;               
                if(theLast == "up"){
                    lastNo = lastObj.inup;
                }else if(theLast == "lower"){
                    lastNo = lastObj.inlo;
                }
                // console.log("lastNo:"+lastNo);
                var notMatchCom = 0;
                // console.log("playerCards.length"+playerCards.length);
                for (let index = 0; index < comCards.length; index++) {
                    // console.log("playerCards[index].up:"+playerCards[index].up);
                    // console.log("playerCards[index].lo:"+playerCards[index].lo);
                    if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
                        notMatchCom += 1;
                    }
                }
                if(comCards.length != notMatchCom) {
                    comNextTurn();
                    document.getElementById("textId").innerHTML ="Player 1 Turn!";    
                    var lastObj = playAreaArr[playAreaArr.length -1];
                    var lastNo;
                        // console.log(lastObj);
                        if(theLast == "up"){
                            lastNo = lastObj.inup;
                        }else if(theLast == "lower"){
                            lastNo = lastObj.inlo;
                        }
                        // console.log("lastNo:"+lastNo);
                        var notMatch = 0;
                        // console.log("playerCards.length"+playerCards.length);
                        for (let index = 0; index < playerCards.length; index++) {
                            // console.log("playerCards[index].up:"+playerCards[index].up);
                            // console.log("playerCards[index].lo:"+playerCards[index].lo);
                            if(lastNo != playerCards[index].up && lastNo != playerCards[index].lo){
                                notMatch += 1;
                            }
                        }
                        // console.log(notMatch);    
                        while(playerCards.length == notMatch){
                            var notMatch = 0;
                            document.getElementById("textId").innerHTML ="Match Card Is Not found in PLAYER'S CARDS! TURN TO PLAYER 2!";   
                            // console.log(notMatch);
                            // window.alert("Match Card Is Not found in PLAYER'S CARDS! TURN TO PLAYER 2!");
                            // document.getElementById("textId").innerHTML ="Player 2 Turn!"; 
                            // setTimeout(() => {
                        //         console.log(comCards);
                        // console.log(comCards.length);
    
                                if(comCards.length<1){
                                    document.getElementById("textId").innerHTML ="PLAYER 2 WIN!!!!!!!";
                                }
                                var lastObj = playAreaArr[playAreaArr.length -1];
                                var lastNo;               
                                if(theLast == "up"){
                                    lastNo = lastObj.inup;
                                }else if(theLast == "lower"){
                                    lastNo = lastObj.inlo;
                                }
                                // console.log("lastNo:"+lastNo);
                                var notMatchCom = 0;
                                // console.log("playerCards.length"+playerCards.length);
                                for (let index = 0; index < comCards.length; index++) {
                                    // console.log("playerCards[index].up:"+playerCards[index].up);
                                    // console.log("playerCards[index].lo:"+playerCards[index].lo);
                                    if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
                                        notMatchCom += 1;
                                    }
                                }
                                if(comCards.length != notMatchCom){
                                    comNextTurn();
                                    document.getElementById("textId").innerHTML ="Player 1 Turn!";
                                    var lastObj = playAreaArr[playAreaArr.length -1];
                                    var lastNo;
                                    console.log(lastObj);
                                    if(theLast == "up"){
                                        lastNo = lastObj.inup;
                                    }else if(theLast == "lower"){
                                        lastNo = lastObj.inlo;
                                    }
                                    console.log("lastNo:"+lastNo);
                                    
                                    // console.log("playerCards.length"+playerCards.length);
                                    for (let index = 0; index < playerCards.length; index++) {
                                        console.log("playerCards[index].up:"+playerCards[index].up);
                                        console.log("playerCards[index].lo:"+playerCards[index].lo);
                                        if(lastNo != playerCards[index].up && lastNo != playerCards[index].lo){
                                            notMatch += 1;
                                        }
                                    }
                                    console.log(playerCards.length);
                                    console.log("notMatch:"+notMatch);
                                // }, 1000);
                                    console.log(playerCards.length);
                                    console.log("notMatch:"+ notMatch);
                                
        

                                }else{
                                    while(comCards.length == notMatchCom){
                                        document.getElementById("textId").innerHTML ="Player 1 Turn!"; 
                                        var lastObj = playAreaArr[playAreaArr.length -1];
                                        var lastNo;               
                                        if(theLast == "up"){
                                        lastNo = lastObj.inup;
                                        }else if(theLast == "lower"){
                                        lastNo = lastObj.inlo;
                                        }
                                        // console.log("lastNo:"+lastNo);
                                        var notMatchCom = 0;
                                        // console.log("playerCards.length"+playerCards.length);
                                        for (let index = 0; index < comCards.length; index++) {
                                        // console.log("playerCards[index].up:"+playerCards[index].up);
                                        // console.log("playerCards[index].lo:"+playerCards[index].lo);
                                        if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
                                        notMatchCom += 1;
                                        }
                                        }
                                    }
                                                                            

                                }
                               
    
                        }
                        document.getElementById("textId").innerHTML ="Player 1 Turn!";  

                } 
                else{
                    while(comCards.length == notMatchCom){
                        document.getElementById("textId").innerHTML ="Player 1 Turn!"; 
                        var lastObj = playAreaArr[playAreaArr.length -1];
                        var lastNo;               
                        if(theLast == "up"){
                        lastNo = lastObj.inup;
                        }else if(theLast == "lower"){
                        lastNo = lastObj.inlo;
                        }
                        // console.log("lastNo:"+lastNo);
                        var notMatchCom = 0;
                        // console.log("playerCards.length"+playerCards.length);
                        for (let index = 0; index < comCards.length; index++) {
                        // console.log("playerCards[index].up:"+playerCards[index].up);
                        // console.log("playerCards[index].lo:"+playerCards[index].lo);
                        if(lastNo != comCards[index].up && lastNo != comCards[index].lo){
                        notMatchCom += 1;
                        }
                        }
                    }
                    
                } 
               
                
            }, 1000);
            document.getElementById("textId").innerHTML ="Player 2 Turn!";   

        }
    }
    else{
        window.alert("YOU CLICK WRONG CARD!");
    }      
} 
function comFirstTurn(){
    var insertObj ={
        "inup": 0,
        "inlo": 0
    }
    var noOfUpperDot ="";
    var noOfLowerDot = "";
   
    var lastObj = playAreaArr[playAreaArr.length -1];
    var searchObj = comCards.find((obj) => obj.up == lastObj.inlo || obj.lo == lastObj.inup || obj.up == lastObj.inup || obj.lo == lastObj.inlo);
    
    // console.log(lastObj);
    // console.log(playAreaArr);
    // console.log(comCards);
    // console.log("searchObj.up+","+searchObj.lo:"+searchObj.up+","+searchObj.lo);
    // console.log(searchObj);
    
    for (let index1 = 0; index1 < searchObj.up; index1++) {
        noOfUpperDot += `<div class="dot"></div>`;
        
    }
    for (let index2 = 0; index2 < searchObj.lo; index2++) {
        noOfLowerDot += `<div class="dot"></div>`;
        
    }
    if(lastObj.inup == searchObj.up || lastObj.inlo == searchObj.up ){
       theLast = "lower";
        // document.getElementById(insertObj.inup+","+insertObj.inlo).style.transform = "rotate(-90deg)";
        document.getElementById("playAreaId").innerHTML += 
        `
            <div class="cardOfPlayer rotatem90" id="`+searchObj.up+`,`+searchObj.lo+`" onclick="">
                <div class="uplower">
                    <div class="upper">`+noOfUpperDot+`</div>
                    <hr>
                    <div class="lower">`+noOfLowerDot+`</div>
                </div>
            
            </div>
        `;  

    }else if(lastObj.inup == searchObj.lo || lastObj.inlo == searchObj.lo ){
        theLast = "up";
        // document.getElementById(insertObj.inup+","+insertObj.inlo).style.transform = "rotate(90deg)";
        document.getElementById("playAreaId").innerHTML += 
        `
            <div class="cardOfPlayer rotate90" id="`+searchObj.up+`,`+searchObj.lo+`" onclick="">
                <div class="uplower">
                    <div class="upper">`+noOfUpperDot+`</div>
                    <hr>
                    <div class="lower">`+noOfLowerDot+`</div>
                </div>
            
            </div>
        `;  
    }
   
    insertObj.inup = searchObj.up;
    insertObj.inlo = searchObj.lo;
    playAreaArr.push(insertObj);
    console.log("comCards");
        console.log(comCards);
        console.log(searchObj);
    var removeIndex = comCards.indexOf(searchObj);
    comCards.splice(removeIndex,1);
    console.log("removeINdex:"+removeIndex);
        console.log(comCards);
    // console.log(comCards);
    // console.log("removeIndex"+removeIndex);
    // console.log(searchObj);
    document.getElementById(searchObj.up+","+searchObj.lo).style.display="none";
    

}
function comNextTurn(){
    var insertObj ={
        "inup": 0,
        "inlo": 0
    }
    var noOfUpperDot ="";
    var noOfLowerDot = "";
    var lastObj = playAreaArr[playAreaArr.length -1];
    console.log("theLast:"+theLast);
    if(theLast == "up"){
        var searchObj = comCards.find((obj) => obj.up == lastObj.inup || obj.lo == lastObj.inup);
        console.log("theLast == up");
        console.log(searchObj);
        for (let index1 = 0; index1 < searchObj.up; index1++) {
            noOfUpperDot += `<div class="dot"></div>`;
            
        }
        for (let index2 = 0; index2 < searchObj.lo; index2++) {
            noOfLowerDot += `<div class="dot"></div>`;
            
        }
        if(lastObj.inup == searchObj.up){
        theLast = "lower";
            // document.getElementById(insertObj.inup+","+insertObj.inlo).style.transform = "rotate(-90deg)";
            document.getElementById("playAreaId").innerHTML += 
            `
                <div class="cardOfPlayer rotatem90" id="`+searchObj.up+`,`+searchObj.lo+`" onclick="">
                    <div class="uplower">
                        <div class="upper">`+noOfUpperDot+`</div>
                        <hr>
                        <div class="lower">`+noOfLowerDot+`</div>
                    </div>
                
                </div>
            `;  
    
        }else if(lastObj.inup == searchObj.lo){
            theLast = "up";
            // document.getElementById(insertObj.inup+","+insertObj.inlo).style.transform = "rotate(90deg)";
            document.getElementById("playAreaId").innerHTML += 
            `
                <div class="cardOfPlayer rotate90" id="`+searchObj.up+`,`+searchObj.lo+`" onclick="">
                    <div class="uplower">
                        <div class="upper">`+noOfUpperDot+`</div>
                        <hr>
                        <div class="lower">`+noOfLowerDot+`</div>
                    </div>
                
                </div>
            `;  
        }
    
        insertObj.inup = searchObj.up;
        insertObj.inlo = searchObj.lo;
        playAreaArr.push(insertObj);
        console.log("comCards");
        console.log(comCards);
        console.log(searchObj);
        var removeIndex = comCards.indexOf(searchObj);
        comCards.splice(removeIndex,1);
        console.log("removeINdex:"+removeIndex);
        console.log(comCards);
        document.getElementById(searchObj.up+","+searchObj.lo).style.display="none";

    }else if(theLast == "lower"){
        
        var searchObj = comCards.find((obj) => obj.up == lastObj.inlo || obj.lo == lastObj.inlo);
        console.log("theLast == lower");
        console.log(searchObj);
        for (let index1 = 0; index1 < searchObj.up; index1++) {
            noOfUpperDot += `<div class="dot"></div>`;
            
        }
        for (let index2 = 0; index2 < searchObj.lo; index2++) {
            noOfLowerDot += `<div class="dot"></div>`;
            
        }
        if(lastObj.inlo == searchObj.up){
        theLast = "lower";
            // document.getElementById(insertObj.inup+","+insertObj.inlo).style.transform = "rotate(-90deg)";
            document.getElementById("playAreaId").innerHTML += 
            `
                <div class="cardOfPlayer rotatem90" id="`+searchObj.up+`,`+searchObj.lo+`" onclick="">
                    <div class="uplower">
                        <div class="upper">`+noOfUpperDot+`</div>
                        <hr>
                        <div class="lower">`+noOfLowerDot+`</div>
                    </div>
                
                </div>
            `;  
    
        }else if(lastObj.inlo == searchObj.lo){
            theLast = "up";
            // document.getElementById(insertObj.inup+","+insertObj.inlo).style.transform = "rotate(90deg)";
            document.getElementById("playAreaId").innerHTML += 
            `
                <div class="cardOfPlayer rotate90" id="`+searchObj.up+`,`+searchObj.lo+`" onclick="">
                    <div class="uplower">
                        <div class="upper">`+noOfUpperDot+`</div>
                        <hr>
                        <div class="lower">`+noOfLowerDot+`</div>
                    </div>
                
                </div>
            `;  
        }
        
        insertObj.inup = searchObj.up;
        insertObj.inlo = searchObj.lo;
        playAreaArr.push(insertObj);
        console.log("comCards");
        console.log(comCards);
        console.log(searchObj);
        var removeIndex = comCards.indexOf(searchObj);
        comCards.splice(removeIndex,1);
        console.log("removeINdex:"+removeIndex);
        console.log(comCards);
        
        document.getElementById(searchObj.up+","+searchObj.lo).style.display="none";
    }
}
function whoPlayFirst(obj){
    if(afterStart){
        var totalcomNum;
        var upNumOfCom;
        var loNumOfCom;
        var totaldrawNum = draw(obj);
        var upandloOfCom;
        var upNumOfCom;
        var loNumOfCom;
        setTimeout(() => {
            upandloOfCom = computer(); 
            upNumOfCom = upandloOfCom.split(",")[0];
            loNumOfCom = upandloOfCom.split(",")[1];
            totalcomNum = Number(upNumOfCom) + Number(loNumOfCom);  
            // console.log("player and computer " +totaldrawNum+","+ totalcomNum);
            if(totaldrawNum > totalcomNum){
                current = playerTurn;
                fromDraw = true;
                document.getElementById("textId").innerHTML ="Draw first card by Player 1!";
            }else if(totaldrawNum < totalcomNum){
                current = computerTurn;
                document.getElementById("textId").innerHTML = "Draw first card by Player 2!";
            }else if(totaldrawNum == totalcomNum){
                document.getElementById("textId").innerHTML = "Number are the same! Draw Again";
                setTimeout(() => {
                    document.getElementById(obj.id).style.display = "none";
                    document.getElementById(upNumOfCom+","+loNumOfCom).style.display = "none";      
                }, 2000);
                
            }
            if( totaldrawNum != totalcomNum){
                setTimeout(() => {
                    for (let index = 0; index < 28; index++) {
                        document.getElementsByClassName("card")[index].style.display="none";
                    }
                    document.getElementById("ranId").style.display="none";

                    forPlayerCards();
                    forComCards();
                    forDrawCards(); 
                    afterStart = false;
                    // document.getElementById("textId").innerHTML ="";
                }, 2000);
            
            }
            
            if(current == computerTurn){
                setTimeout(() => {
                    comFirstDraw(); 
                    firstCom = true; 
                    document.getElementById("textId").innerHTML ="Player 1 Turn!";
                }, 3000);
                
            }else if(current == playerTurn){
                firstPlayer = true;
            }
        }, 1000);
    }     
}

