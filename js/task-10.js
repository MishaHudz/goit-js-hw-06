function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fatherBox = document.querySelector("#boxes");
const inputFild = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");

let amount = 0;
let divSize = 30;
let divAdd = "";

inputFild.addEventListener("blur", (event) => {
  if (event.currentTarget.value) {
    amount = event.currentTarget.value;
  }
});

buttonCreate.addEventListener("click", () => {
  for (let i = 0; i < amount; i += 1) {
    divAdd += `<div style="display: inline-block; width:${divSize}px; height:${divSize}px; background-color:${getRandomHexColor()};"></div>`;
    divSize += 10;
  }
  fatherBox.insertAdjacentHTML("beforeend", divAdd);
  divAdd = "";
});

buttonDestroy.addEventListener("click", () => {
  const allDiv = fatherBox.querySelectorAll("div");
  allDiv.forEach((div) => div.remove());

  divSize = 30;
});
