let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyOfobj = Object.keys(obj);
let upperKey = keyOfobj.map((element) => element.toUpperCase());
console.log(keyOfobj);
console.log(upperKey);
