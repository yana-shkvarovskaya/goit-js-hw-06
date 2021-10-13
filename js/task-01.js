const allItems = document.querySelectorAll(".item");
console.log("Number of categories:", `${allItems.length}`);

const list = document.querySelectorAll("#categories>li");
list.forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`
  );
});
