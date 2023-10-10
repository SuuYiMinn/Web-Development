var mine1;
var mine2;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var p11;
var p12;
var p13;
var p14;
var p15;
var p16;
var p17;
var p18;

var gameFinished = false;

function mineBuild(){
    var row = Math.floor(Math.random()*6+1 );
    var col = Math.floor(Math.random()*6+1 );
    mine1 = row+ "" +col;
    var row1 = Math.floor(Math.random()*6+1);
    var col1 = Math.floor(Math.random()*6+1);
    mine2 = row1+""+col1;

    p1 = (row - 1) +""+ (col -1);
    p2 = (row - 1) +""+ col;
    p3 = (row - 1) +""+ (col + 1);
    p4 = row +""+ (col -1);
    p5 = row +""+ (col +1);
    p6 = (row + 1) +""+ (col -1);
    p7 = (row +1)+""+col;
    p8 = (row +1)+""+ (col +1);

    p11 = (row1 - 1) +""+ (col1 -1);
    p12 = (row1 - 1) +""+ col1;
    p13 = (row1 - 1) +""+ (col1 + 1);
    p14 = row1 +""+ (col1 -1);
    p15 = row1 +""+ (col1 +1);
    p16 = (row1 + 1) +""+ (col1 -1);
    p17 = (row1 +1)+""+col1;
    p18 = (row1 +1)+""+ (col1 +1);
   
    console.log(mine1);
    console.log(mine2);
    
}
function pressBtn(cell){
    if(gameFinished == false){
        var userClick = Number(cell.id);
        var rowCol = cell.id;
        var clickRow = Number(rowCol.charAt(0));
        
        var clickColum = Number(rowCol.charAt(1));
        console.log(clickRow);
        console.log(clickColum);
        var around21 = (clickRow - 1) +""+ (clickColum -1);
            var around22 = (clickRow - 1) +""+ clickColum;
            var around23 = (clickRow - 1) +""+ (clickColum + 1);
            var around24 = clickRow +""+ (clickColum -1);
            var around25 = clickRow +""+ (clickColum +1);
            var around26 = (clickRow + 1) +""+ (clickColum -1);
            var around27 = (clickRow +1)+""+clickColum;
            var around28 = (clickRow +1)+""+ (clickColum +1);

        //mine touch
        if(userClick == mine1 || userClick == mine2){
            cell.style.backgroundColor = "red";
            cell.innerText ="BOOM";
            overdisplay();
            document.getElementById("gameOver").play();

        }else if(
            userClick == p1 ||
            userClick == p2 ||
            userClick == p3 ||
            userClick == p4 ||
            userClick == p5 ||
            userClick == p6 ||
            userClick == p7 ||
            userClick == p8 ||
            userClick == p11 ||
            userClick == p12 ||
            userClick == p13 ||
            userClick == p14 ||
            userClick == p15 ||
            userClick == p16 ||
            userClick == p17 ||
            userClick == p18){
                if((around21 == mine1 ||
                    around22 == mine1 ||
                    around23 == mine1 ||
                    around24 == mine1 ||
                    around25 == mine1 ||
                    around26 == mine1 ||
                    around27 == mine1 ||
                    around28 == mine1
                    ) &&
                    (around21 == mine2 ||
                        around22 == mine2 ||
                        around23 == mine2 ||
                        around24 == mine2 ||
                        around25 == mine2 ||
                        around26 == mine2 ||
                        around27 == mine2 ||
                        around28 == mine2
                        )){
                            cell.innerText ="2";
                        }
                    else{
                        cell.innerText="1";
                    }
            // arround mine 
            
            
                cell.style.backgroundColor = "red";
            

            document.getElementById("clickSound").play();
            var clickFinished = 0;
            for (let index = 0; index < 36; index += 1) {
                    
                if(document.getElementsByClassName("cell")[index].style.backgroundColor == "red" ||
                    document.getElementsByClassName("cell")[index].style.backgroundColor == "teal"){
                        clickFinished += 1;
                }
            }
                if(userClick != mine1 && userClick != mine2 && clickFinished == "34"){
                    displayWin();

                }
                else{ }    
            
            
            
            
           

        }else{
             // clear
             cell.style.backgroundColor = "teal";
              var clickFinished = 0;
            for (let index = 0; index < 36; index += 1) {
                    
                if(document.getElementsByClassName("cell")[index].style.backgroundColor == "red" ||
                    document.getElementsByClassName("cell")[index].style.backgroundColor == "teal"){
                        clickFinished += 1;
                }
            }
                if(userClick != mine1 && userClick != mine2 && clickFinished == "34"){
                    displayWin();
                }
                else{ }    
            
            
        }
        
        
        

    }
    
}
function overdisplay(){
    gameFinished = true;


    for (let index = 0; index < 36; index++) {
        document.getElementsByClassName("cell")[index].style.backgroundColor = "red";
        
        
    }
    document.getElementById("32").innerText = "G";
        document.getElementById("33").innerText = "A";
        document.getElementById("34").innerText = "M";
        document.getElementById("35").innerText = "E";
        document.getElementById("42").innerText = "O";
        document.getElementById("43").innerText = "V";
        document.getElementById("44").innerText = "E";
        document.getElementById("45").innerText = "R";
}

function displayWin(){
    gameFinished = true;


    for (let index = 0; index < 36; index++) {
        document.getElementsByClassName("cell")[index].style.backgroundColor = "teal";
        
        
    }
    document.getElementById("32").innerText = "G";
        document.getElementById("33").innerText = "A";
        document.getElementById("34").innerText = "M";
        document.getElementById("35").innerText = "E";
        document.getElementById("42").innerText = "W";
        document.getElementById("43").innerText = "I";
        document.getElementById("44").innerText = "N";
        

}
