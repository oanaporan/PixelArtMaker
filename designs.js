
// Select table
const table = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
const submitSize = document.getElementById('submit');
submitSize.addEventListener('click', makeGrid);

function makeGrid(evt) {
  evt.preventDefault();
  //Clear table
if (table.hasChildNodes()) {
  while (table.firstChild) {
  table.removeChild(table.firstChild);
}
 };
 // Select size input
const height = document.querySelector('#inputHeight').value;
const width = document.querySelector('#inputWidth').value;
//Create columns
 for (let n=1; n<=height; n++) {
   let row = document.createElement('tr');
   table.appendChild(row);
 //Create rows
  for (let m=1; m<=width; m++) {
    let col = document.createElement('td');
    col.setAttribute('class', 'pixel');
    table.lastChild.append(col);
  }
}
};

   //Color the pixel background 
table.addEventListener('click', function() {
  if (event.target.nodeName == 'TD') {
   let pixel = event.target;
   pixel.setAttribute("style", "background-color:"+`${colorPicker.value}`);
  }
});


