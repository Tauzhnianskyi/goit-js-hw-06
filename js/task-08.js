const logForm = document.querySelector(".login-form");

console.dir(logForm);
logForm.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  if (email.value === "" || password.value === "") {
    alert("Please fill all the fields");
  }
  evt.currentTarget.reset();
}
