const DEFAULT_COLS = 16
const DEFAULT_ROWS = 16

var gridCont = document.getElementById("grid-cont");

function setupGrid(rows, cols) {
    gridCont.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    gridCont.style.gridTemplateRows = `repeat(${rows}, 1fr)`

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div')
        gridCont.appendChild(cell).className = "grid-item";
    }
}
setupGrid(DEFAULT_ROWS, DEFAULT_COLS);