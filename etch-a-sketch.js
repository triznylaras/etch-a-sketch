const DEFAULT_COLS = 16
const DEFAULT_ROWS = 16

let currentColor = 'black'
let currentMode = 'color'

var gridCont = document.getElementById("grid-cont");
var clearBtn = document.getElementById("clear-btn");
var colorBtn = document.getElementById("color-btn");

clearBtn.onclick = () => clearGrid()
colorBtn.onclick = () => addColor()

function setupGrid(rows, cols) {
  gridCont.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
  gridCont.style.gridTemplateRows = `repeat(${rows}, 1fr)`

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div')
    cell.addEventListener('mouseover', changeColor)
    gridCont.appendChild(cell).className = "grid-item";
  }
}

function changeColor(cell) {
  if (currentMode === 'color') {
    cell.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    cell.target.style.backgroundColor = 'white'
  }
}

function clearGrid() {
  gridCont.innerHTML = ''
  currentMode = 'eraser'
  setupGrid(DEFAULT_ROWS, DEFAULT_COLS)
}

function addColor() {
  gridCont.innerHTML = ''
  currentMode = 'color'
  setupGrid(DEFAULT_ROWS, DEFAULT_COLS)
}

setupGrid(DEFAULT_ROWS, DEFAULT_COLS);