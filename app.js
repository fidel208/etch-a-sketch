const container = document.getElementById("gridContainer");

for (let i = onabort; i < 256; i ++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}