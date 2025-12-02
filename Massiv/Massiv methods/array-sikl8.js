let fruits = ["Apple", "Lime", "Banana", "Cherry", "Strawberry", "Water melon"];
let startend = fruits.map(
  (fruit) => fruit.charAt(0) + fruit.charAt(fruit.length - 1)
);
console.log(startend);
