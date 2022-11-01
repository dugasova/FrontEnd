const buttons = document.querySelectorAll(".btn");
const firstOperand = document.querySelector("[data-previous-operand]");
const output = document.querySelector("[data-current-operand]");
let operation = "";
let computedResultInOutput = false;

buttons.forEach((e) => {
  e.addEventListener("click", handleKey);
});

function handleKey(e) {
  switch (e.target.textContent) {
    case "AC":
      firstOperand.textContent = "";
      output.textContent = "";
      operation = "";
      break;

    // case 'DEL':
    //         output.textContent = output.textContent.slice(0,-1);
    //     break;

    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      if (computedResultInOutput) {
        firstOperand.textContent = output.textContent;
        output.textContent = "";
        computedResultInOutput = false;
      }

      output.textContent += e.target.textContent;
      break;

    case ".":
      console.log(parseFloat(output.textContent));
      if (output.textContent != "" && !output.textContent.includes(".")) {
        output.textContent += e.target.textContent;
      }
      break;

    case "÷":
      if (firstOperand.textContent != "" && operation != "") {
        output.textContent = handleOperation();
        operation = "/";
      } else {
        firstOperand.textContent = output.textContent;
        output.textContent = "";
        operation = "/";
      }

      break;

    case "*":
      if (firstOperand.textContent != "" && operation != "") {
        output.textContent = handleOperation();
        operation = "*";
      } else {
        firstOperand.textContent = output.textContent;
        output.textContent = "";
        operation = "*";
      }

      break;

    case "+":
      if (firstOperand.textContent != "" && operation != "") {
        output.textContent = handleOperation();
        operation = "+";
      } else {
        firstOperand.textContent = output.textContent;
        output.textContent = "";
        operation = "+";
      }

      break;

    case "-":
      if (firstOperand.textContent != "" && operation != "") {
        output.textContent = handleOperation();
        operation = "-";
      } else {
        firstOperand.textContent = output.textContent;
        output.textContent = "";
        operation = "-";
      }

      break;

    case "=":
      if (firstOperand.textContent != "" && operation != "") {
        output.textContent = handleOperation();
        firstOperand.textContent = "";
        operation = "";
      }

      break;

    default:
      console.log(e.target, "clicked");
  }
}

function handleOperation() {
  let result = 0;
  switch (operation) {
    case "+":
      result =
        parseFloat(firstOperand.textContent) + parseFloat(output.textContent);
      break;

    case "-":
      result =
        parseFloat(firstOperand.textContent) - parseFloat(output.textContent);
      break;

    case "*":
      result =
        parseFloat(firstOperand.textContent) * parseFloat(output.textContent);
      break;

    case "/":
      result = 
        parseFloat(firstOperand.textContent) / parseFloat(output.textContent);
      break;

    default:
      console.log("Illegial operation", operation);
  }

  computedResultInOutput = true;

  return Math.round10(result, -2);
}

// https://stackoverflow.com/questions/9453421/how-to-round-float-numbers-in-javascript/19794305#19794305
// Closure
(function () {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Shift back
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();
