const inputFild = document.querySelector("#name-input");
const titelChangableText = document.querySelector("#name-output");

inputFild.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    titelChangableText.textContent = event.currentTarget.value;
  } else {
    titelChangableText.textContent = "Anonymous";
  }
});
