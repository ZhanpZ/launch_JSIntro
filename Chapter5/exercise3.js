function evenOrOdd(number) {
  if(!(Number.isInteger(number))){
    console.log("Input is not a number ");
    return;
  }

  if(number%2===0){
    console.log('even');
    return;
  }else{
    console.log('odd');
    return;
  }
}
