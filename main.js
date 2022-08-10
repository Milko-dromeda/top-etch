let color="black"

function fillBoard(size){
let board = document.querySelector(".board")
let squares = board.querySelectorAll("div")
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows = `repeat(${size}, 1fr)`

let amount = size*size; 
for(let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare); 
    square.style.background = "gray";
    board.insertAdjacentElement("beforeend", square);   
}
}

function changeSize(input){
    if (input >= 2 && input <= 100) {
    fillBoard(input);
} else {
    console.log("ERROR");
}
}

function colorSquare(){
    this.style.backgroundColor = color;
}

function changeColor(choice){
    color = choice; 
}

