// const mainList = document.querySelector("#categories");
// const mainListItems = mainList.querySelectorAll(".item");

// console.log(`Number of categories: ${mainListItems.length}`);

// mainListItems.forEach((listItem) => {
//   const listTitel = listItem.querySelector("h2");
//   console.log(`Category: ${listTitel.textContent}`);
//   const subListItems = listItem.querySelectorAll("li");
//   console.log(`Elements: ${subListItems.length}`);
// });

const mainList = document.querySelector("#categories");
const mainListItems = mainList.querySelectorAll(".item");

console.log(`Number of categories: ${mainListItems.length}`);

mainListItems.forEach((listItem) => {
  const listTitel = listItem.firstElementChild;
  console.log(`Category: ${listTitel.textContent}`);
  const subListItems = listItem.lastElementChild.children;
  console.log(`Elements: ${subListItems.length}`);
});
