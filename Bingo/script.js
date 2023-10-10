var r1 = [0,0,0,0];
var r2 = [0,0,0,0];
var r3 = [0,0,0,0];
var r4 = [0,0,0,0];

var firstPlayer =1;
var secondPlayer = 2;
var current = firstPlayer;
var finished = false;

var turn = document.getElementById("turn");
var winner = document.getElementById("winner");

function flip(obj){
    if(finished == false){
        var clickCell = obj.id.split(",");
    var clickRow = Number(clickCell[0]);
    var clickCol = Number(clickCell[1]-1);
    var valid = true;
    
    switch(clickRow){
        case 1:
            if(r1[clickCol] != 0){
                valid = false;
                break;
            }
            r1[clickCol] = current;
            break;
        case 2:
            if(r2[clickCol] != 0){
                valid = false;
                break;
            }
            r2[clickCol] = current;

            break;
        case 3:
            if(r3[clickCol] != 0){
                valid = false;
                break;
            }
            r3[clickCol] = current;

            break;
        case 4:
            if(r4[clickCol] != 0){
                valid = false;
                break;
            }
            r4[clickCol] = current;

            break;
    }
    if(valid){
        obj.style.transform = "scaleY(-1)";
       if(current == firstPlayer){
        setTimeout(() => {
            computer();
        }, 1000);
        
        turn.innerHTML="Player 2 Turn!";
        turn.style.color="yellow";
        obj.style.background = "red";
        current = secondPlayer;
       }else{
        turn.innerHTML = "Player 1 Turn!";
        turn.style.color="red";
        obj.style.background="yellow";
        current = firstPlayer;
       }
    } 
    whoWin();

    }
    
}
function computer(){
    var row = Math.floor(Math.random()*4 +1);
    var col = Math.floor(Math.random()*4 +1);
        while((row == 1 && r1[col-1] != 0) ||
        (row == 2 && r2[col-1] != 0) ||
        (row == 3 && r3[col-1] != 0) ||
        (row == 4 && r4[col-1] != 0)){
            row = Math.floor(Math.random()*4 +1);
            col = Math.floor(Math.random()*4 +1); 
        }

    var rand = row +","+ col;
    document.getElementById(rand).click();
}

function whoWin(){
    //vertical
   if(verticalCheckPlayer(firstPlayer) == true){
    finished = true;
    winner.innerText="Player 1 Win";

   }else if(verticalCheckPlayer(secondPlayer) == true){
    finished = true;
    winner.innerText= "Player 2 Win";
   }
    
    //horizontal
    if(horizontalCheckPlayer(firstPlayer) == true){
        finished = true;
        winner.innerText="Player 1 Win";
    
       }else if(horizontalCheckPlayer(secondPlayer) == true){
        finished = true;
        winner.innerText= "Player 2 Win";
       }
    //diagonal
    if(diagonalCheckPlayer(firstPlayer) == true){
        finished = true;
        winner.innerText="Player 1 Win";
    
       }else if(diagonalCheckPlayer(secondPlayer) == true){
        finished = true;
        winner.innerText= "Player 2 Win";
       }
}
function verticalCheckPlayer(player){
    for (let index = 0; index < 4; index++) {
        if(r1[index] == player && 
            r2[index] == player &&
            r3[index] == player && 
            r4[index] == player){
                return true;
            }
        
    }
    return false;
}
function horizontalCheckPlayer(player){
    var hr1 = 0;
    var hr2 = 0;
    var hr3 = 0;
    var hr4 = 0;
        for (let index = 0; index < 4; index++) {
            if(r1[index] == player){
                hr1 += 1; 
            }
            else if(r2[index] == player){
                hr2 +=1;
            }
            else if(r3[index] == player){
                hr3 += 1;
            }
            else if (r4[index] == player){
                hr4 += 1;
            }
        }
    
    if(hr1 == 4 || hr2 == 4 || hr3 == 4 || hr4 == 4){
        return true;
    }
    else{
        false;
    }
}
function diagonalCheckPlayer(player){
    var index = 0;
    if(r1[index] == player &&
        r2[index +1] == player &&
        r3[index + 2] == player &&
        r4[index + 3] == player){
            return true;
    }else if(r1[index +3] == player &&
        r2[index + 2] == player &&
        r3[index + 1] == player &&
        r4[index] == player){
            return true;
    }
    else{
        return false;
    }
}

