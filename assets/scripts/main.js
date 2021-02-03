// main.js
// number and slider as well as volume icon
var slider = document.getElementById("volume-slider");
var number = document.getElementById("volume-number");
var icon = document.getElementById("volume-image");
slider.addEventListener("input", changeNumber);
number.addEventListener("input", changeSlider);
function changeIcon() {
    if (number.value == 0) {
        icon.src="./assets/media/icons/volume-level-0.svg"
    }
    else if (number.value <= 33) {
        icon.src="./assets/media/icons/volume-level-1.svg"
    }
    else if (number.value <= 66) {
        icon.src="./assets/media/icons/volume-level-2.svg"
    }
    else {
        icon.src="./assets/media/icons/volume-level-3.svg"
    }
}
function changeNumber() {
    number.value = slider.value;
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
    changeIcon();
}

// change horn image and audio
var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");
air.addEventListener("input", changeImgAudio(air.id));
car.addEventListener("input", changeImgAudio(car.id));
party.addEventListener("input", changeImgAudio(party.id));

function changeImgAudio(radio) {
    let soundImage = document.getElementById("sound-image");
    let hornSound = document.getElementById("horn-sound");
    switch (radio.id) {
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
var hornButton = document.getElementById("honk-btn");
document.addEventListener("submit", Honhon);
function Honhon() {
   let hornSound = document.getElementById("horn-sound");
   hornSound.volume = number.value/100;
   hornSound.play();
}

