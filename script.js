"use strict";

const display = document.querySelector(`.display`);
const buttons = document.querySelectorAll(`.num`);
const signs = document.querySelectorAll(`.sign`);
const clearButtons = document.querySelectorAll(`.clearButtons`);
const equal = document.querySelector(`.equal`);
let isPlus = false;
const firstNum = [];
const secondNum = [];

//* NUMBER BUTTONS
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(`click`, function () {
    if (!isPlus) {
      firstNum.push(Number(buttons[i].textContent));
      console.log(firstNum);
    } else if (isPlus) {
      secondNum.push(Number(buttons[i].textContent));
      console.log(secondNum);
    }
  });
}

//* PLUS/AC BUTTON
for (let i = 0; i < clearButtons.length; i++) {
  clearButtons[i].addEventListener(`click`, function () {
    isPlus = true;
    display.textContent = ``;
  });
}

//*EQUAL BUTTON
equal.addEventListener(`click`, function () {
  const sum = firstNum.concat(secondNum);
  console.log(`sum: ${sum.reduce((a, b) => a + b)}`);
});
