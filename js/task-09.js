function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonLink = document.querySelector(".change-color");
const textLink = document.querySelector(".color");

buttonLink.addEventListener("click", backgroundColorChange);

function backgroundColorChange() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  textLink.textContent = currentColor;
}
