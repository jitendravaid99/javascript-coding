



// function sayMyName(){
//     console.log("J");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("N");
// }

// // sayMyName()

// function addTwo(num1, num2){ // parameters when defining function
//     console.log(num1 + num2)  
// }

// addTwo(3,5 ) // arguments -- when calling function


// function addTwo(num1, num2){ // parameters when defining function
//     // let result = num1 + num2
//     // return result
//     return num1 + num2
// }


// const result = addTwo(3,6)

// console.log(result)


// function loginUserMessage (username= "admin"){
//     if(!username){
//         console.log("please enter username")
//         return

//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("jiten"))
// console.log(loginUserMessage())

// ... is a rest operator here
function calculateCartPrice(... num1) {
    return num1

}

console.log(calculateCartPrice(200,300,400))


// create user object

const user = {
    userName: "jiten",
    price: 999,
    qty: 1
}


// create function and put user parameter


function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user)

// Arrow function

const arrow1 (val) => {
console.log(`Welcome ${val} ! `)

}

arrow1("Jiten")