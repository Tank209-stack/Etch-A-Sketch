let gridContainer = document.getElementById("div-Container")
let button = document.querySelector("button")

let randomrgb = ()=>{
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256); 
    return `rgb(${r} , ${g}, ${b})`
  
}

function createGrid(size){
  let sizeOfDiv =Math.floor(560/size)
  gridContainer.innerHTML = " "
  for(let i = 0 ; i < size*size ; i++ ){
  let grid = document.createElement("div");
  grid.classList.add("grid-item")
  gridContainer.appendChild(grid)
  grid.style.width = `${sizeOfDiv}px`;
  grid.style.height = `${sizeOfDiv}px`
  grid.addEventListener("mouseenter", ()=>{
    grid.style.backgroundColor = randomrgb()
  })
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


