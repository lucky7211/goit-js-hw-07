const itemList = document.querySelectorAll(".item");
console.log("Number of categories:", itemList.length);
for (let element of itemList) {
  const title = element.querySelector("h2");
  console.log("Category:", title.textContent);
  const item = element.querySelector("ul");
  console.log("Elements:", item.children.length);
}
