const prompt = require('prompt-sync')({sigint: true}); //
//first question
const firstName= "Jordan"
const lastName= "Pufon"
const name = firstName.concat(" ",lastName);
console.log(name);


//second question

var a =2;
var b =3;
var x = a + b;
console.log(x);

let x1 = 3;
let y = 15;
console.log(x1 + y);

//4
let num1 =2;
let num2 =3;
let P = num1 *num2 ;
console.log(`The product of ${num1} and ${num2} is ${num2} `)

//5


let num = parseInt(prompt("Type in a number >>"))

let square = Math.sqrt(num)
console.log(`The square of ${num} is ${square} `)
//6

let diff = num1-num2;
console.log(`The difference of ${num1} and ${num2} is ${diff } `)

//7

let qu = num1/num2;
console.log(`The quotien of ${num1} and ${num2} is ${qu } `)

//8
let sol = Math.abs(-234 + -89);

console.log(sol);

//9

let Alph = 6 ;

let bet = Math.pow(Alph,7);

console.log( bet);

//10 

const pi = 3.14
console.log(Math.round(pi));

