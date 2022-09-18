const increaseBtn = document.querySelector("[data-action=increment]");
const decreaseBtn = document.querySelector("[data-action=decrement]");
let counterValue = 0;
let weight = document.querySelector("#value");

increaseBtn.addEventListener("click", () => {
  return (weight.textContent = counterValue += 1);
});
decreaseBtn.addEventListener("click", () => {
  return (weight.textContent = counterValue -= 1);
});
