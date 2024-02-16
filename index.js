require("dotenv").config();
console.log("Hello World");
console.log(`my fav fruit is ${process.env.APPLE}`);

// if you don't want require('dotenv').config()

// npm -r dotenv/config index.js

// => repl
// read evaluate print loop

//Formats
// => %s for string
// => %d for number
// => %i for int
// => %o for object

console.log("I'm %s, %d years ", "Rahul", 26);

// => clear
// console.clear();
// -> count 2
console.count("I'm Rahul");
console.count("I'm Rahul");
console.countReset("I'm Rahul");

//console.trace() is for tracing and debugging

// time taken by function
const sum = () => console.log(2 + 3);
const measureTime = () => {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");
};

measureTime();
