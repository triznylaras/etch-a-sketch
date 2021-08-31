const DEFAULT_COLS = 16
const DEFAULT_ROWS = 16
const DEFAULT_COLOR = 'gray'

let currentColor = DEFAULT_COLOR
let currentMode = 'color'

var gridCont = document.getElementById("grid-cont");
var clearBtn = document.getElementById("clear-btn");
var colorBtn = document.getElementById("color-btn");
var colorPicker = document.getElementById("color-picker");

clearBtn.onclick = () => clearGrid()
colorPicker.onclick = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => addColor(colorPicker.value)

function setupGrid(rows, cols) {
  gridCont.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
  gridCont.style.gridTemplateRows = `repeat(${rows}, 1fr)`

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div')
    cell.addEventListener('mouseover', changeColor)
    gridCont.appendChild(cell).className = "grid-item";
  }
}

function setCurrentColor(newColor) {
  currentColor = newColor
  addColor()
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

function addColor(color) {
  currentMode = 'color'
  currentColor = color
  setupGrid(DEFAULT_ROWS, DEFAULT_COLS)
}

setupGrid(DEFAULT_ROWS, DEFAULT_COLS);