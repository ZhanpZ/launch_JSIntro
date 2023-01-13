let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(nestedarray){
  nestedarray.forEach(function(val){
    if(val % 2 === 0){
      console.log(val);
    }
  });
});
