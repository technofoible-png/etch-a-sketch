const main = document.querySelector(".main");
const reset = document.querySelector(".reset");
const newbtn = document.querySelector(".newbtn");

// Default state on page load
makeGrid(10);

// Colors in grid
function drawOn(event) {
    event.target.classList.add("marked");
}

// Reset button handler
reset.addEventListener("click", clearBoard);

// Change grid button handler
newbtn.addEventListener("click", newGrid);

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

// Removes old grid, asks for size to make grid
function newGrid () {
    let gridItems = document.querySelectorAll(".pad");
    gridItems.forEach(gridItem => gridItem.remove());

    let size = prompt("Choose a new grid size:");
    if (size > 100) {
        alert("Selection too large.")
        return newGrid();
    } else if (size === null) {
        makeGrid(16);
    } else {
        makeGrid(size);
    }
}