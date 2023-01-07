function greet(question){
  let rlSync = require('readline-sync');
  let input = rlSync.question(question);
  return input;
}

let fname = greet("What is your first name? ");
let lname = greet("What is your last name? ");
console.log(`Hello, ${fname} ${lname}!`);
