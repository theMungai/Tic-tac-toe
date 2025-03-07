const gameContainer = document.querySelector(".game-container");
const gridCells = document.querySelectorAll(".grid-cell");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector(".restart-btn");

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]


let options = ["","","","","","","","",""];
let currentPlayer = `<i class="fa-solid fa-xmark"></i>`
let running = false;


initializeGame()
function initializeGame (){
    gridCells.forEach((cell) => {
        cell.addEventListener("click", cellClicked);
    })
    restartBtn.addEventListener("click",restartGame);
    statusText.innerHTML = `${currentPlayer}'s turn`;
    running = true
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return
    }

    updateCell(this, cellIndex);
    checkWinner()
}

function updateCell(cell, index){
    options[index] = currentPlayer
    cell.innerHTML = currentPlayer
}

function changePlayer(){
    if(currentPlayer === `<i class="fa-solid fa-xmark"></i>`){
        currentPlayer = `<i class="fa-solid fa-o"></i>`
    }
    else{
        currentPlayer = `<i class="fa-solid fa-xmark"></i>`
    }

    statusText.innerHTML = `${currentPlayer}'s turn`
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i <winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if (cellA === "" || cellB === "" || cellC === ""){
            continue
        }

        if(cellA ===  cellB && cellB === cellC){
            roundWon = true;
            break
        }
    }

    if(roundWon){
        statusText.innerHTML = `${currentPlayer} wins`;
        running = false
        gameContainer.classList.add("js-animate-board");
    }
    else if(!options.includes("")){
        statusText.textContent = "Draw";
        running = false
    }

    else{
        changePlayer()
    }
}

function restartGame(){
    options = ["","","","","","","","",""];
    currentPlayer = `<i class="fa-solid fa-xmark"></i>`
    statusText.innerHTML = `${currentPlayer}'s turn`
    gameContainer.classList.remove("js-animate-board");

    gridCells.forEach((cell) => {
        cell.innerHTML = ""
        running = true;
    })
}