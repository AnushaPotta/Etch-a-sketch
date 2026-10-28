function createContainerGrid() {
  const container = document.getElementById("grid-container");
  const button = document.getElementById("size");

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  function gridSize(size) {
    container.innerHTML = "";

    for (let i = 1; i <= size; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");

      for (let j = 1; j <= size; j++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        row.appendChild(cell);
        cell.addEventListener("mouseenter", () => {
          cell.style.backgroundColor = getRandomColor();
        });
      }
      container.appendChild(row);
    }
  }
  gridSize(16);
  button.addEventListener("click", () => {
    const input = prompt("Enter the grid size less than 100");
    const new_size = parseInt(input);
    if (!isNaN(new_size) && new_size > 0) {
      if (input <= 100) {
        gridSize(new_size);
      } else {
        alert("pls enter a number less than 100");
      }
    } else if (input !== null) {
      alert("pls enter a valid number");
    }
  });
}

createContainerGrid();
