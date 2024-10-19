const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["bhagatsingh", "sukhdev"]

const Arr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// =========== methods ============

// myArr.push(6)
// myArr.push(7) // Adding new elements to the end of an array
// myArr.pop()   // for removing last array value

myArr.unshift(0) // adding value starting side in array 
myArr.shift()  // removing starting value 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// ====== slice or splice ======

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2)
