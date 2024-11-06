let name = "soham"
let age = 23
let isloggedIn = false

// console.table([name, age, isloggedIn])

// console.log(typeof null)

let score = false

let valueInNumber = String(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

const myname = "soham"
const myage = 23

// console.log(myname + myage + " bambade");

// console.log(`hello my name is ${myname} and age is ${myage}`);


// date and time ========================= 

// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toLocaleDateString());

// let mydate = new Date("2024-10-10")
// console.log(mydate.toString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newDate = new Date()

// newDate.toLocalString('default',{
//     weekday: "long"
// })

// console.log(newDate)


// Array======================

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[5]);


// ================ functions ===================

function sayMyname(){
    console.log("s");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("m");  
};

// sayMyname();

function addNum(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2;
}

const result = addNum(1, 2);
// console.log("result: ", result);

function Userlog(msg){
  return `${msg} just logged in` 
}

// console.log(Userlog("soham"));

      // rest and spread
        //  rest
      function calculateaprice(val1, val2, ...num1){
        return val1, val2, num1    // explicit return
        // console.log(val1, val2, ...num1);
        
      }

      // console.log(calculateaprice(10, 20, 30, 4440, 55, 60))
      //  calculateaprice(21, 54, 56, 898, 45)

        // arrow function======

        function thisKeyword(){ 
          console.log(this); 
        }

        // thisKeyword()

        const addTwo = (num1, num2) => (num1 + num2)  //  implicit return
        // console.log(addTwo(2, 3));

        
        // control flow

        // if (2 === "2") {
        //   console.log("executed");
          
        // } else {
        //   console.log("not executed");
          
        // }
        
      // const userEmail = "suraj@gamil"

        // if (userEmail === "soham@gamil" && userEmail === "akankshas") {
        //    console.log("got email id");
           
        // } else {
        //   console.log("not get email");
          
        // }
        
        let myArray = ["ak" , "soham" , "bambade"]
        // console.log(myArray.length);
        
        for (let i = 0; i < myArray.length; i++) {
          const element = myArray[i];
          // console.log(element);
          
        }

        for (let index = 1; index <= 20; index++){
          if (index == 5) {
          // console.log(`detected 5`)
            break
          }
            // console.log(`value of i is ${index} `);
                  
        }



        for (let index = 1; index <= 20; index++){
          if (index == 5) {
          // console.log(`detected 5`)
            continue
          }
            // console.log(`value of i is ${index} `);
                  
        }

        // while loop and 

        // let index = 0
        // while (index <= 10) {
        //   console.log(`value of index: ${index}`);
        //   index ++
          
        // }

        let myarr = ['ak', 'soham', 'bambade']
        let arr = 0
 while (arr < myarr.length) {
  // console.log(`value is ${myarr[arr]}`);
   arr ++ 
 }

 //do while loop

// let runs = 1

//  do {
//   console.log(`runs is ${runs}`);
//   runs++s
//  } while (runs <= 10);

 // for of loop (for array)

 const looparr = [1, 2, 3, 4, 5] 

 for (const num of looparr) {
  // console.log(num); 
  
 }

 for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
//  for (let j = 1; j <= 10; j++) {
//   console.log(i + '*' + j + ' = ' + i*j );
//  }
  
}



// for (let i = 10; i <= 30; i++) {
//  console.log(`Table of: ${i}`);
//  for (let j = 10; j <= 30; j++) {
//   console.log(i*j);
 
// }



// let num = 10
// for (let i = 1; i <= 10; i++) {
//  console.log(`Table of: ${i}`);
//  for (let j = 1; j <= 10; j++) {
//   // console.log(i*j);
 
// }
 
// }



let tbl = 5
for (let i = 1; i <= 10; i++) {
console.log(tbl + ' * ' + i + ' = ' + tbl * i);
  
} 

// let num = 20
// for (let i = 1; i <= 10; i++) {
//   // console.log(`${num} x ${i} = ${num * i}`);
//   console.log(num + ' * ' + i + ' = ' + num * i);
  
// }



//  filter

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBook = books.filter( function (bk) {
// return bk.genre === 'History'
// })

// console.log(userBook);
// console.log(books);


        // another method (one line method)

        // const userBook = books.filter( (bk) => bk.genre === 'History')
        // console.log(userBook);
        

        const userBooks = books.filter( function (bk) {
          return bk.genre === 'History' && bk.edition <= 2008
        })

        console.log(userBooks);

        
        
        // promise (.then, try, catch, fanally, async, await) 

        const promiseOne = new Promise( (resolve, reject) => {
          setTimeout( () => {
              // console.log(`async task is compelete`);
              resolve()    
          })
      })
      
      promiseOne.then( () => {
          // console.log(`promise is consumed`);
          
      })
      
      new Promise(function (resolve, reject){
          setTimeout(function () {
              // console.log('task 2 complete');
              resolve()
          }, 1000)
      }).then(function () {
          // console.log('task 2 consumed');
          
      })
      
      const promiseThree = new Promise(function(resolve, reject){
          setTimeout(function (){
              resolve({name : 'soham' , age : 23})
          }, 1000)
      })
      // resolve connection with 'then'
      promiseThree.then(function(user){
      // console.log(user);
      
      })
      
      
      const promiseFour = new Promise(function(resolve, reject){
          setTimeout(function(){
              let error = true
              if (!error) {
                  resolve({username : 'soham408', pass : 'AsohamB'})
              } else {
                  reject('Error : something went wrong')
              
              }
              
          }, 1000)
      })
      
      promiseFour.then(function(user){
          // console.log(user);
          return user.username
      }).then(function(username){
          // console.log(username);
      }).catch(function(error){
          // console.log(error);
      }).finally(function(){
          // console.log('resolve  rejected');
      })
      
      // promise handling with async await
      
      const promiseFive = new Promise (function(resolve, reject){
          setTimeout(function(){
              let error = false
              if (!error) {
                  resolve({username : 'soham408', pass : 'AsohamB'})
              } else {
                  reject('Error : js went wrong')
              }
          }, 1000)
      })
      
       async function consumePromiseFive(){
          try {
              const response = await promiseFive
              console.log(response);
          } catch (error) {
              console.log(error);
              
          }
          
       }
      //  consumePromiseFive()
      
      async function getallUsers (){
          try {
              const response = await fetch('https://api.github.com/users/soham408')
      
              const data = await response.json()
              console.log(data);
              
          } catch (error) {
              console.log('E: ', error);
              
          }
      }
      getallUsers()