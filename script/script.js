let num = 266219;
const getMultiple = (num) => num.toString().split('').reduce((res, item) => item * res, 1)
console.log(getMultiple(num));

let pow = getMultiple(num);
pow **= 3;
console.log(pow);

console.log(String(pow).slice(0,2));