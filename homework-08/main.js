// 1 Створити масив, довжину та елементи якого задає користувач (через prompt). Елементами масиву повинні бути числа.
const numbers = [];
while (true) {
    let value = prompt('Enter numbers ');
        if ( value === '' || value === null || value === undefined ) {
            break;
        }    
        if(isNaN(value)) {
            console.log(`${value} is not a number`)
        } 
        else {
            numbers.push(+value);
        }
};
console.log(numbers);

// 2 Відсортувати масив за зростанням.
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

// 3
const PRODUCT_ARRAY = [ 
    {productName: 'bread', productPrice: 14.5, productQuantity: 2},
    {productName: 'butter', productPrice:  25, productQuantity: 1},
    {productName: 'milk', productPrice:  17, productQuantity: 3},
    {productName: 'flour', productPrice:  12.75, productQuantity: 1},
    {productName: 'sugar', productPrice:  35, productQuantity: 5},
    {productName: 'salt', productPrice:  10, productQuantity: 4},
    {productName: 'oil', productPrice:  45, productQuantity: 7},
    {productName: 'vinegar', productPrice:  10, productQuantity: 1},
    {productName: 'nuts', productPrice:  18, productQuantity: 6},
]

// Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі
const totalProductPrice = PRODUCT_ARRAY.reduce(
    (accumulator, item) => {
        return accumulator + item.productPrice * item.productQuantity;    
    },
0);

console.log(`The total price of products is ${totalProductPrice}`);

// Порахувати найменшу кількість продукту, який потрібно купити
const result = PRODUCT_ARRAY.reduce((minValue, curValue) => 
    curValue.productQuantity < minValue ? curValue.productQuantity : minValue
, Infinity); 
console.log(result)

// Порахувати загальну кількість продуктів
const totalProducAmount = PRODUCT_ARRAY.reduce(
    (accumulator, item) => {
        return accumulator + item.productQuantity;    
    },
0);
console.log(totalProducAmount);

// Знайти найдорожчий продукт
const expensiveProduct = PRODUCT_ARRAY.sort((a, b) => b.productPrice - a.productPrice)[0]
console.log(`The most Expensive product in list is ${expensiveProduct.productName} costs ${expensiveProduct.productPrice}`)


// Створити функцію, яка повинна додавати новий продукт в існуючий масив
function isParamValid(param, allowNumeric=false)
{
    if ( param === '' || param === null || param === undefined ) {
        return false;
    }
    if (allowNumeric && (isNaN(param) || +param < 1)) {
        return false;
    }
    return true;
}

function addNewProduct(products) {
    productName = prompt('Enter the product name');
    productPrice = +prompt('Enter price');
    productQuantity = +prompt('Enter Quantity');

    if (isParamValid(productName) && isParamValid(productPrice, true) && isParamValid(productQuantity, true)) {
        products.push( {productName, productPrice, productQuantity} )
    } else {
        console.log("Something wrong with one of params!")
    }
    return products;
}    
console.log(addNewProduct(PRODUCT_ARRAY));

// Створити функцію, яка повинна видаляти конкретний продукт із існуючий масиву продуктів
function deleteProduct(products) {
    if (!products instanceof Array || !products.length > 0)
        throw "Parameter is not array or empty"

    const value = prompt('Enter product name to delete');
    if (!isParamValid(value)) {
        console.log("User entered wrong value")
    }
    const indexOfProduct = products.findIndex(element => element.productName === value);
    if(indexOfProduct < 0) {
        console.log("The entered product not found")
    }
    products.splice(indexOfProduct, 1);

    return products
}
console.log(deleteProduct(PRODUCT_ARRAY));

// 4.
const NUMBERS_ARRAY = [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35];

// Знайти суму та кількість позитивних елементів.
let positiveNumbers = NUMBERS_ARRAY.filter(number => number > 0);
let sumPositiveNumbers = positiveNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
let quantityPositveNumbers = positiveNumbers.length;
console.log(`the sum of positive numbers ${sumPositiveNumbers} amount of positive numbers ${quantityPositveNumbers}`);

// Знайти мінімальний елемент масиву та його порядковий номер.
let smallestNumber = Math.min(...NUMBERS_ARRAY);
let indexSmallestNumber = NUMBERS_ARRAY.findIndex(n => n === smallestNumber);
console.log(`The smallest number in array ${smallestNumber} and his index ${indexSmallestNumber}`);

// Знайти максимальний елемент масиву та його порядковий номер.
let biggestNumber = Math.max(...NUMBERS_ARRAY);
let indexBiggestNumber = NUMBERS_ARRAY.findIndex(n => n === biggestNumber);
console.log(`The biggest number in array ${biggestNumber} and his index ${indexBiggestNumber}`);

// Визначити кількість негативних елементів.
let negativeNumbers = NUMBERS_ARRAY.filter(number => number < 0);
let quantityNegativeNumbers = negativeNumbers.length
console.log(`The amount of negative numbers is ${quantityNegativeNumbers}`);

// Знайти кількість непарних позитивних елементів.
let oddPositiveElements = positiveNumbers.filter(n => n % 2 !== 0);
console.log(`The amuont of odd positive numbers is ${oddPositiveElements.length}`);

// Знайти суму парних позитивних елементів.
let evenPositiveElements = positiveNumbers.filter(n => n % 2 === 0);
let sumPositiveEvenElements = evenPositiveElements.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(`Summ positive even numbers is ${sumPositiveEvenElements}`)

// Знайти добуток позитивних елементів.
let productPositiveElements = positiveNumbers.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
console.log(`Product of positive numbers is ${productPositiveElements}`);
