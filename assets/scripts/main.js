// main.js
// number and slider as well as volume icon
var hornSound = document.getElementById("horn-sound");
var hornButton = document.getElementById("honk-btn");
var slider = document.getElementById("volume-slider");
var number = document.getElementById("volume-number");
var icon = document.getElementById("volume-image");
slider.addEventListener("input", changeNumber);
number.addEventListener("input", changeSlider);
function changeIcon() {
    if (number.value == 0) {
        hornButton.disabled = true;
        icon.src="./assets/media/icons/volume-level-0.svg";
    }
    else if (number.value <= 33) {
        hornButton.disabled = false;
        icon.src="./assets/media/icons/volume-level-1.svg";
    }
    else if (number.value <= 66) {
        hornButton.disabled = false;
        icon.src="./assets/media/icons/volume-level-2.svg";
    }
    else {
        hornButton.disabled = false;
        icon.src="./assets/media/icons/volume-level-3.svg";
    }
}
function changeNumber() {
    number.value = slider.value;
    hornSound.volume = slider.value/100;
    changeIcon();
}
function changeSlider() {
    // limit value to be between 0 - 100
    if (number.value < 0) {
        number.value = 0
    } 
    else if (number.value > 100) {
        number.value = 100
    }
    slider.value = number.value;
    hornSound.volume = number.value/100;
    changeIcon();
}

// change horn image and audio
var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");

air.addEventListener("change", function() {changeImgAudio(air.id);});
car.addEventListener("change", function() {changeImgAudio(car.id);});
party.addEventListener("change", function() {changeImgAudio(party.id);});

function changeImgAudio(radio) {
    let soundImage = document.getElementById("sound-image");
    let hornSound = document.getElementById("horn-sound");
    switch (radio) {
        case 'radio-party-horn' :
            soundImage.src = "./assets/media/images/party-horn.svg";
            hornSound.src = "./assets/media/audio/party-horn.mp3";
            break;
        case 'radio-air-horn' :
            soundImage.src = "./assets/media/images/air-horn.svg";
            hornSound.src = "./assets/media/audio/air-horn.mp3";
            break;
        case 'radio-car-horn' :
            soundImage.src = "./assets/media/images/car.svg";
            hornSound.src = "./assets/media/audio/car-horn.mp3";
            break;
    }
}

// sound the horn when button is pressed
hornButton.addEventListener("submit", Honhon);
function Honhon(event) {
    event.preventDefault();
    hornSound.volume = number.value/100;
    hornSound.play();
 }
