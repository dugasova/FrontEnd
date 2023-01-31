// 1
function Human(name, age, gender, nationality, country, listOfCountries) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.nationality = nationality;
  this.country = country;
  this.listOfCountries = listOfCountries;
};

function greeting() {
  const greet = `Hello! My name is ${this.name} I'm ${this.age}, ${this.gender}
              I'm from ${this.country}. My nationality is ${this.nationality}
              I'd like to visit ${this.listOfCountries} countries`;
  return greet;
};

function wakeUp() {
  const awake = `Good morning! Have a good day ${this.name}`;
  return awake;
};

function fallAsleep() {
  const asleepy = `You've had the productive day Good night ${this.name}`;
  return asleepy;
};

function countriesOfDram() {
  const travel = `Hello ${this.name}!  Your journey begins of ${this.listOfCountries} countries`;
  return travel;
};

const person = new Human(
  "Alisa",
  24,
  "femail",
  "ukranian",
  "Ukraine",
  "Czech Republic, Poland, US, Canada"
);
const person1 = new Human(
  "Bob",
  25,
  "male",
  "ukranian",
  "Ukraine",
  "US, German ,UAE"
);

console.log(greeting.apply(person));
console.log(wakeUp.apply(person));
console.log(fallAsleep.apply(person));
console.log(countriesOfDram.apply(person));

console.log(greeting.apply(person1));
console.log(wakeUp.apply(person1));
console.log(fallAsleep.apply(person1));
console.log(countriesOfDram.apply(person1));

// 2
let canTravel = function () {
  if (this.gender === "male" && this.age > 18 && this.country === "Ukraine") {
    return `${this.name} will be able to travel in half a year`;
  } else {
    return `${this.name } have a nice trip`;
  }
};

Function.prototype.myBind = function (obj) {
  const oldThis = this;
  return () => oldThis.call(obj);
};

let f = canTravel.myBind(person1);
console.log(f()); // Bob will be able to travel in half a year

// 3

const isObject = (object) => {
    return object != null && typeof object === "object";
}

function compareTwoObjects(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let key of objKeys1) {
    const isObjects = isObject(obj1[key]) && isObject(obj2[key]);
    if ((isObjects &&  !compareTwoObjects(obj1[key], obj2[key])) || (!isObjects && obj1[key] !== obj2[key])) {
      return false
    }
  }
  return true;
};

obj1 = {a: 1, b: {c: 2}}
obj2 = {a: 1, b: {c: 2} }

console.log(compareTwoObjects(obj1, obj2));

// 4
function enterData() {
  let a = +prompt("Enter a");
  let b = +prompt("Enter b");

  if (isNaN(a) || isNaN(b)) {
    throw "Parameter is not a number!";
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw "Parameter is not an integer number!";
  }
  if (a < 0 || b < 0) {
    throw "Parameter is not a positive number!";
  }

  this.a = a;
  this.b = b;
}

function Calculator() {
  this.calculateSum = () => this.a + this.b;

  this.calculateNSD = function () {
    if (this.a < 2 || this.b < 2) {
      return 1;
    }

    let n = Math.max(this.a, this.b);
    for (let i = n - 1; i > 0; i--) {
      if (this.a % i === 0 && this.b % i === 0) {
        return i;
      }
    }
  };

  this.calculateNSK = () => (this.a * this.b) / this.calculateNSD();
}

let calc = new Calculator();
enterData.call(calc);

console.log(calc.calculateSum());
console.log(calc.calculateNSD());
console.log(calc.calculateNSK());
