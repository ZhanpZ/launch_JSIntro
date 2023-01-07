function multiply(a, b){
  return a * b;
}

function getNumber(question){
  rlSync = require("readline-sync");
  return parseFloat(rlSync.question(question));
}

let fnum = getNumber("Input the first number: ");
let snum = getNumber("Input the second number: ");
console.log(`The mutliplication of ${fnum} and ${snum} is ${multiply(fnum, snum)}`);
