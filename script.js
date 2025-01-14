const gridCells = document.querySelectorAll(".grid-cell");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector(".button-3d");
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
