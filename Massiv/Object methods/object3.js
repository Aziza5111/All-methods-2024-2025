let product = {
  type: "fruit",
  fruit: "apple",
  massa: "1kg",
  price: "15000",
};

//let newProduct = { ...product };
let newProduct = Object.assign({}, product);
console.log(newProduct);
