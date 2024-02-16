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

const ProgressBar = require("progress");

// Options:

// total total number of ticks to complete
// width the displayed width of the progress bar defaulting to total
// stream the output stream defaulting to stderr
// complete completion character defaulting to "="
// incomplete incomplete character defaulting to "-"
// renderThrottle minimum time between updates in milliseconds defaulting to 16
// callback optional function to call when the progress bar completes
// clear will clear the progress bar upon termination

// Tokens:

// :bar the progress bar itself
// :current current tick number
// :total total ticks
// :elapsed time elapsed in seconds
// :percent completion percentage
// :eta eta in seconds

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :eta", {
  total: 30,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

//chalk to color
const chalk = require("chalk");

console.log(chalk.red("This is in red color"));
