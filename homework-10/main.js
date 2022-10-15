function Car(status) {
    this.serviceability = 100;
    this.isRiding = status;
}

Car.prototype.startRide = function () {
    if (this.isRiding) {
        throw 'Error: Car already riding';
    }

    this.isRiding = true;
    this.serviceability -= Math.random() * (2.5 - 0.1) + 0.1;
    if (this.serviceability <= 0) {
        throw 'Error: Car is broken'
    }
    console.log('The trip has begun');
    return this.serviceability;
}

Car.prototype.finishRide = function () {
    if (!this.isRiding) {
        throw 'Error: Car already not riding';
    }

    this.isRiding = false;
    console.log('The trip is finished');
}

function HatchbackCar(fuelConsumption, typeOfEngine, engineCapacity, model, yearOfMade, weight, status) {
    this.carBodyStyle = 'Hatchback';
    this.fuelConsumption = fuelConsumption;
    this.typeOfEngine = typeOfEngine;
    this.engineCapacity = engineCapacity;
    this.model = model;
    this.yearOfMade = yearOfMade;
    this.weight = weight;
    Car.call(this, status);
};

function StationWagon(fuelConsumption, typeOfEngine, engineCapacity, model, yearOfMade, weight, status) {
    this.carBodyStyle = 'StationWagon';
    this.fuelConsumption = fuelConsumption;
    this.typeOfEngine = typeOfEngine;
    this.engineCapacity = engineCapacity;
    this.model = model;
    this.yearOfMade = yearOfMade;
    this.weight = weight;
    Car.call(this, status);
};

function Sedan(fuelConsumption, typeOfEngine, engineCapacity, model, yearOfMade, weight, status) {
    this.carBodyStyle = 'Sedan';
    this.fuelConsumption = fuelConsumption;
    this.typeOfEngine = typeOfEngine;
    this.engineCapacity = engineCapacity;
    this.model = model;
    this.yearOfMade = yearOfMade;
    this.weight = weight;
    Car.call(this, status);
};

HatchbackCar.prototype = Object.create(Car.prototype);
StationWagon.prototype = Object.create(Car.prototype);
Sedan.prototype = Object.create(Car.prototype);

let McLarenF1 = new HatchbackCar(15.2, 'Petrol', 6.1, 'F1', 1998, 1138, false);
console.log(McLarenF1.startRide());
McLarenF1.finishRide();

console.log(McLarenF1.startRide());
McLarenF1.finishRide();

console.log(McLarenF1.startRide());
McLarenF1.finishRide();

console.log(McLarenF1.startRide());
McLarenF1.finishRide();

let testCar = new HatchbackCar(12, 'Diesel', 2.4, 'Honda', 2012, 1200, false)
testCar.startRide();
testCar.finishRide();

function dealer(car) {
    if (car.serviceability > 100 || car.serviceability < 0) {
        throw 'This car can\"t be repaired'
    }

    const PRICE = {
        Hatchback: {
            price: 110,
            perYear: [1.2, 1.4, 1.7, 2],
            engine: { Petrol: 1.8, Diesel: 2.2 },
            weight: [1.5, 1.7, 2]
        },
        Sedan: {
            price: 125,
            perYear: [1.5, 1.8, 2, 2.6],
            engine: {Petrol : 2, Diesel: 2.5},
            weight: [1.6, 1.8, 2.1]
        },
        StationWagon: {
            price: 130,
            perYear: [2, 2.2, 2.5, 3],
            engine: { Petrol: 2.4, Diesel: 2.9},
            weight: [1.7, 1.9, 2.2]
        }
    };

    let yearPriceIndex = 0;
    if (car.yearOfMade >= 2019) {
        yearPriceIndex = 0;
    } else if (car.yearOfMade >= 2010) {
        yearPriceIndex = 1;
    } else if (car.yearOfMade >= 2000) {
        yearPriceIndex = 2;
    } else if (car.yearOfMade >= 1990) {
        yearPriceIndex = 3;
    } else {
        throw "The car is beyond repair"
    }

    let weightPriceIndex = 0;
    if (car.weight > 1401) {
        weightPriceIndex = 2;
    } else if (car.weight > 1100) {
        weightPriceIndex = 1;
    } else {
        weightPriceIndex = 0;
    }

    // Second iteration from a comment in Hillel's chat
    let price = (PRICE[car.carBodyStyle].price * PRICE[car.carBodyStyle].perYear[yearPriceIndex]) 
        + (PRICE[car.carBodyStyle].price * PRICE[car.carBodyStyle].engine[car.typeOfEngine])
        + (PRICE[car.carBodyStyle].price * PRICE[car.carBodyStyle].weight[weightPriceIndex]);
        
    // Third iteration, as discussed in the lesson
    price = (100 - car.serviceability) * PRICE[car.carBodyStyle].price
        * PRICE[car.carBodyStyle].price * PRICE[car.carBodyStyle].perYear[yearPriceIndex] 
        + PRICE[car.carBodyStyle].price * PRICE[car.carBodyStyle].engine[car.typeOfEngine] 
        + PRICE[car.carBodyStyle].price * PRICE[car.carBodyStyle].weight[weightPriceIndex];

    // Four iteration, as discussed in the lesson
    price = (100 - car.serviceability) * PRICE[car.carBodyStyle].price
        * PRICE[car.carBodyStyle].perYear[yearPriceIndex] 
        * PRICE[car.carBodyStyle].engine[car.typeOfEngine] 
        * PRICE[car.carBodyStyle].weight[weightPriceIndex];
    
    console.log(`Ваше авто було пошкоджене на ${(100 - car.serviceability).toFixed(2)}, вартість ремонту ${price.toFixed(2)}`);

    car.serviceability = 100;
};

dealer(McLarenF1);
dealer(testCar);