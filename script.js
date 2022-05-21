/* 
to do:
  highlight operators when selected
*/

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
function exponent(a, b) {
  return a ** b;
}

function logger(text) {
  let display = document.querySelector(".display");
  display.textContent = String(text).substring(0, 10);
}

let prevVar;
let currentVar;
let funcBtn;

const btnFuncs = {
  clear() {
    console.log("clear");
    prevVar = undefined;
    currentVar = undefined;
    funcBtn = undefined;
    logger(0);
  },
  back() {
    console.log("backspace");
    let varText = String(currentVar);
    currentVar = Number(varText.substring(0, varText.length - 1));
    logger(currentVar);
  },
  chsign() {
    console.log("change sign");
    currentVar = -currentVar;
    logger(currentVar);
  },
  power() {
    console.log("power");
    if (funcBtn) this.operate();
    if (prevVar === undefined) {
      prevVar = currentVar;
      currentVar = undefined;
    }
    funcBtn = exponent;
  },
  divide() {
    console.log("divide");
    if (funcBtn) this.operate();
    if (prevVar === undefined) {
      prevVar = currentVar;
      currentVar = undefined;
    }
    funcBtn = division;
  },
  multiply() {
    console.log("multiply");
    if (funcBtn) this.operate();
    if (prevVar === undefined) {
      prevVar = currentVar;
      currentVar = undefined;
    }
    funcBtn = multiplication;
  },
  subtract() {
    console.log("subtract");
    if (funcBtn) this.operate();
    if (prevVar === undefined) {
      prevVar = currentVar;
      currentVar = undefined;
    }
    funcBtn = subtraction;
  },
  add() {
    console.log("add");
    if (funcBtn) this.operate();
    if (prevVar === undefined) {
      prevVar = currentVar;
      currentVar = undefined;
    }
    funcBtn = addition;
  },
  operate() {
    console.log("operator");
    if (funcBtn === undefined) return;
    prevVar = funcBtn(prevVar, currentVar);
    currentVar = undefined;
    funcBtn = undefined;
    logger(prevVar);
  },
  decim() {
    console.log("decimal point");
    if (`${currentVar}`.search(/\./) !== -1) return;
    currentVar = `${currentVar}.`;
    logger(currentVar);
  },
  //utils
  n(num) {
    if (currentVar === undefined) currentVar = 0;
    console.log(`number ${num}`);
    currentVar = Number(`${currentVar}${num}`);
    logger(currentVar);
  },
};

const btns = new Array(...document.querySelectorAll(".btns button"));

for (let x in btns) {
  if (btns[x].id.search(/n[0-9]/) === 0) {
    btns[x].addEventListener("click", () => {
      btnFuncs[`n`](btns[x].id[1]);
    });
  } else {
    btns[x].addEventListener("click", () => {
      btnFuncs[btns[x].id]();
    });
  }

  // btns[x].addEventListener("click", () => {
  //   btnFuncs[btns[x].id]();
  // });
}
