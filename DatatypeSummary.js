// ---------- primitive datatype --------------

// 7 String , Number , Boolean , null , undefined , symbol , Bigint

const score = 100
const scoreValue = 100.0

const isLoggedIn = false
const outsideTemp = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 724626726726488726886826n /* when we write 'n' end of the big number is automativally become a 'Bigint' datatype  */

console.log(bigNumber);


//--------------- (refrence type) non premitive datatype ----------------

/* 1) Array 
 const abc = ["asdf","fdas"] 
 console.log(abc);

2) objects let myObj = {
   name: "soham",
   age: 22,
} 

3) Functions

const myFunction = function(){
    console.log("Hello World");
}
*/

const heros = ["bhagatsingh","sukhdev","Ngodse"] 
 console.log(heros);


 let myObj = {
    name: "soham",
    age: 22,
 } 

 console.log(myObj);


 const myFunction = function(){
    console.log("Hello World");
 }

 // 'js' is a dynamically typed landuage, because datatype will automatically assigned at the time of code execution.


