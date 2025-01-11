const gridCells = document.querySelectorAll(".grid-cell");
gridCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const firstMove = cell.querySelector(".fa-xmark");
        firstMove.style.display = "block"
        const nextPlayerMove = cell.querySelector(".fa-o");
        cell.classList.add("remove-first-move")
        cell.classList.toggle("next-move");
    })
})