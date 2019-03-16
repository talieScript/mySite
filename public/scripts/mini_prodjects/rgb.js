var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6
colorDisplay.textContent = pickedColor;

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset()
	});
}
resetButton.addEventListener("click", function(){
	reset()
});


for (var i = 0; i < squares.length; i++) {
	squares[i].style.background=colors[i]
	squares[i].addEventListener("click", function(){
 	var clickedColor = this.style.background
 	if(clickedColor===pickedColor){
 		messageDisplay.textContent = "Correct!"
 		changeColor(clickedColor)
 		h1.style.backgroundColor = pickedColor
 		resetButton.textContent = "Play Again?"
 	}else{
 		this.style.backgroundColor = "#232323"
 		messageDisplay.textContent = "Try Again"
 	}
 	})
}

function reset(){
	colors = generateRandomColors(numSquares)
	pickedColor=pickColor();
	resetButton.textContent = "New Colors"
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background=colors[i]
		} else {
			squares[i].style.display="none";
		}
	};
	h1.style.backgroundColor = "steelblue"
	resetButton.textContent = "New Colours"
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
}

function changeColor(color){
	for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")"
}