class Person {
    constructor{
        this.legs=2
        this.arms=2
        this.body='meat'
        this.alive=true
    }
};

class Pet {
    constructor{
        this.legs=2
        this.arms=2
        this.body='meat'
    }
};

class Car {
	constructor(serialNumber){
		this.serialNumber = serialNumber;
	}
	drive(){
		console.log('Vroom');
	}
}
const factory = {
	cars: [],
	generateCar(){
		const newCar = new Car(this.cars.length);
		this.cars.push(newCar);
		return newCar;
	},
	findCar(index){
		return this.cars[index];
	}
}

factory.generateCar();
factory.generateCar();
console.log(factory);
console.log(factory.findCar(1));