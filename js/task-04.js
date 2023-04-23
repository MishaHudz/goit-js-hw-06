const decrementButton = document.querySelector("[data-action=decrement]");
const incrementButton = document.querySelector("[data-action=increment]");
const changableValue = document.querySelector("#value");

let counterValue = Number(changableValue.textContent);

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  changableValue.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  changableValue.textContent = counterValue;
});
