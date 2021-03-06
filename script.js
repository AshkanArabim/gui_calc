function logger(text) {
  text = String(text);
  if (text === "NaN") text = "Error";
  let display = document.querySelector(".display");
  display.textContent = text.substring(0, 10);
}

let prevVar;
let currentVar;
let funcBtn;

const btns = new Array(...document.querySelectorAll(".btns button"));

const btnFuncs = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  power(a, b) {
    return a ** b;
  },
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
  f(type) {
    console.log(type);
    if (funcBtn) this.operate();
    if (prevVar === undefined) {
      prevVar = currentVar;
      currentVar = undefined;
    }
    funcBtn = this[type];
  },
  n(num) {
    if (currentVar === undefined) currentVar = 0;
    console.log(`number ${num}`);
    currentVar = Number(`${currentVar}${num}`);
    logger(currentVar);
  },
};

for (let x in btns) {
  if (btns[x].id.search(/n[0-9]/) === 0) {
    btns[x].addEventListener("click", () => {
      btnFuncs["n"](btns[x].id[1]);
    });
  } else if (btns[x].id.search("f-") === 0) {
    btns[x].addEventListener("click", () => {
      btnFuncs["f"](btns[x].id.substring(2));
    });
  } else {
    btns[x].addEventListener("click", () => {
      btnFuncs[btns[x].id]();
    });
  }
}

document.addEventListener("keydown", (e) => {
  let btn = document.querySelector(`button[data-key="${e.key}"`);
  console.log(e.key);
  if (!btn) return;
  btn.classList.add("active");
  if (btn.id.search(/n[0-9]/) === 0) {
    btnFuncs["n"](btn.id[1]);
  } else if (btn.id.search("f-") === 0) {
    btnFuncs["f"](btn.id.substring(2));
  } else {
    btnFuncs[btn.id]();
  }
});
document.addEventListener("keyup", (e) => {
  let btn = document.querySelector(`button[data-key="${e.key}"`);
  if (!btn) return;
  btn.classList.remove("active");
});
