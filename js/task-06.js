const inputFild = document.querySelector("#validation-input");
const value = inputFild.attributes[2].value;

inputFild.addEventListener("blur", (event) => {
  inputFild.classList.add("invalid");

  if (event.currentTarget.value.length >= value) {
    inputFild.classList.replace("invalid", "valid");
  }
});
