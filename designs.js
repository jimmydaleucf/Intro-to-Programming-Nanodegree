// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()







//const pixelCanvas = document.getElementById("pixelCanvas");





const sizePicker = document.getElementById("sizePicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const chosenColor= document.getElementById("colorPicker");
const  gridHeight= document.getElementById("inputHeight");
const  gridWidth= document.getElementById("inputWidth");
// const gridHeight = 25;
// const gridWidth = 36; 
// pixelCanvas.addEventListener('click', function(event) {
    // event.target.style.backgroundColor = chosenColor.value; 
// })


sizePicker.addEventListener('submit', function(event) {
    makeGrid(); event.preventDefault(); 
})
function paintCell(event) {
    event.target.style.backgroundColor = chosenColor.value;
}
function makeGrid() {
    var n = 1;
    pixelCanvas.querySelectorAll('tr').forEach(el => el.remove());
    for (var i = 0; i<= gridHeight.value-1; i++) {
        const row = pixelCanvas.insertRow(i);
            for (var j = 0; j<= gridWidth.value - 1; j++) {
                const cell= row.insertCell(j);
                cell.addEventListener('click', paintCell);
                cell.id = (n);
                n=n+1;
                }         
}}
