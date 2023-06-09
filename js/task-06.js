const inputFild = document.querySelector("#validation-input");
// const value = Number(inputFild.attributes[2].value);
// const value = Number(inputFild.getAttribute("data-length"));
const value = Number(inputFild.dataset.length);

inputFild.addEventListener("blur", (event) => {
  inputFild.classList.remove("valid");
  inputFild.classList.add("invalid");

  if (event.currentTarget.value.length === value) {
    inputFild.classList.replace("invalid", "valid");
  }
});
