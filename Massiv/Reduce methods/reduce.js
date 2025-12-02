////1-mashq

let numbers = [-2, 3, 5, -1, 4, -6];

let positive = numbers.filter((number) => number > 0);
let sum = positive.reduce((acc, cur) => {
  return acc * cur;
}, 1);
console.log(sum);
