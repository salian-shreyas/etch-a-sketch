const gridContainer = document.querySelector("#grid-container");
const gridSizeButton = document.querySelector("#prompt-size");

gridContainer.addEventListener("mouseover", addBackgroundColor);
gridSizeButton.addEventListener("click", changeGrid);

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridRow = createGridRow(i);
        gridContainer.appendChild(gridRow);

        for (let j = 0; j < gridSize; j++) {
            const squareDiv = createSquareDiv(); 
            gridRow.appendChild(squareDiv);
        }
    }
}

function createGridRow (row) {
    const gridRow = document.createElement("div");
    gridRow.setAttribute("id", `row${row}`);
    gridRow.setAttribute("class", "grid-row");
    return gridRow;
}

function createSquareDiv() {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square-div");
    return squareDiv;
}

function addBackgroundColor (event) {
    const squareDiv = event.target;
    if (!squareDiv.classList.contains("color-square")) { 
        squareDiv.classList.add("color-square");
    }
}

function changeGrid () {
    const newGridSize = getNewGridSize();    
    removeGrid();
    createGrid(newGridSize);
}

function getNewGridSize () {
    let newGridSize;
    do {
        newGridSize = parseInt(prompt("Enter new square grid size (> 0 & <=100):"));
        console.log(newGridSize)
    } while(newGridSize > 100 || newGridSize <= 0)

    return newGridSize;
}

function removeGrid () {
    const gridRowList = document.querySelectorAll("div.grid-row");
    for (const gridRow of gridRowList) {
        gridContainer.removeChild(gridRow);
    }
}

createGrid(16);