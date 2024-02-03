const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function inputHandler(event) {
  const value = event.target.value;
  if (value.trim() !== "") {
    outputName.textContent = value;
  } else outputName.textContent = "Anonymous";
}
inputName.addEventListener("input", inputHandler);
