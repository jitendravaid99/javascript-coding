// for (let i =0; i<= 10; i++){
//     if (i == 5){
//     console.log(i)}
// }


// while -- do while loop ---------------------

// intialise
// while (condition){
// incriment
// }


// let i=0
// while (i<=30){
//     console.log(i);
//     i = i+3
// }


// for of loop-----------

// const arr= [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
    
// }


// const greeting = "Hello world"

// for(const i of greeting){
//     console.log(i)
// }


//// maps --------------------------------

const map = new Map()
map.set('IN','India')
map.set('DE','Germany')
map.set('SE','Sweden')

// console.log(map)

//// for in loop ---------------------------------

// for (const key in map) {
//    console.log(key);
// }

//// object -- for in loop
//// array --   for of loop

//// for each loop

const coding = ["js","python","c++","ruby"]

// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach( (val) => {
//     console.log(val)
// }  )

///// filters -----------------------

const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums= nums.filter((num)=> {
//     return num > 4} )
// console.log(newNums)

// const newNums = nums.map( (num)=> num +10 )
// console.log(newNums)

///// chaining ----------------- map() filter()

// const newNums = nums
//                 .map((num)=> num*10)
//                 .map((num)=> num+1)
//                 .filter((num)=> num >=40)
// console.log(newNums)


///// reduce ------------------------


const intialVal =0
const sumWithInitial = nums.reduce( (acc, curVal)=>{
    return acc + curVal
}, 0)

console.log(sumWithInitial)