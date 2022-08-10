let color="black";
let click="true";

function fillBoard(size){
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size*size; 
for(let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare); 
    square.style.background = "white";
    board.insertAdjacentElement("beforeend", square);   
}
}

function changeSize(input){
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.display = "none";
    fillBoard(input);
} else {
    document.querySelector(".error").style.display = "flex";
}
}

function colorSquare(){
    if (click) {
    this.style.backgroundColor = color;
}
}
function changeColor(choice){
    color = choice; 
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.background = "white");
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
    if (click) {
        document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
    }
});