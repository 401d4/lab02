'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');


// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const accord = new VehicleClass.Car('accord 3');
console.log(accord.name, accord.drive(), accord.stop());

const dirtBike = new VehicleClass.Motorcycle('Dust Devil');
console.log(dirtBike.name, dirtBike.wheelie(), dirtBike.stop());
