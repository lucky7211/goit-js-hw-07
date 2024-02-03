function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  container.innerHTML = "";
  if (Number(inputNumber.value) >= 1 && Number(inputNumber.value) <= 100) {
    createBoxes(Number(inputNumber.value));
  }
});

function createBoxes(amount) {
  let size = 30;
  let divArr = [];
  for (let i = 0; i < amount; i += 1) {
    const div = `<div class="box" style= "display:block;
    margin-left: 30px; margin-top: 30px;
    background-color:${getRandomHexColor()}; width:${size}px;
    height:${size}px"></div>`;
    divArr.push(div);
    size += 10;
  }
  container.insertAdjacentHTML("beforeend", divArr.join(""));
  inputNumber.value = "";
}

buttonDestroy.addEventListener("click", destroyBoxes);

  function destroyBoxes() {
    container.innerHTML = "";
  }



