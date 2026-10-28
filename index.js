function createContainerGrid() {
  function gridSize(size) {
    const container = document.getElementById("grid-container");
    const button = document.getElementById("size");
    container.innerHTML = "";

    for (let i = 1; i <= size; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");

      for (let j = 1; j <= size; j++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        row.appendChild(cell);
        cell.addEventListener("mouseenter", () => {
          cell.style.backgroundColor = "purple";
        });
      }
      container.appendChild(row);
    }
    button.addEventListener("click", () => {
      const input = prompt("Enter the grid size");
      const new_size = parseInt(input);
      if (!isNaN(new_size) && new_size > 0) {
        gridSize(new_size);
      } else if (input !== null) {
        alert("pls enter a valid number");
      }
    });
  }

  gridSize(16);
}

createContainerGrid();
