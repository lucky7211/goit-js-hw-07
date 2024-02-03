const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorHendler = () => {
  const randomColor = getRandomHexColor();
  colorValue.textContent = randomColor;
  body.style.backgroundColor = randomColor;
};

btn.addEventListener("click", changeColorHendler);
