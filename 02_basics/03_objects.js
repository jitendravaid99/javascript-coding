// singleton
// object.create

// object literals

const mySymb = Symbol("Key1")

const JsUser = {
    name: "Jiten",
    "full name": "Jitendra Vaid",
    [mySymb]: "myKey1",
    age: 40,
    location: "Delhi",
    email: "jiten@google.com",
    isLoggedIn: false,
    
}

// Object.freeze(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(typeof JsUser[mySymb])


JsUser.email = "jiten@chatgpt.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello JS users");
}

JsUser.greeting2 = function(){
    console.log("hello JS users");
}

console.log(JsUser);