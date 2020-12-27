class person{
    constructor(provName){
        this.name=provName
    }
    
    describeSelf(){
        console.log(    
        `My name is ${this.name}.
        My email is ${email}.
        My favorite color is ${this.favColor}`)
    }
}

const john = new person();

console.log(john)

class cookie{
    constructor(sugar, topping, time){
        this.sugar = sugar
        this.topping = topping
        this.crispy = true
        this.time = time
    }
    bake() {
        console.log('cookies will be ready in' + this.time +'min')
    }
}

const brown = new cookie(brown, nuts, 8)

class parents{
    constructor (lastname){
        this.lastname = lastname
        this.eyes = this.eyes
    }

}

class child extends parents{
    constructor(name,hobbies){
        super(name)
    }
}

// Super Class
class Vehicle {
    static count = 1;
    constructor(type='car') {
      this.numOfWheels = 4;
      this.vinNumber = Vehicle.count;
      this.type = type;
      Vehicle.count++;
    }
    describeSelf() {
      return `
        Vehicle Type = ${this.type}.
        Number of Wheels = ${this.numOfWheels}.
        VIN = ${this.vinNumber}
      `;
    }
  }
  // Sub Class Car
  class Car extends Vehicle {
    constructor(type, trunkSize='standard') {
      super(type); // calls the parent constructor
      this.trunkSize = trunkSize;
    }
    describeSelf() {
      return `
        I am a Car!
        Vehicle Type = ${this.type}.
        Number of Wheels = ${this.numOfWheels}.
        VIN = ${this.vinNumber}
      `;
    }
  }
  const car = new Car('sports car');
  console.log(car.describeSelf());
  // Sub Class Truck
  class Truck extends Vehicle {
    constructor(type, bedSize) {
      super(type); // 
      this.bedSize = bedSize;
    }
  }
  const truck = new Truck('Truck', 'Long Bed');
  console.log(truck.describeSelf());