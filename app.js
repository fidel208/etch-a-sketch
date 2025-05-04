const container = document.getElementById("gridContainer");

function createGrid(size) {
    container.innerHTML = "";

    const totalSize = 800;
    const squareSize = (totalSize / size) - 2;

    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.classList.add("hovered");
        });

        container.appendChild(square);
    }
}

function resize() {
   let size = prompt("Enter the number of squares per side(max=100): ");
   size = parseInt(size);

   if (size > 100 || size < 1) {
    alert("Invalid input!");
    return(resize());
   }

   createGrid(size);

}

createGrid(16);