function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function sqrt(a) {
  return a ** 0.5;
}

function chsign(a) {
  return -a;
}

const btnFuncs = {
  clear() {
    console.log("clear");
  },
  back() {
    console.log("back");
  },
  chsign() {
    console.log("change sign");
  },
  rad() {
    console.log("sqaure root");
  },
  n7() {
    console.log("number 7");
  },
  n8() {
    console.log("number 8");
  },
  n9() {
    console.log("number 9");
  },
  divide() {
    console.log("divide");
  },
  n4() {
    console.log("number 9");
  },
  n5() {
    console.log("number 5");
  },
  n6() {
    console.log("number 9");
  },
  multiply() {
    console.log("multiply");
  },
  n1() {
    console.log("number 9");
  },
  n2() {
    console.log("number 2");
  },
  n3() {
    console.log("number 3");
  },
  subtract() {
    console.log("subtract");
  },
  n0() {
    console.log("number 0");
  },
  decim() {
    console.log("decimal point");
  },
  operate() {
    console.log("operator");
  },
  add() {
    console.log("add");
  },
};

const btns = new Array(...document.querySelectorAll(".btns button"));

for (let x in btns) {
  btns[x].addEventListener("click", btnFuncs[btns[x].id]);
}
