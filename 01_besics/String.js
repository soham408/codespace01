const name = "soham"
const repoCount = 50

console.log(name + repoCount + " value"); 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('sohamlb')
console.log(gamename);

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);  // total count of charactors
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));     // to know which charactor is on second number
console.log(gamename.indexOf('a')); // to know a chractor which number of position 

const newString = "   soham   "
console.log(newString);
console.log(newString.trim());  // use 'trim' to remove unwanted spacese

const url = "https://soham.com/soham%80bambade"

console.log(url.replace('%80', '-'));  // use 'repalce' to modified something  