"use strict";

const display = document.querySelector(`.display`);
const buttons = document.querySelectorAll(`.num`);
const add = document.querySelectorAll(`.add`);
const equal = document.querySelector(`.equal`);
const clear = document.querySelector(`.clear`);
let enteredNum = ``;
let equationArr = [];
let sum = 0;

//* NUMBER BUTTONS
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(`click`, function () {
    enteredNum += buttons[i].textContent;
    display.textContent = enteredNum;
  });
}

//* PLUS
for (let i = 0; i < add.length; i++) {
  add[i].addEventListener(`click`, function () {
    equationArr.push(enteredNum);
    enteredNum = "";
    display.textContent = ``;
  });
}

//*EQUAL BUTTON
equal.addEventListener(`click`, function () {
  equationArr.push(enteredNum);
  for (let i = 0; i < equationArr.length; i++) {
    sum += Number(equationArr[i]);
  }
  display.textContent = sum;
});

//* CLEAR BUTTON
clear.addEventListener(`click`, function () {
  equationArr.splice(0, equationArr.length);
  display.textContent = ``;
});
