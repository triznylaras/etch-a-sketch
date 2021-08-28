var gridCont = document.getElementById("grid-cont");

function makeRows(rows, cols) {
    gridCont.style.setProperty('--grid-rows', rows);
    gridCont.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        gridCont.appendChild(cell).className = "grid-item";
    };
};
makeRows(16, 16);