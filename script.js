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

function logger(text) {
  let display = document.querySelector(".display");
  display.textContent = text;
}

let prevVar = 0; //value 1
let currentVar = 0; //changing variable
let funcBtn;

const btnFuncs = {
  clear() {
    console.log("clear");
    prevVar = 0;
    currentVar = 0;
    funcBtn = undefined;
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
  divide() {
    console.log("divide");
  },
  multiply() {
    console.log("multiply");
  },
  subtract() {
    console.log("subtract");
  },
  add() {
    console.log("add");
  },
  operate() {
    console.log("operator");
  },
  decim() {
    console.log("decimal point");
  },
  n9() {
    console.log("number 9");
    currentVar = Number(`${currentVar}${9}`);
  },
  n8() {
    console.log("number 8");
    currentVar = Number(`${currentVar}${8}`);
  },
  n7() {
    console.log("number 7");
    currentVar = Number(`${currentVar}${7}`);
  },
  n6() {
    console.log("number 6");
    currentVar = Number(`${currentVar}${6}`);
  },
  n5() {
    console.log("number 5");
    currentVar = Number(`${currentVar}${5}`);
  },
  n4() {
    console.log("number 4");
    currentVar = Number(`${currentVar}${4}`);
  },
  n3() {
    console.log("number 3");
    currentVar = Number(`${currentVar}${3}`);
  },
  n2() {
    console.log("number 2");
    currentVar = Number(`${currentVar}${2}`);
  },
  n1() {
    console.log("number 1");
    currentVar = Number(`${currentVar}${1}`);
  },
  n0() {
    console.log("number 0");
    currentVar = Number(`${currentVar}${0}`);
  },
};

const btns = new Array(...document.querySelectorAll(".btns button"));

for (let x in btns) {
  btns[x].addEventListener("click", () => {
    btnFuncs[btns[x].id]();
    logger(currentVar);
  });
}

/* 
numberfunc:
  stores to currentValue
  add number as first digit (using concat)
  new num stored in memo
  call logger()

funcfunc:
  prevVar = currentVar(first variable)
  currentVar = 0
  save function to be called later

numberfunc:
  stores to currentVar
  add number as first digit
  new num stored in mem
  call logger()

operfunc:
  calls saved functin, passes prevVar and currentVar respectively
  stores returned value to currentVar
  call logger()
*/
