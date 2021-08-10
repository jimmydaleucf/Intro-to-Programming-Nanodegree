// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


const sizePicker = document.getElementById("sizePicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const chosenColor = document.getElementById("colorPicker");
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");



//The sizePicker event listener is triggered once the user clicks the 'submit' button. It then executes the makeGrid function to draw the table.
sizePicker.addEventListener("submit", function (event) {
  makeGrid();
  event.preventDefault();
});

//i created thus function to paint a cell.  By pullling it out of the loop, it makes the code simpler. It can be called from within the loop with just the function call. 
function paintCell(event) {
  event.target.style.backgroundColor = chosenColor.value;
}

//makeGrid() function is draws the grid per specified dimensions. i added the variable 'n' so that each cell would have a unique identifier in it to distinguish which cell was clicked on
function makeGrid() {
  var n = 1;
  pixelCanvas.querySelectorAll("tr").forEach((el) => el.remove());
  for (var i = 0; i < gridHeight.value; i++) {
    const row = pixelCanvas.insertRow(i);
    for (var j = 0; j < gridWidth.value; j++) {
      const cell = row.insertCell(j);
      cell.addEventListener("click", paintCell);
      cell.id = n;
      n = n + 1;
    }
  }
}
