function isInvalidValue(value) {
    if (value instanceof Array || value instanceof Object)
        return true;
    if (value instanceof Boolean)
        return false;

    return !Boolean(value);
}

function createNewTeam(driverName, driversYearBirth, teamName, carBrand, sponsorName, isAdmitted) {
    if (isInvalidValue(driverName) || isInvalidValue(driversYearBirth) ||
        isInvalidValue(teamName) || isInvalidValue(carBrand) || isInvalidValue(sponsorName) || isInvalidValue(isAdmitted)) {
        throw 'Please enter correct data'
    }
    if (driversYearBirth < 1) {
        throw 'driversYearBirth can not be less then 1'
    }

    return {
        driverName,
        driversYearBirth,
        teamName,
        carBrand,
        sponsorName,
        isAdmitted: Boolean(isAdmitted)
    }
}
// console.log(createNewTeam(undefined, -1984, null, NaN,[],{}));
console.log(createNewTeam("Bob", 1992, "sova", "Toyota", "UkRnafta", true));

// 2
const createNewUser = function (user) {
    for (const key in user) {
        let newValue = prompt(`Enter your ${key}`);
        while (isInvalidValue(newValue)) {
            newValue = prompt(`Value '${newValue}' is invalid! Enter correct value for ${key}`);
        }
        user[key] = newValue;
    }
    return user;
}

let user = {
    login: '',
    password: '',
    city: '',
    country: '',
    sex: '',
    age: '',
}
console.log(createNewUser(user));

// 3
function updateUser(obj, field, newValue) {
    obj[field] = newValue;
    return obj;
}
console.log(updateUser(user, 'age', 18));

// 4
const STUDENT = {
    name: 'Vasya',
    surname: 'Petrenko',
    age: 25,
    course: 'Fron-End pro',
    city: 'Kyiv',
    greeting() {
        console.log('Hi everyone!');
    },
    addHomeWork() {
        console.log('Sending my homework... Please, wait');
    }
}
STUDENT.greeting();
STUDENT.addHomeWork();

// 5
const EMPTY_OBJECT = {};
const NON_EMPTY_OBJECT = { a: 1 };
function isEmpty(value) {
    return Object.keys(value).length === 0 ? true : false;
}
console.log("is empty", isEmpty(EMPTY_OBJECT));
console.log("is not empty", isEmpty(NON_EMPTY_OBJECT));

// 6
const TEAM_OF_SELLERS = {
    Taras: 2000,
    Marta: 10,
    Ivan: 1200,
    Petro: 400,
    Roma: 366,
    Alina: 829

};
console.log(TEAM_OF_SELLERS);

// 7
function sumOfRevenue(team) {
    let sum = 0;
    for (let key in team) {
        sum += team[key];
    }
    return sum;
}
console.log(sumOfRevenue(TEAM_OF_SELLERS));

// 8
const smallestRevenue = (team) => {
    let minRevenue = Infinity;
    let name = '';

    for (let key in team) {
        if (team[key] < minRevenue) {
            minRevenue = team[key];
            name = key;
        }
    }
    return `The min revenue: ${minRevenue} of the user ${name}`
}
console.log(smallestRevenue(TEAM_OF_SELLERS));

// 9
const biggestRevenue = (team) => {
    let maxRevenue = -Infinity;
    let name = '';

    for (let key in team) {
        if (team[key] > maxRevenue) {
            maxRevenue = team[key];
            name = key;
        }
    }
    return `The max revenue ${maxRevenue} of the user ${name}`;
}
console.log(biggestRevenue(TEAM_OF_SELLERS));

//  10
function pickRandomUser(obj) {
    let keys = Object.keys(obj);
    let randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}
console.log(`Congratulation ${pickRandomUser(TEAM_OF_SELLERS)} you won`);
