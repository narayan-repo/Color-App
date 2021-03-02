var header = document.querySelector(".header");
var rgbValue = document.querySelector("#rgbValue");

var color1 = document.querySelector("#color-1")
var color2 = document.querySelector("#color-2")
var color3 = document.querySelector("#color-3")
var color4 = document.querySelector("#color-4")
var color5 = document.querySelector("#color-5")
var color6 = document.querySelector("#color-6")

var color1Value = randomRGB();
var color2Value = randomRGB();
var color3Value = randomRGB();
var color4Value = randomRGB();
var color5Value = randomRGB();
var color6Value = randomRGB();

var winOrlose = document.querySelector('#winOrlose');

var arr = [color1Value, color2Value, color3Value, color4Value, color5Value, color6Value];

var indexGuessColor = Math.floor(Math.random() * arr.length);

function randomRGB() {
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);

    return "RGB(".concat(red, ", ", green, ", ", blue, ")")
}


//right color
var guessColor = arr[indexGuessColor];
rgbValue.innerHTML = guessColor;
// header.style.background = guessColor;

//colore pallete
color1.style.background = color1Value;
color2.style.background = color2Value;
color3.style.background = color3Value;
color4.style.background = color4Value;
color5.style.background = color5Value;
color6.style.background = color6Value;

function winEvent(colorValue) {
    color1.style.background = colorValue;
    color2.style.background = colorValue;
    color3.style.background = colorValue;
    color4.style.background = colorValue;
    color5.style.background = colorValue;
    color6.style.background = colorValue;
    header.style.background = colorValue;
    winOrlose.innerHTML = "You Win";
}

function loseEvent(color) {
    color.style.background = "none";
    winOrlose.innerHTML = "Try Again";
}


color1.addEventListener('click', function () {
    if (color1.style.background == guessColor.toLowerCase()) {
        console.log("color1");
        winEvent(color1.style.background);
    }
    else {
        loseEvent(color1);
    }
});
color2.addEventListener('click', function () {
    if (color2.style.background == guessColor.toLowerCase()) {
        console.log("color2")
        winEvent(color2.style.background);

    }
    else {
        loseEvent(color2);
    }
});
color3.addEventListener('click', function () {
    if (color3.style.background == guessColor.toLowerCase()) {
        console.log("color3")
        winEvent(color3.style.background);
    }
    else {
        loseEvent(color3);
    }
});
color4.addEventListener('click', function () {
    if (color4.style.background == guessColor.toLowerCase()) {
        console.log("color4")
        winEvent(color4.style.background);

    }
    else {
        loseEvent(color4);
    }
});
color5.addEventListener('click', function () {
    if (color5.style.background == guessColor.toLowerCase()) {
        console.log("color5")
        winEvent(color5.style.background);
    }
    else {
        loseEvent(color5);
    }
});
color6.addEventListener('click', function () {
    if (color6.style.background == guessColor.toLowerCase()) {
        console.log("color6")
        winEvent(color6.style.background);
    }
    else {
        loseEvent(color6);
    }
});
