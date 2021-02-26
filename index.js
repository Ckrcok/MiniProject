let currentNumber;
let result = 1;

let H = document.getElementById("h1");
let Plus = document.getElementById("plus");
let Minus = document.getElementById("minus");
let Number = document.getElementById("number");

Plus.addEventListener("click", plus);
Minus.addEventListener("click", minus);

currentNumber = parseInt(Number.value);

function plus(click) {
  //do something that add the currentNumber to the input number

  currentNumber = parseInt(Number.value);
  result += currentNumber;
  render();
}

function minus(click) {
  //do something that add the currentNumber to the input number
  currentNumber = parseInt(Number.value);
  result -= currentNumber;
  render();
}

function render() {
  if (result < 0) {
    H.style.color = "red";
  }
  if (result >= 0) {
    H.style.color = "black";
  }
  H.innerHTML = result;
}

render();
