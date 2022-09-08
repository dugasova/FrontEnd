// 1.
let userName = prompt('Яке Ваше імʼя?');

// 2.
let userSurname = prompt('Яке Ваше прізвище?');

// 3.
let userFavoriteNumber = prompt('Яке Ваше улюблене число?');

// 4.
let greeting = `Вітаю, ${userName} ${userSurname}!  Ваше улюблене число - ${userFavoriteNumber}`;
alert(greeting);
console.log(greeting);

// 5.
let firstNumber = +prompt('Введіть перше число');

// 6.
let secondNumber = +prompt('Введіть друге число');

// 7.
let numbersSum = firstNumber + secondNumber;
let numbersSubstraction = firstNumber - secondNumber;
let numbersMultiplication = firstNumber * secondNumber;
let numbersDivision = firstNumber / secondNumber;

let operationsResult = `
Результат операції додавання ${numbersSum} 
Результат операції віднімання ${numbersSubstraction}
Результат операції множення ${numbersMultiplication}
Результат операції поділу ${numbersDivision}
`;
alert(operationsResult);
console.log(operationsResult);

// 8.
let usersBirthYear = prompt('В якому році Ви народились?');

// 9.
let usersAge = (new Date().getFullYear() - usersBirthYear);
alert(`Ваш вік - ${usersAge}`);
console.log(usersAge);

// 10.
let remainderTwoNumbers = firstNumber % secondNumber;
alert(`Остача від ділення числа ${firstNumber} на число ${secondNumber} рівна ${remainderTwoNumbers}`);
console.log(remainderTwoNumbers);

// 11.
let enteredNumber = +prompt('Будь ласка, введіть число');
let massage = enteredNumber % 2  ? "число не парне" : "число парне";
alert(massage);
console.log(massage);
