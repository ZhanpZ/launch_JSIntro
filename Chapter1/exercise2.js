let number = 4936;
let ones = number%10;

number = (number-ones)/10;
let tens = number%10;

number = (number-tens)/10;
let hundreds = number%10;

number = (number-hundreds)/10;
let thousands = number%10;

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);
