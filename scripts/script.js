const gridRows = getComputedStyle(document.documentElement).getPropertyValue('--grid-rows');
const gridColumns = getComputedStyle(document.documentElement).getPropertyValue('--grid-columns');

const container = document.querySelector('.container');

for (let i = 0; i < gridRows; ++i) {
    for (let j = 0; j < gridColumns; ++j) {
        
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-item');

        gridDiv.addEventListener('mouseenter', fillColor);
        container.appendChild(gridDiv);
    }
} 


function fillColor(e) {
    e.target.classList.add('pen');
}
