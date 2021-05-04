const main = document.querySelector(".main");

for (let i=0; i < 16; i++) {
    let div = document.createElement("div");
    div.classList.add("pad");
    div.textContent =  i;
    main.appendChild(div);
}