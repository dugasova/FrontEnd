// 1) Создать переменные const и let с своим именем. Изменить свое имя на любое другое.
let userName = 'Nataly';
userName = 'dugasova';
const userNameRO = 'dugasova';

// Переменные, объявленные 
// с помощью const, называются «константами». Их нельзя изменить. Попытка сделать это приведёт к ошибке

// 2) Придумать название для следующих переменных: пользователь, 
// супер пользователь, список активных пользователей, активен ли пользователь
let user;
let superUser;
let activeUserList;
let isUserActive;

// 3) Создать переменные с массивом чисел(любых), объект с произвольными ключами и значениями, 
// строку с типа “Привет мир” где мир это переменная в которой хранится строка мир

let numbers = [3,7,11,13]; 

let obj = {
    any: 123,
    other: 65535
}

let subj = 'World';
const helloWorld = `Hello, ${subj}!`;

// 4) Написать результат выражений:

4.1. 10 < 3 // false

4.2. 'hi' != 'hello' // true

4.3. 1 == '1' // true

4.4. null == 'null' // false

4.5. null === undefined // false

4.6. 1 === 1 && 'hi' // 'hi'

4.7. true && 'I love js' // 'I love js'

4.8. 123 && 'hi' || 'hello' //'hi'

4.9. 0+ ? true : false  // SyntaxError

4.10. 1 + 1 //2

4.11. '12' + '31' // '1231'

4.12. 3 / '3' // 1

4.13. 10 * 'hello' //NaN

4.14. '13'++ //SyntaxError

4.15. ++13 //SyntaxError

// 5) Написать условие которое выведет в консоль приветствие пользователя в зависимости от его роли
// (обычный пользователь, админ, суперадмин, неавторизированный пользователь) тремя способами: switch, ?, if.


let user;
let message;

if (user == 'user') {
    message = `Hello! ${user}`;
} else if (user == 'admin') {
    message = 'Hello Admin!';
} else if (user == 'superAdmin')
    message = 'Hello your Majesty!';
else {
    message = 'Hello! Would you like login?';
}
console.log(message);


let user;
let message = (user == 'user') ? 'Hello!' :
  (user == 'admin') ? 'Hello Admin!' :
  (user == 'superAdmin') ? 'Hello your Majesty!' :
  'Hello! Would you like login?';

console.log(message);

let user;
let message;

switch (user) {
    case 'user':
        message = `Hello! ${user}`;
        break;
    case 'admin':
        message = `Hello ${user} with admin priveleges!`;
        break;
    case 'superAdmin':
        message = `Hello super ${user}`;
        break;
    default:
        message = "Who are you?";
}
console.log(message);

// 6) Написать switch условие определения 
// овощ либо фрукт(подсказка используйте один код для многих названий овощей либо фруктов)
let plants;
switch (plants) {
    case 'potato':
        console.log( 'It\'s a vegetables.' );
        breake;
    case 'peach':
    case 'pear':
        console.log( 'It\'s a fruits.' );
        break;
    default:
        console.log( 'It\'s another product.' );
}
