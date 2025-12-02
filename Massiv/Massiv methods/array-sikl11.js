let fruits = ["Apple", "Lime", "Banana", "Cherry", "Strawberry", "Water melon"];
let repeat = fruits.filter(
  (fruit) => fruit.includes("rr") || fruit.includes("W")
);
console.log(repeat);
