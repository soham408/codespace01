const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);
//console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);

const all_newheros = [...marvel_heros, ...dc_heros]
//console.log(all_newheros);

const anather_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anather_array = anather_array.flat(Infinity) // to accsess all values

//console.log(real_anather_array);


console.log(Array.isArray("soham")); //for check Array exist or not
console.log(Array.from("soham")); // to convert value in array
console.log(Array.from({name: "soham"})); // to convert value in array

console.log(Array.of("soham"));

let score1 = 100
let score2 = 200
let score3 = 300


// console.log(Array.of(score1, score2, score3));