
//something with the var below is fucked.
var numberOfSquares = 6;
var colors = assignRandomColors(numberOfSquares);
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayco = document.getElementById('mainColor');
displayco.textContent = pickedColor;
var messageDisplay = document.querySelector('#message');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


//easy button logic
easyBtn.addEventListener("click", function(){
  messageDisplay.textContent = ""
  hardBtn.classList.remove("selected")
  easyBtn.classList.add("selected");
  numberOfSquares = 3;
  colors = assignRandomColors(3);
  pickedColor = pickColor();
  displayco.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.background = colors[i];
    }
      else {
        squares[i].style.background = "#232323"
      }
  }
});

//hard button logic
hardBtn.addEventListener("click", function(){
  messageDisplay.textContent = ""
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected");
  numberOfSquares = 6;
  colors = assignRandomColors(6);
  pickedColor = pickColor();
  displayco.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.background = "block"
      }
});

  //pick a new random color from array
  function pickColor(){
    var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
  }

//reset button
resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = assignRandomColors(numberOfSquares);
  console.log(colors);

  pickedColor = pickColor();
  console.log(pickedColor)
  //change displaytext to match picked color
  displayco.textContent = pickedColor;

  //asign colors to sqaures
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  };
  h1.style.background = "steelBlue"
  messageDisplay.textContent = ""
});


//adding colors and listeners to sqaures. Also checking accuracy of selection.
for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];
  //add click listeners
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    console.log(clickedColor);

    //compare to variable of pickedColor

    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?"
    }
      else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
  });
}



//the function that runs when everything is correct
function changeColors(color) {
  // loop through all sqaure to change to correct color
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = color;
  }
}



// //function that randomly selects which color is correct
// function pickColor(){
//   var random = Math.floor(Math.random() * colors.length);
//   return colors[random];
// }


//creates random colors array
function assignRandomColors(numberOfSquares){
  //make an area
  var arr = []
  //add num random colors to array
  for (var i = 0; i < numberOfSquares; i++) {
    //get random color to push into array
    arr.push(generateRandomColors());
  }
  //return array
  return arr;
}


//actually generates random RGB color
function generateRandomColors(){

  // pick red from 0 to 255
  var r = Math.floor(Math.random() * 256);

  // pick green from 0 to 255
  var g = Math.floor(Math.random() * 256);

  // pick blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}
