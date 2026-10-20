function createContainerGrid() {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";
  for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 1; j <= 16; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      row.appendChild(cell);
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "purple";
      });
    }
    container.appendChild(row);
  }
}

createContainerGrid();
