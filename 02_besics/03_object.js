//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "soham",
    "full name": "soham bambade",
    [mySym]: "mykey1",
    age: 22,
    location: "Ratnagiri",
    email: "soham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Methods of accessing objects

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// how to change / overwrite object value
JsUser.email = "slb@gmail.com"
// how to freeze object
Object.freeze(JsUser)
JsUser.email = "ssb@gmail.com"
console.log(JsUser);

