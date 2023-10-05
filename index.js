// Import function from another file using the relative path
const importedFunction = require('./message')

// Importing mulitple functions from another file using the relative path
const { myNameIs, myAgeIs } = require('./multiple')
// console.log(myNameIs('Los!'))

// Importing a function from a built-in module
const { inspect } = require('node:util')

// Importing a third-party module after we have installed it using `npm i lolcats`
const lolcats = require('lolcats')

const veryNestedObject = {
    one: {
        two: {
            three: {
                four: {
                    five: 'You found the center'
                }
            }
        }
    }
}; 
// console.log( inspect(veryNestedObject, { depth: 5, colors: true }) );

// Using the imported package to call a function within the package
lolcats.print(veryNestedObject.one.two.three.four.five)

//Exporting multiple functions from a file:
// const myNameIs = (name) => {
//     return `Hi my name is ${name}`
// }


// const myAgeIs = (age) => {
//     return `Hi I am ${age} years old`
// }


// module.exports = { myNameIs, myAgeIs }