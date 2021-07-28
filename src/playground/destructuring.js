// const person = {
//     name: "Max",
//     age: 2,
//     location: {
//         city: "Columbus",
//         temp: 80
//     }
// };

// // Set default value
// const  {name = "Anonymous", age } = person;

// // rename properties
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`)

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         // name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-Publisher"} = book.publisher;
// console.log(publisherName);

// Array Destructuring

// const address = ["1317 S CherryBlosom Street", "Columbus", "Ohio", "45362"];

// // default Value
// const [, city, state = "Florida"] = address;

// console.log(`You are in ${city} ${state}.`)


const item = ["Coffee (ice)","$2.00", "$3.50", "$3.75"];

const [coffe, , price] = item;

console.log(`A medium ${coffe} costs ${price}`);