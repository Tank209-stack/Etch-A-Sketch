let gridContainer = document.getElementById("div-Container")
let button = document.querySelector("button")
function createGrid(size){
  gridContainer.innerHTML = " "
  for(let i = 0 ; i < size * size ; i++ ){
  let grid = document.createElement("div");
  grid.classList.add("grid-item")
  gridContainer.appendChild(grid)
}
}
createGrid(6)
button.addEventListener("click", ()=>{
  gridContainer.innerHTML = " ";
  let noOfSquares = parseInt(prompt("Enter a number below 100"));
  if (isNaN(noOfSquares)|| noOfSquares <=  0 || noOfSquares >= 100){
    alert("Please Enter a valid number")
  }
  else{
    createGrid(noOfSquares);
  }
})

