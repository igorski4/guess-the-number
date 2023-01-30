let hiddenNumber = 77;
let countGame = 0;
let countStep = 1;
let state = false;

let statistics = document.querySelector(".main__statistics");
statistics.innerHTML = "Сыграно игр: " + countGame;

let button = document.querySelector(".main__button");
let input = document.querySelector(".main__input");
let hint = document.querySelector(".main__hint");
let wrapper = document.querySelector(".main__wrapper");

let newString = document.createElement("p");
newString.className = "main__hint";
newString.style.marginBottom = 0;

let newButton = document.createElement("button");
newButton.className = "main__button";
newButton.innerHTML = "Начать сначала";
newButton.style.width = "183px";
newButton.style.textAlign = "center";
newButton.style.marginBottom = "43px";
newButton.style.marginLeft = "auto";
newButton.style.marginRight = "auto";

const addString = () => {
  newString.innerHTML = "Угадал за " + countStep + " ходов";
  wrapper.innerHTML = "";
  wrapper.append(newString);
};

const addButton = () => {
  wrapper.after(newButton);
};

const checkNumber = () => {
  if (input.value) {
    if (input.value > hiddenNumber) {
      hint.innerHTML = "Меньше";
      countStep++;
    } else if (input.value < hiddenNumber) {
      hint.innerHTML = "Больше";
      countStep++;
    } else {
      hint.remove();
      statistics.innerHTML = "Сыграно игр: " + ++countGame;
      addString();
      addButton();
      hiddenNumber = Math.floor(Math.random() * 100 + 1);
      countStep = 1;
      state = true;
    }
    input.value = "";
  }
};

const resetForm = () => {
  newString.remove();
  newButton.remove();
  wrapper.append(input);
  wrapper.append(button);
  wrapper.after(hint);
};

button.addEventListener("click", checkNumber);

newButton.addEventListener("click", resetForm);

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    if (state === false) checkNumber();
    else resetForm();
  }
});
