const myArr = [0,1,2,3,4,5,6,7,8,9]

// const myHeros = ["shaktiman","marvel"]

// console.log(myArr[0])

// // Array method

// myArr.push(6) // add value at last place
// myArr.pop() // remove last value
// console.log(myArr)

// myArr.unshift(9) // value at first place
// myArr.shift() // remove first value


// console.log(myArr)

// console.log(myArr.indexOf(121))


// console.log(myArr.type(121))

// // slice splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log("slice ", myn1)
console.log("original array after slice ", myArr) // no changes in original array after slice


const myn2 = myArr.splice(1,3)
console.log("splice ", myn1)
console.log("original array after splice ", myArr) // change original array after splice
