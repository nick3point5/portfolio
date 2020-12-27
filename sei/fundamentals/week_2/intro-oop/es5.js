function person(name, email) {
    this.name = name;
    this.email = email;
    this.isAdmin = false;
    this.favColor = null;

    this.decribeSelf = function(){
        console.log(`My name is ${this.name}.
        My email is ${email}.
        My favorite color is ${this.favColor}`)
    }
}

person.prototype.decribeSelf = function(){
    console.log(`My name is ${this.name}.
    My email is ${email}.
    My favorite color is ${this.favColor}`)
}


const john = new person('john', 'jdoe@gmail.com');
const sarah = new person('sarah', 'jdoe@gmail.com');
const kevin = new person('kevin', 'kdoe@gmail.com');


console.log(john);
console.log(sarah);
console.log(kevin);