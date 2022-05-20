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
    prevVar = 0;
    currentVar = 0;
    funcBtn = undefined;
  },
  back() {
    let varText = String(currentVar);
    currentVar = Number(varText.substring(0, varText.length - 1));
  },
  chsign() {
    currentVar = -currentVar;
  },
  rad() {
    currentVar = currentVar ** 0.5;
  },
  divide() {
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = division;
  },
  multiply() {
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = multiplication;
  },
  subtract() {
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = subtraction;
  },
  add() {
    prevVar = currentVar;
    currentVar = 0;
    funcBtn = addition;
  },
  operate() {
    if (funcBtn === undefined) return;
    currentVar = funcBtn(prevVar, currentVar);
    prevVar = 0;
    funcBtn = undefined;
  },
  decim() {
    if (`${currentVar}`.search(/\./) !== -1) return;
    currentVar = `${currentVar}.`;
  },
  n9() {
    currentVar = Number(`${currentVar}${9}`);
  },
  n8() {
    currentVar = Number(`${currentVar}${8}`);
  },
  n7() {
    currentVar = Number(`${currentVar}${7}`);
  },
  n6() {
    currentVar = Number(`${currentVar}${6}`);
  },
  n5() {
    currentVar = Number(`${currentVar}${5}`);
  },
  n4() {
    currentVar = Number(`${currentVar}${4}`);
  },
  n3() {
    currentVar = Number(`${currentVar}${3}`);
  },
  n2() {
    currentVar = Number(`${currentVar}${2}`);
  },
  n1() {
    currentVar = Number(`${currentVar}${1}`);
  },
  n0() {
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
