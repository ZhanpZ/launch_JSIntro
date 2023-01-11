function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
//It would return not empty, even though the [] is length 0 and no element it is not falsy therefore it would execute the Not Empty
