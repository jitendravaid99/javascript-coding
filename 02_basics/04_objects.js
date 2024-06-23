const tinderUser = new Object() // Singleton object

// const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "abc@google.com",
//     fullname : {
//         username : "jiten",
//         firstname : "jitendra",
//         lastname : "vaid"
//     }
// }

// console.log(regularUser.fullname.username)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}



// const obj4 = Object.assign( {}, obj1, obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3} // spread the objects using 3 dots ...
console.log(obj4)
// when data comes from database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {},
    {},
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// Destructing 

const course = {
    coursename: "js in hindi",
    price: "9999",
    courseInstructor : "Jitendra"

}

// course.courseInstructor 
const {courseInstructor: instructor} = course

console.log(instructor)
// console.log(price)

// kisi ka kaam kis aur ko dena

// {
//     "name": "jiten",
//     "courseName": "js in hindi",
//     "price": "free"
// }