// Select elements to work with
import { without } from 'lodash';
console.log(without)

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var randomButton = document.querySelector("#randomButton");


// Create functions
function setGradient() {
  body.style.background = "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";
  css.textContent = body.style.background;
}

function createRandom() {
  var hex = "#" + Math.floor(Math.random() * 16777216).toString(16);
  return hex;
}

function setRandom() {
  var random1 = createRandom();
  var random2 = createRandom();
  body.style.background = "linear-gradient(to right, " 
  + random1 
  + ", " 
  + random2 
  + ")";
  css.textContent = body.style.background;
  color1.setAttribute("value", random1);
  color2.setAttribute("value", random2);

}

// Add listeners to color inputs and random button
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandom)