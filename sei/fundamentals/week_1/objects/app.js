const person = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@gmail',
    isAdimin: false,
    age: 22,
    hobbies: ['Biking','Hiking','Walks on the Beach'],
    address: {
        street: '123 Some st',
        city: 'San Francisco',
        state: 'CA',
        zip: '949499',
    },
    favoriteColor: null,
}

// console.log(person)
// console.log(person.firstName)
// console.log(person.lastName)
console.log(person.address.street)
console.log(person.hobbies[person.hobbies.length-1])
console.log(person['address']['zip'])

const votes = [1,2,1,1,3,3]
const hashMap = {
    1:1
}
console.log(hashMap[1])
