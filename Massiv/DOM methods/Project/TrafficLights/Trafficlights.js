let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");

function redlight() {
  red.classList.toggle("red");
}

function yellowlight() {
  yellow.classList.toggle("yellow");
}

function greenlight() {
  green.classList.toggle("green");
}

let trafficlight = setInterval(() => {
  setTimeout(() => {
    redlight();
  }, 0);

  setTimeout(() => {
    redlight();
    yellowlight();
  }, 5000);

  setTimeout(() => {
    yellowlight();
    greenlight();
  }, 7000);

  setTimeout(() => {
    greenlight();
    yellowlight();
  }, 12000);
}, 15000);
