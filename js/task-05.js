const inputName = document.querySelector("#name-input");
console.log(inputName);
inputName.oninput = function () {
  document.querySelector("#name-output").innerHTML = inputName.value;
};
