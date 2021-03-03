var header = document.querySelector(".header");
var winOrlose = document.querySelector('#winOrlose');
var rgbValue = document.querySelector("#rgbValue");

var colors = document.querySelectorAll(".color");
var colorValues = [];
var index;
var rightColor;

//buttons
var newColors = document.querySelector(".reset"); //New Colors
var easy = document.querySelector("#easy");       //Easy
var hard = document.querySelector("#hard");       //Hard

//for initial blue background of hard button on page load
hard.classList.add("selected");

//function to assign colors to the divs
function assignColorsToDivs() {
    for (let i = 0; i < colors.length; i++) {
        //give each div a random background color
        colorValues.push(randomRGB());
        colors[i].style.background = colorValues[i];
    }
}

newColors.addEventListener('click', function () {
    colorValues = [];
    assignColorsToDivs();
    pickRightColor(); //choose a new right color
    //reverting back to default styling
    newColors.textContent = "New Colors"
    rgbValue.innerHTML = rightColor.toUpperCase();
    header.style.background = "blue";
    winOrlose.textContent = "";

});

easy.addEventListener('click', function () {
    colorValues = [] //starting from a empty color pallete
    newColors.click();
    easy.classList.add("selected");
    hard.classList.remove("selected");

    for (let i = 0; i < colors.length; i++) {
        if (i < 3) {
            colorValues.push(randomRGB());
            colors[i].style.background = colorValues[i];
        } else {
            colors[i].style.display = "none"; //hiding bottom three color divs
        }
    }
    pickRightColor(); //chosing new right color from only the top three divs
    rgbValue.innerHTML = rightColor.toUpperCase();

})

hard.addEventListener('click', function () {

    newColors.click();

    hard.classList.add("selected");
    easy.classList.remove("selected");
    for (let i = 3; i < colors.length; i++) {
        colors[i].style.display = "inline";
    }
})

//function to generate a random rgb value in string format
function randomRGB() {
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);

    return "rgb(".concat(red, ", ", green, ", ", blue, ")")
}


function pickRightColor() {
    let isEasy = false; //if mode = easy then isEasy = true
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].style.display == "none") {
            isEasy = true;
            break;
        }
    }
    if (!isEasy) {
        index = Math.floor(Math.random() * colors.length);
    } else {
        index = Math.floor(Math.random() * 3);
    }
    rightColor = colorValues[index];

}

assignColorsToDivs(); //apply initial colors to divs on page load
pickRightColor();     //choose initial right color on page load  
rgbValue.innerHTML = rightColor.toUpperCase();

//adding event listeners to each div
for (let i = 0; i < colors.length; i++) {
    //add event listeners to each div
    colors[i].addEventListener('click', function () {
        if (this.style.background === rightColor) {
            changeAllColors(rightColor);
            winOrlose.textContent = "Correct!"
            newColors.textContent = "Play Again"
        } else {
            this.style.background = "#232323"
            winOrlose.textContent = "Try Again"
        }
    });
};

//function to change the colors of all the divs and the header to the rightColor
function changeAllColors(color) {
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.background = color;
    }
    header.style.background = color;
};

