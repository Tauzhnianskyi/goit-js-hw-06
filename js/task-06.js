const inputData = document.getElementById("validation-input");
const getValue = inputData.getAttribute(["data-length"]);

inputData.onblur = function () {
  if (inputData.value.trim().length === Number(getValue)) {
    inputData.classList.remove("invalid");
    inputData.classList.add("valid");
  } else {
    inputData.classList.remove("valid");
    inputData.classList.add("invalid");
  }
};
