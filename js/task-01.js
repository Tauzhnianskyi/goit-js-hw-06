const itemLength = document.querySelectorAll(".item");
console.log("Number of categories:", itemLength.length);

const firstList = document.querySelector(".item");
const firstTitle = firstList.querySelector("h2");
console.log("Category:", firstTitle.textContent);
const firstItem = firstList.querySelector("ul");
const firstItemLi = firstItem.querySelectorAll("li");
console.log("Elements:", firstItemLi.length);

const secondList = firstList.nextElementSibling;
const secondTitle = secondList.querySelector("h2");
console.log("Category:", secondTitle.textContent);
const secondItem = secondList.querySelector("ul");
const secondItemLi = secondItem.querySelectorAll("li");
console.log("Elements:", secondItemLi.length);

const thirdList = secondList.nextElementSibling;
const thirdTitle = thirdList.querySelector("h2");
console.log("Category:", thirdTitle.textContent);
const thirdItem = thirdList.querySelector("ul");
const thirdItemLi = thirdItem.querySelectorAll("li");
console.log("Elements:", thirdItemLi.length);
