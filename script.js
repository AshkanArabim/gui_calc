function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
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
    console.log("backspace");
    let varText = String(currentVar);
    currentVar = Number(varText.substring(0, varText.length - 1));
  },
  chsign() {
    console.log("change sign");
    currentVar = -currentVar;
  },
  rad() {
    console.log("sqaure root");
    currentVar = currentVar ** 0.5;
  },
  divide() {
    console.log("divide");
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = division;
  },
  multiply() {
    console.log("multiply");
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = multiplication;
  },
  subtract() {
    console.log("subtract");
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = subtraction;
  },
  add() {
    console.log("add");
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = addition;
  },
  operate() {
    console.log("operator");
    currentVar = funcBtn(prevVar, currentVar);
    prevVar = 0
  },
  decim() {
    console.log("decimal point");
    if (`${currentVar}`.search(/\./) !== -1) return;
    currentVar = `${currentVar}.`;
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
    // currentVar = Number(`${currentVar}`.substring(0, 10));
    if (`${currentVar}`.length > 10)
      currentVar = Number(`${currentVar}`.substring(0, 10));
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
