function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  let hexColor = [getRandomHexColor()];
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
