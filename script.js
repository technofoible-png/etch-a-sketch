const main = document.querySelector(".main");
const reset = document.querySelector(".reset");

for (let i=0; i < 16; i++) {
    const pad = document.createElement("div");
    pad.classList.add("pad");
    pad.addEventListener("mouseover", drawOn);
    main.appendChild(pad);
}

function drawOn(event) {
    event.target.classList.add("marked");
}

reset.addEventListener("click", clearBoard);

function clearBoard () {
    let mmmm = document.querySelectorAll(".marked");
    mmmm.forEach(mmm => mmm.classList.remove("marked"));
}

