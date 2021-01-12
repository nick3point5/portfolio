const mongoose = require('mongoose');
require('./db')
const company = require('./model.js');

// company.create({
//     name: "Apple",
//     founded: new Date(1976, 3, 1, 0, 0),
//     employees: 2,
//     active: false,
//     products: ['computers'],
//     Ceo:{
//         name: 'Steve Jobs',
//         age: 21
//     }

// })

// company.create({
//     name: "Google",
//     founded: new Date(1998, 8, 4, 0, 0),
//     employees: 57100,
//     active: true,
//     products: ['search','maps','email'],
//     Ceo:{
//         name: 'Larry Page',
//         age: 43
//     }

// })



// company.updateOne(
// 	{ name: 'Apple' },
// 	{
// 		    employees: 66000,
// 		    active: true,
// 		    products: ['computers', 'phones', 'tablets'],
// 		    Ceo:{
// 		        name: 'Tim Cook',
// 		        age: 56
// 		    }
		
// 		},
// 	{new: true},
// 	(err, dbObj) => {
//         console.log(dbObj); // an array of articles where author = John Doe

//        process.exit()
//     }
// );


// company.findOne(
// 	{ name: 'Apple' },
// 	(err, obj) => {
// 		console.log(obj.employees)
// 		process.exit()
// 	}
// )

// company.findOne(
// 	{ name: 'Google' },
// 	(err, obj) => {
// 		console.log(obj.employees)
// 		process.exit()
// 	}
// )

// company.deleteOne(
// 	{ name: 'Apple' },
// 	(err, obj) => {
// 		console.log(obj.employees)
// 		process.exit()
// 	}
// )

// company.deleteOne(
// 	{ name: 'Google' },
// 	(err, obj) => {
// 		console.log(obj.employees)
// 		process.exit()
// 	}
// )