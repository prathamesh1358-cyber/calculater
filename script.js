let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += ` ${op} `;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.trim();
  if (display.value.endsWith(' ')) {
    display.value = display.value.slice(0, -3);
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch (e) {
    display.value = "Error";
  }
}
