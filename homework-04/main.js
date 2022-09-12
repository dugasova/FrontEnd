// 1.
const sumOfNumbers = 0.1 + 0.2;
console.log(sumOfNumbers.toFixed(1));

const result = Math.floor(sumOfNumbers * 10) / 10;
console.log(result);

// 2. - 8.
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = '12pass33210';

let message;
let userLogin = prompt('Please, enter your login');
let userPassword = prompt('Please enter your password');
if (userLogin !== ADMIN_LOGIN && userPassword !== ADMIN_PASSWORD) {
    message = 'You don\'t have access to admin panel'
} else if (userLogin !== ADMIN_LOGIN || userPassword !== ADMIN_PASSWORD) {
    message = 'Wrong login or password'
} else {
    message = 'Successful login in'
}
console.log(message);

// 9. - 15.
let usersMoney = +prompt('Скільки грошей у вас?');

const WATERMELON_PRICE = 21;
const CARROT_PRICE = 8;
const POTATO_PRICE = 12;
const WATERMELON_NAME = 'Кавун';
const CARROT_NAME = 'Морква';
const POTATO_NAME = 'Картопля'

console.log(`${WATERMELON_NAME}: ${WATERMELON_PRICE} грн, ${CARROT_NAME}: ${CARROT_PRICE} грн, ${POTATO_NAME}: ${POTATO_PRICE} грн`);
let productDesired = prompt('Що б ви хотіли купити?');
if (usersMoney < WATERMELON_PRICE &&
    usersMoney < CARROT_PRICE &&
    usersMoney < POTATO_PRICE) {
    console.log('У вас недостатньо коштів, для купівлі хоча б 1 шт.');
} else if (productDesired === WATERMELON_NAME) {
    let amountProduct = Math.trunc(usersMoney / WATERMELON_PRICE);
    let restOfMoney = Math.trunc(usersMoney % WATERMELON_PRICE);
    console.log(`За ${usersMoney} грн. Ви можете придбати ${amountProduct} кг ${WATERMELON_NAME}. 
   У Вас залишиться ${restOfMoney} грн`);

} else if (productDesired == CARROT_NAME) {
    amountProduct = Math.trunc(usersMoney / CARROT_PRICE);
    restOfMoney = Math.trunc(usersMoney % CARROT_PRICE);
    console.log(`За ${usersMoney} грн. Ви можете придбати ${amountProduct} кг ${CARROT_NAME}. 
    У Вас залишиться ${restOfMoney} грн`);
} else if (productDesired === POTATO_NAME) {
    amountProduct = Math.trunc(usersMoney / POTATO_PRICE);
    restOfMoney = Math.trunc(usersMoney % POTATO_PRICE);
    console.log(`За ${usersMoney} грн. Ви можете придбати ${amountProduct} кг ${POTATO_NAME}. 
    У Вас залишиться ${restOfMoney} грн`);
} else {
    console.log('Такого продукту не знайдено');
}

// 16.    
let sideA = +prompt('Введіть першу сторону трикутника');
let sideB = +prompt('Введіть другий бік трикутника');
let sideC = +prompt('Введіть третю сторону трикутника');
let triangleMessage;
if (sideA < sideB + sideC &&
    sideB < sideA + sideC &&
    sideC < sideA + sideB) {
    triangleMessage = 'Такий трикутник існує';
} else
    triangleMessage = 'Такий трикутник не існує';
console.log(triangleMessage);

// 18.
2 && 0 && 3 || true && false // false
false || " " || 3 && true // " "
1 && 1000 && '0' || 0 && 'Bob' // '0'
- 1 || 0 || 0 && "" || 1010 // -1