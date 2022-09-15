// 1.
for(let step = 10; step <= 25; step += 0.5) {              
    console.log(step);
};

// 2.
let number = +prompt('Please, enter number');
let isPrime = true;
for (let i = 2; i < number; i++) {
    if(number % i === 0) {
        isPrime = false
        break;
    }
}
console.log(`${number} is a${ isPrime ? '': ' not'} prime number`); 

// 3.
let amountPurchase = +prompt('Please, enter your amount of purchase?');
let discount;

if (amountPurchase > 200) {
    discount = 7 
} else if (amountPurchase > 100) {
    discount = 5
} else {
    discount = 3
}
console.log(`Your discount is ${discount}% or ${amountPurchase * discount / 100} UAH`);

// 5.
let newResult;
for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++) {
        newResult = `${i} x ${j} = ${i*j}`
        console.log(newResult);
    }
    console.log("");
}

// 6.
const USD = 36.76;
for (let i = 10; i <= 100; i += 10) {
    let valueOfUAH = USD * i;
    console.log(`Cost of ${i} USD = ${valueOfUAH.toFixed(2)} UAH `)
}

// 7.
let positiveNumbers = 0;
let negetiveNumbers = 0;
let zeroNumbers = 0;
let oddNumbers = 0;
let evenNambers = 0;

for (let i = 0; i < 15; i++) {
    let number = +prompt(`enter number ${i+1}`);
    if (number > 0) {
        positiveNumbers++;
    } else if (number < 0) {
        negetiveNumbers++;
    } else {
        zeroNumbers++;
    }
    if (number % 2 == 0) {
        evenNambers++;
    } else {
        oddNumbers++
    }
}
console.log(`Amount of 
positive numbers are ${positiveNumbers}
negative numbers are ${negetiveNumbers}
zero numbers are ${zeroNumbers}
odd numbers are ${oddNumbers}
even numbers are ${evenNambers}
`);