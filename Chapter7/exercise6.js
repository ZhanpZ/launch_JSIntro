let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let length = arr.map(function(value){
  return value.length;
});

let ans = length.filter(function(element){
  if(element % 2 !== 0){
    return element
  }
});

console.log(ans);
