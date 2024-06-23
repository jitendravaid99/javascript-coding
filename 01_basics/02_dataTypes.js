// "use strict"; // treat all JS code as newer version

// // alert ("hello")  // we are using node js not browser

// let name = "jiten"
// let age = 40
// let isLoggedIn = false

// /*

// Premitive datatypes:
// 1.number => 2 to the power 53
// 2.bigint
// 3.string
// 4.boolean
// 5.null => standalone value
// 6.undefined => not defined
// 7.symbol => unique

// Non-premitive(reference) datatypes:
// 1.Array
// 2.Object
// function
//  */

// console.log(typeof null) // object type

// console.log(typeof undefined) // object type

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id== anotherId)

// let myObj = {
//     name:"jiten",
//     age:43
// }
// console.log(typeof myObj) // object type

// const myFunc = function(){
//     console.log("hello")
// }
// myFunc()
// console.log(typeof myFunc) // object type

// Stack (Premitive) Heap (non-premitive) -give memory reference

let myName= "jitenVaid"
let anotherName= myName
console.log(anotherName)