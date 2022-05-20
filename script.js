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

let prevVar; //value 1
let currentVar; //changing variable
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
  n9() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 9");
    currentVar = Number(`${currentVar}${9}`);
    logger(currentVar);
  },
  n8() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 8");
    currentVar = Number(`${currentVar}${8}`);
    logger(currentVar);
  },
  n7() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 7");
    currentVar = Number(`${currentVar}${7}`);
    logger(currentVar);
  },
  n6() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 6");
    currentVar = Number(`${currentVar}${6}`);
    logger(currentVar);
  },
  n5() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 5");
    currentVar = Number(`${currentVar}${5}`);
    logger(currentVar);
  },
  n4() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 4");
    currentVar = Number(`${currentVar}${4}`);
    logger(currentVar);
  },
  n3() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 3");
    currentVar = Number(`${currentVar}${3}`);
    logger(currentVar);
  },
  n2() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 2");
    currentVar = Number(`${currentVar}${2}`);
    logger(currentVar);
  },
  n1() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 1");
    currentVar = Number(`${currentVar}${1}`);
    logger(currentVar);
  },
  n0() {
    if (currentVar === undefined) currentVar = 0;
    console.log("number 0");
    currentVar = Number(`${currentVar}${0}`);
    logger(currentVar);
  },
};

const btns = new Array(...document.querySelectorAll(".btns button"));

for (let x in btns) {
  btns[x].addEventListener("click", () => {
    btnFuncs[btns[x].id]();
  });
}
