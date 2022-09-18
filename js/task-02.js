const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

console.log(ingredients);
const containerUl = document.querySelector("#ingredients");
let result = [];
ingredients.forEach((value) => {
  const navItem = document.createElement("li");
  navItem.classList.add("item");
  navItem.textContent = value;
  return result.push(navItem);
});

containerUl.append(...result);
