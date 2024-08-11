const gridContainer = document.querySelector("#grid-container");

// Grid contains 16*16 square divs
for (let i = 0; i < 16; i++) {
    const gridRow = createGridRow(i);
    gridContainer.appendChild(gridRow);

    for (let j = 0; j < 16; j++) {
        const squareDiv = createSquareDiv(); 
        gridRow.appendChild(squareDiv);
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

gridContainer.addEventListener("mouseover", addBackgroundColor);

function addBackgroundColor (event) {
    const squareDiv = event.target;
    if (!squareDiv.classList.contains("color-square")) { 
        squareDiv.classList.add("color-square");
    }
}