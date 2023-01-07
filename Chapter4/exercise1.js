let bar = 1;
function foo() {
  let bar = 2;
  //bar = 2;
}

foo();
console.log(bar);

/*
It would output 1 because the bar inside the foo function is a different bar than the outer scope's bar
*/
