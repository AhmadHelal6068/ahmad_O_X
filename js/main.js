var p1 = "PLAYER - 1";
var p2 = "PLAYER - 2";
function changeName(){
    p1 = prompt("Your Name : 'X' !!");
    p2 = prompt("Your Name : 'O' !!");

    var str1 =`<span>${ p1 + " : X"}</span>`;
    var str2 =`<span>${ p2 + " : O"}</span>`;
    document.getElementById("result").innerHTML = str1 + "<br>" + str2;
    document.getElementById("result").style.color = "#333";
    document.getElementById("result").style.display = "flex";
    document.getElementById("result").style.justifyContent = "space-between";
}




let title = document.querySelector(".title");
let turn = 'x';
let squares = [];

function end(num1, num2, num3){
    title.innerHTML = `${squares[num1]} winer`;
    document.getElementById("item" + num1).style.background = "#498afb";
    document.getElementById("item" + num2).style.background = "#498afb";
    document.getElementById("item" + num3).style.background = "#498afb";

    setInterval(function(){title.innerHTML += '.'}, 1000);
    setTimeout(function(){location.reload()}, 4000)
}

function winner(){
    for(let i=1; i<10; i++){
        squares[i] = document.getElementById("item" + i).innerHTML;
    }


    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ""){
        end(1, 2, 3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ""){
        end(4, 5, 6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ""){
        end(7, 8, 9);
    }


    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ""){
        end(1, 4, 7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != ""){
        end(2, 5, 8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != ""){
        end(3, 6, 9);
    }


    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != ""){
        end(1, 5, 9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ""){
        end(3, 5, 7);
    }
}

function game(id){
    let element = document.getElementById(id);
    if(turn === "x" && element.innerHTML === ""){
        element.innerHTML = "x";
        turn = "o";
        title.innerHTML = "o"
    }else if(turn === "o" && element.innerHTML === ""){
        element.innerHTML = "o";
        turn = "x";
        title.innerHTML = "x";
    }
    winner();
}

//  replay game
function replay(){
    window.location.reload();
}