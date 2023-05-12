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
