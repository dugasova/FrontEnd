// 1
function compareNumbers(num1, num2, num3, num4) {
    if ((Number.isNaN(num1)) || (Number.isNaN(num2)) || (Number.isNaN(num3)) || (Number.isNaN(num4))) {
        throw 'Parameter is not a number!';
    }

    let result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    }

    let result1;
    if (num3 < num4) {
        result1 = num3;
    } else {
        result1 = num4;
    }

    if (result < result1) {
        return result;
    } else {
        return result1;
    }
}
console.log(compareNumbers(12, 2, 4, -5));

const lesserNumber = function (num1, num2, num3, num4) {
    if ((Number.isNaN(num1)) || (Number.isNaN(num2)) || (Number.isNaN(num3)) || (Number.isNaN(num4))) {
        throw 'Parameter is not a number!';
    }
    return Math.min(num1, num2, num3, num4);
}
console.log(lesserNumber(2, 3, -7, 8));

// 2
function greatestCommonDivisor(a, b) {
    if ((Number.isNaN(a)) || (Number.isNaN(b))) {
        throw 'Parameter is not a number!';
    }
    if (!Number.isInteger(a) || (!Number.isInteger(b))) {
        throw 'Parameter is not an integer number!';
    }
    if ((a < 0) || (b < 0)) {
        throw 'Parameter is not a positive number!'
    }

    let n = Math.min(a, b);
    for (let i = n - 1; i > 1; i--) {
        if ((a % i == 0) && (b % i == 0)) {
            return i;
        }
    }
    return 'This numbers don\'t have common divisor';
}
console.log(greatestCommonDivisor(45, 15))

// 3
const isPerfectNumber = function (n) {
    if (Number.isNaN(n)) {
        throw 'Parameter is not a number!';
    }
    if (n < 1) {
        throw 'Illegal parameter!'
    }

    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        return true;
    }
    return false;
}
console.log(isPerfectNumber(6));

// 4
const getSumNumbers = (a, b) => {
    if ((Number.isNaN(a)) || (Number.isNaN(b))) {
        throw 'Parameter is not a number!';
    }

    let result = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            result += i;
        }
    } else {
        for (let i = a; i <= b; i++) {
            result += i;
        }
    }
    return result;
}
console.log(getSumNumbers(9, -1));

//  5 
const toFahrenheheit = (celsius) => {
    if (Number.isNaN(celsius)) {
        throw 'Parameter is not a number!';
    }

    return ((celsius * 9 / 5) + 32);
}
console.log(toFahrenheheit(-20));

// 6
function getRandom() {
    return Math.floor(Math.random() * 41);
}
console.log(getRandom());