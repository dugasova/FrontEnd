// 1
const outputYear = document.getElementById("input1");
const getCentury = document.getElementById("btn");
const message = document.getElementById("result");

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

getCentury.addEventListener("click", () => {
  if (isNaN(outputYear.value) || +outputYear.value < 1) {
    message.innerHTML = 'Please enter positive number'
  } else {
    message.innerHTML = ` Entered ${outputYear.value} year is ${yearToCentury(+outputYear.value)} century`;
  }
 });

// 2
const enteredStr = document.getElementById("input2");
const getString = document.getElementById("btn2");
const outputNumber = document.getElementById("output-number");

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
getString.addEventListener("click", () => {
  outputNumber.innerHTML = `The result of ${enteredStr.value} is ${vowelOne(
    enteredStr.value
  )}`;
});

// 3
const enteredPhrase = document.getElementById("input3");
const getPhrase = document.getElementById("btn3");
const reversedSubString = document.getElementById("reversed");

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
getPhrase.addEventListener("click", () => {
  reversedSubString.innerHTML = `It is a new str ${spinWords(
    enteredPhrase.value
  )}`;
});

// 4
const inputNumber = document.getElementById("input4");
const getNumber = document.getElementById("btn4");
const outputResult = document.getElementById("high-and-low");

function highAndLow(inputString) {
  const numbers = inputString.split(" ");
  numbers.sort((a, b) => b - a);
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
};
getNumber.addEventListener("click", () => {
  if (isNaN(+inputNumber.value)) {
    outputResult.innerHTML = 'Please enter number'
  }else 
  outputResult.innerHTML = `From array of numbers the highest and lowest numbers is ${highAndLow(
    inputNumber.value
   
  )}`;
});

// 5
const inputNumbers = document.getElementById("input5");
const getForPhone = document.getElementById("btn5");
const outputPhone = document.getElementById("phone-number");

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
getForPhone.addEventListener("click", () => {
  if (isNaN(+inputNumbers.value)) {
    outputPhone.innerHTML = 'Please enter number'
    return
  } 
  let numbersArray = inputNumbers.value.split("");
  numbersArray = numbersArray.map((item) => +item);
  
  outputPhone.innerHTML = `The phone number is ${createPhoneNumber(
    numbersArray
  )}`;
});