// 1
const outputYear = document.getElementById("input1");
const getCentury = document.getElementById("btn");
const message = document.getElementById("result");

getCentury.addEventListener("click", () => {
  message.innerHTML = `Entered ${outputYear.value} year is ${yearToCentury(+outputYear.value)} century`;
});

function yearToCentury(year) {
  let century = Math.floor(year / 100) + 1;

  switch (year % 10) {
    case 1:
      century = century + "st";
      break;
    case 2:
      century = century + "nd";
      break;
    case 3:
      century = century + "rd";
      break;
    default:
      century = century + "th";
  }
  return century;
}

// 2
const enteredStr = document.getElementById("input2");
const getString = document.getElementById("btn2");
const outputNumber = document.getElementById("output-number");

getString.addEventListener("click", () => {
  outputNumber.innerHTML = `The result of ${enteredStr.value} is ${vowelOne(
    enteredStr.value
  )}`;
});

function vowelOne(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let letter of str) {
    if (vowels.includes(letter)) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}

// 3
const enteredPhrase = document.getElementById("input3");
const getPhrase = document.getElementById("btn3");
const reversedSubString = document.getElementById("reversed");

getPhrase.addEventListener("click", () => {
  reversedSubString.innerHTML = `It is a new str ${spinWords(
    enteredPhrase.value
  )}`;
});

function spinWords(str) {
  let newString = "";
  let words = str.split(" ");

  words.forEach((element) => {
    if (element.length >= 5) {
      newString +=
        (newString ? " " : "") + element.split("").reverse().join("");
    } else {
      newString += (newString ? " " : "") + element;
    }
  });
  return newString;
}

// 4
const inputNumber = document.getElementById("input4");
const getNumber = document.getElementById("btn4");
const outputResult = document.getElementById("high-and-low");

getNumber.addEventListener("click", () => {
  outputResult.innerHTML = `From array of numbers the highest and lowest numbers is ${highAndLow(
    inputNumber.value
  )}`;
});

function highAndLow(inputString) {
  numbers = inputString.split(" ");
  numbers.sort((a, b) => b - a);
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
};

// 5
const inputNumbers = document.getElementById("input5");
const getForPhone = document.getElementById("btn5");
const outputPhone = document.getElementById("phone-number");

getForPhone.addEventListener("click", () => {
  let numbersArray = inputNumbers.value.split(" ");
  numbersArray = numbersArray.map((item) => +item);

  outputPhone.innerHTML = `The phone number is ${createPhoneNumber(
    numbersArray
  )}`;
});

function createPhoneNumber(numbersArray) {
  const numbersStr = numbersArray.join("");
  return (
    "(" +
    numbersStr.slice(0, 3) +
    ") " +
    numbersStr.slice(3, 6) +
    "-" +
    numbersStr.slice(6)
  );
};