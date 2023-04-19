const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const mainList = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");

  const link = document.createElement("a");
  link.textContent = ingredient;

  item.appendChild(link);
  // console.log(item);
  return item;
});

mainList.append(...items);
