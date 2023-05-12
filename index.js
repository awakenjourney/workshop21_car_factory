/**
 * create Car constructor function with properties of make, model, year
 * crate getDescription() to Car prototype, then return Car's info as string
 * use extends to create ElectricCar Function, which is a subclass of Car
 * overide Car's getDescription() with ElectricCar getDescription()
 * create instance of ElectricCar with the Car's info: tesla, model s, year 2019, and range 300
 */

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `The car make is ${this.make}. It's model ${this.model}. Its year is ${this.year}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    return `${super.getDescription()}. This car has ${this.range}`;
  }
}

const ElectricCarInstance = new ElectricCar("Tesla", "S", 2019, 300);
console.log(ElectricCarInstance.getDescription());
