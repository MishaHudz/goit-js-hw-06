const formLink = document.querySelector(".login-form");

formLink.addEventListener("submit", inputValidation);

function inputValidation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Всі поля повинні бути заповнені!");
  }

  const resultObj = {
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();
  return console.log(resultObj);
}
