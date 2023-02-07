let screenNumber = document.querySelector(".number");
let currentNumber = 0;
let firstNumber = 0;
let secondNumber = 0;
let isAdding = false;
let isSubstracting = false; 
let isMultiplying = false;
let isDividing = false;

function resetOperators() {
  isAdding = false;
  isSubstracting = false; 
  isMultiplying = false;
  isDividing = false;
  firstNumber = 0;
  secondNumber = 0;
}

function equals() {
  secondNumber = currentNumber;
  if (isAdding === true) {
    currentNumber = firstNumber + secondNumber;
    screenNumber.textContent = currentNumber;
    resetOperators()
  } else if (isSubstracting === true) {
    currentNumber = +(firstNumber - secondNumber);
    screenNumber.textContent = currentNumber;
    resetOperators();
  } else if (isMultiplying === true) {
    currentNumber = firstNumber * secondNumber;
    screenNumber.textContent = currentNumber;
    resetOperators();
  } else if (isDividing === true) {
    currentNumber = firstNumber / secondNumber;
    screenNumber.textContent = currentNumber;
    resetOperators();
  }
}

function calculatePercentage() {
  if (isAdding === true || isSubstracting === true || isMultiplying === true || isDividing === true) {
    currentNumber = firstNumber / 100;
    equals();
  } else {
    resetOperators();
    currentNumber = 0;
    screenNumber.textContent = currentNumber;
  }
}

document.querySelector(".equals-btn").addEventListener("click", () => {
  equals();
});

document.querySelector(".ac-btn").addEventListener("click", () => {
  currentNumber = 0;
  screenNumber.textContent = currentNumber;
  resetOperators();
});

document.querySelector(".c-btn").addEventListener("click", () => {
  currentNumber = 0;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".add-btn").addEventListener("click", () => {
  firstNumber = currentNumber;
  currentNumber = 0;
  isAdding = true;
}); 

document.querySelector(".substract-btn").addEventListener("click", () => {
  firstNumber = currentNumber;
  currentNumber = 0;
  isSubstracting = true;
});

document.querySelector(".multiply-btn").addEventListener("click", () => {
  firstNumber = currentNumber;
  currentNumber = 0;
  isMultiplying = true;
});

document.querySelector(".divide-btn").addEventListener("click", () => {
  firstNumber = currentNumber;
  currentNumber = 0;
  isDividing = true;
});

document.querySelector(".percent-btn").addEventListener("click", () => {
  calculatePercentage();
});

document.querySelector(".zero-btn").addEventListener("click", () => {
  currentNumber += "0";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".one-btn").addEventListener("click", () => {
  currentNumber += "1";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".two-btn").addEventListener("click", () => {
  currentNumber += "2";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".three-btn").addEventListener("click", () => {
  currentNumber += "3";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".four-btn").addEventListener("click", () => {
  currentNumber += "4";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".five-btn").addEventListener("click", () => {
  currentNumber += "5";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".six-btn").addEventListener("click", () => {
  currentNumber += "6";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".seven-btn").addEventListener("click", () => {
  currentNumber += "7";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".eight-btn").addEventListener("click", () => {
  currentNumber += "8";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});

document.querySelector(".nine-btn").addEventListener("click", () => {
  currentNumber += "9";
  currentNumber = + currentNumber;
  screenNumber.textContent = currentNumber;
});