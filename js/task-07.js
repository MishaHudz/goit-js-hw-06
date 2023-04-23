const input = document.querySelector("#font-size-control");
const changableText = document.querySelector("#text");

input.addEventListener("input", (event) => {
  changableText.style.fontSize = `${event.currentTarget.value}px`;
});
