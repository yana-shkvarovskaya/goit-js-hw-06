function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const bcgColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColorButton.addEventListener("click", onButtonBcgColor);

function onButtonBcgColor() {
  let currentColor = getRandomHexColor();

  bcgColor.style.backgroundColor = currentColor;

  body.style.backgroundColor = currentColor;
}
