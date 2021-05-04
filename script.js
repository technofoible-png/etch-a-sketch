const main = document.querySelector(".main");
const reset = document.querySelector(".reset");



// Colors in grid
function drawOn(event) {
    event.target.classList.add("marked");
}

// Reset button handler
reset.addEventListener("click", clearBoard);

// Erases the grid
function clearBoard () {
    let gridItems = document.querySelectorAll(".marked");
    gridItems.forEach(gridItem => gridItem.classList.remove("marked"));
}

// Creates a grid with specified number rows & cols
function makeGrid (size) {
    let gridArea = size * size;
    for (let i=0; i < gridArea; i++) {
        const pad = document.createElement("div");
        pad.classList.add("pad");
        main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        pad.addEventListener("mouseover", drawOn);
        main.appendChild(pad);
    }
}