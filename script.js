let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");


init();

resetBtn.addEventListener("click", function(){
    reset();
})

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        // add initial colors
        squares[i].addEventListener("click", function() {
            // grab color
            let clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedColor === pickedColor){
                changeColor(clickedColor);
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}


function setupModeButtons(){
    for(let i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            // if txtContent = easy then numSquares = 3 else numSquares = 6
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}


function reset(){
        // generate new colors
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
    
        messageDisplay.textContent = "";
        resetBtn.textContent = "New Colors";
    
        for(let i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                // add initial colors
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }   
        }
        h1.style.backgroundColor = "steelBlue";
}


function changeColor(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++){
        // change each color to match correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make array
    let arr = [];
    // add num random colors to array
    for(let i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a red from 0-255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0-255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });