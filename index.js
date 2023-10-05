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

lolcats.print(veryNestedObject.one.two.three.four.five)
