const PADSIZE = 160000;
let currentPenColor = 'dodgerblue';
let currentPadColor = 'black';

const container = document.querySelector('.container');

setGridItem(20, 20);
drawGrid(20);

const penColor = document.getElementById('pen-color');
penColor.addEventListener('input', changePenColor);

const padColor = document.getElementById('pad-color');
padColor.addEventListener('input', changePadColor);

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

const changePixel = document.getElementById('pixel-submit');
changePixel.addEventListener('click', clearGrid);

function drawGrid(squareNumber) {
    for (let i = 0; i < squareNumber; ++i) {
        for (let j = 0; j < squareNumber; ++j) {
        
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-item');

            gridDiv.addEventListener('mouseenter', fillColor, 
                {once: true});  // listens once and unbinds itself 
            container.appendChild(gridDiv);
        }
    }
}

function fillColor(e) {
    this.style.backgroundColor = currentPenColor;
    e.stopPropagation();   // stop bubbling
}

function changePenColor(e) {
    currentPenColor = this.value;
}

function changePadColor(e) {
    container.style.backgroundColor = this.value;
}

function clearGrid(e) {
    const gridItems = container.querySelectorAll('div');
    gridItems.forEach(item => container.removeChild(item));
    resetGrid();
}

function getPixelValue() {
    const pixelNumber = parseInt(document.getElementById('pixel-number').value);
    return isNaN(pixelNumber) ? 20: pixelNumber;
}

function resetGrid() {
    const squareNumber = getPixelValue(); 
    
    const squareSize = PADSIZE / (squareNumber ** 2);
    const squareWidth = squareSize ** (1/2);

    setGridItem(squareNumber, squareWidth);
    drawGrid(squareNumber);
}

function setGridItem(number, size) {
    container.style.gridTemplateRows = 
        `repeat(${number}, ${size}px)`;
    container.style.gridTemplateColumns = 
        `repeat(${number}, ${size}px)`;
}
