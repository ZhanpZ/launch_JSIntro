function oddLengths(strings){
  return arr.reduce((accumulator, element) =>
            {
              let length = element.length;
              if(length % 2 === 1){
              accumulator.push(element.length)}
              return accumulator
            }, []);
        }

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
