// 1.
let str = 'Hello world';
let newStr;
newStr =  str.slice(0, 6) + str[6].toUpperCase() + str.slice(7) + '!';
console.log(newStr);

str = 'Hello world';
let wLetter = str.slice(6,-4);
const result = str.replace(wLetter,wLetter.toUpperCase()) + '!';
console.log(result);

// 2.
let myStr = '0b456aasd123';
let resutlString = '';

for (let n = 0; n < myStr.length; n++) {
    if (resutlString != '')
        resutlString+=',';

    if (isFinite(myStr[n]))
        resutlString+='number';
    else
        resutlString+='string';
}
console.log(resutlString)

n = 0;
resutlString = '';

while (n < myStr.length) {
    if (resutlString != '')
        resutlString += ',';

    if (isNaN(myStr[n]))
        resutlString+='string';
    else
        resutlString += 'number';
    n++;
}
console.log(resutlString);

// 3.

for (let i = 13; i >= 3; i--) {
    if (i % 2 == 0)
        console.log('even');
    else
        console.log('odd' );
}

n = 13;
while (n >= 3) {
    console.log((n % 2 == 0) ? "even" : "odd");
    n--;
}
