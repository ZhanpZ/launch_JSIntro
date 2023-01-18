let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
console.log("this is for the first snippet")
objKeys.forEach(function(key) {
  console.log(key);
});

console.log("this is for the second snippet")
for (let key in myObj) {
  console.log(key);
}

//I think the two snippets would not produce the same output
//the first snippet would produce only qux but the second snippet would also produce the output including the parts from the first snippet
//for loop would iterate through all the properties, unless you add the constraint of hasOwnProperty
