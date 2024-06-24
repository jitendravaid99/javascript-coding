// const user = {
//     username : "hitesh",
//     price: 999,
//     welcomeMessage : function (){
//         console.log(`${this.username}, welcome to website`)
//     }
// }

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this);
// }
// chai()

// function chai1(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai1()

// const chai2 = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai2()

const chai3 = ()=> {
    let username = "hitesh"
    console.log(this.username);
}
// chai3()

// const addTow = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTow(2,3))

// const addTwo = (num1,num2) => num1 + num2 // implicit return
// const addTwo = (num1,num2) => (num1 + num2) // implicit return
const addTwo = (num1,num2) => ({username: "jiten"}) // implicit return



console.log(addTwo(2,3))