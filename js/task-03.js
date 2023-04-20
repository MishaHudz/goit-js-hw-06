const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageList = document.querySelector(".gallery");

// Варіант 1
// let listItems = "";

// images.forEach(({ url, alt }) => {
//   listItems += `<li class="list-item"><img src="${url}" alt="${alt}" width ="640px" height ="426.66"/></li>\n`;
// });

// imageList.insertAdjacentHTML("beforeend", listItems);

// Варіант 2
const listItems = images.map(({ url, alt }) => {
  return `<li class="list-item"><img src="${url}" alt="${alt}" width ="640px" height ="426.66"/></li>`;
});

imageList.insertAdjacentHTML("beforeend", listItems.join(""));
