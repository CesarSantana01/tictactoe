const box = document.querySelectorAll(".box");

const winningScreen = document.querySelector(".winningScreen");

const playAgain = document.querySelector(".playAgain");

const para = document.querySelector("p");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

function game(){
    player1.style.transition = "ease .5s";
    player1.style.transform = "scale(1.03)";
    player1.style.background = "rgb(220, 78, 248)";

    player2.style.transform = "scale(1)";
    player2.style.background = "rgb(152, 94, 223)";

    row1 = [];
    row2 = [];
    row3 = [];

    box.textContent = "";
    box1.textContent = "";
    box2.textContent = "";
    box3.textContent = "";
    box4.textContent = "";
    box5.textContent = "";
    box6.textContent = "";
    box7.textContent = "";
    box8.textContent = "";
    box9.textContent = "";

    let turn = 0;
    let counter = 0;
    let whosturn = 0;
    
box.forEach(box =>{
    
    box.addEventListener("click", function(){
        if(turn === 0 && box.textContent === "" ){
             box.style.background = "rgb(68, 28, 149)"
             box.textContent = "X"
             counter++;
            turn++; 
            player2.style.transition = "ease .5s";
            player2.style.transform = "scale(1.03)";
            player2.style.background = "rgb(220, 78, 248)";

            player1.style.transform = "scale(1)";
            player1.style.background = "rgb(98, 75, 187)";

            
        }else if(box.textContent === ""){
            box.style.background = "rgb(68, 28, 149)"
            box.textContent = "O"
            
            counter++;
            turn--;
            
            player1.style.transition = "ease .5s";
            player1.style.transform = "scale(1.03)";
            player1.style.background = "rgb(220, 78, 248)";

            player2.style.transform = "scale(1)";
            player2.style.background = "rgb(152, 94, 223)";
           
        }
        
        let row1 = [box1.textContent,box2.textContent,box3.textContent];
        let row2 = [box4.textContent,box5.textContent,box6.textContent];
        let row3 = [box7.textContent,box8.textContent,box9.textContent];   
        
        if(
            (row1[0] == "X" && row1[1] == "X" && row1[2] == "X")||
            (row2[0] == "X" && row2[1] == "X" && row2[2] == "X")||
            (row3[0] == "X" && row3[1] == "X" && row3[2] == "X")||
            (row1[0] == "X" && row2[0] == "X" && row3[0] == "X")||
            (row1[1] == "X" && row2[1] == "X" && row3[1] == "X")||
            (row1[2] == "X" && row2[2] == "X" && row3[2] == "X")||
            (row1[0] == "X" && row2[1] == "X" && row3[2] == "X")||
            (row1[2] == "X" && row2[1] == "X" && row3[0] == "X")
        ){   
            winningScreen.style.display = "block";
            para.textContent = "p1 wins!";
            counter = 0;
            turn=0
            whosturn = 0

            
        }else if(
            (row1[0] == "O" && row1[1] == "O" && row1[2] == "O")||
            (row2[0] == "O" && row2[1] == "O" && row2[2] == "O")||
            (row3[0] == "O" && row3[1] == "O" && row3[2] == "O")||
            (row1[0] == "O" && row2[0] == "O" && row3[0] == "O")||
            (row1[1] == "O" && row2[1] == "O" && row3[1] == "O")||
            (row1[2] == "O" && row2[2] == "O" && row3[2] == "O")||
            (row1[0] == "O" && row2[1] == "O" && row3[2] == "O")||
            (row1[2] == "O" && row2[1] == "O" && row3[0] == "O")
        ){
            winningScreen.style.display = "block";
            para.textContent = "p2 wins!";
            counter = 0;
            turn=0;
            whosturn=0;
         
        }else if(counter == 9){
            winningScreen.style.display = "block";
            para.textContent = "Tie";
            counter = 0;
            turn=0;
            whosturn=0;
           
        }
       
       
    })
})
}
playAgain.addEventListener("click", function(){
    winningScreen.style.display = "none";
    box.forEach(box =>{box.style.background = "rgb(88, 36, 192)";});
    
    game();
})


game();
