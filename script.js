const box = document.querySelectorAll(".box");





function game(){
let turn = 0;
console.log(turn)

box.forEach(box =>{

    
    box.addEventListener("click", function(){
        if(turn === 0){
             box.style.background = "red"
            console.log(turn);
            return turn++;

        }else{
            box.style.background = "blue"
            console.log(turn);
            return turn--;

        }
    })
})

}

game();