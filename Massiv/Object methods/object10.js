let user = {
  name: "Sharqiya",
  email: "alijonovasharqiya@gmail.com",
  age: 16,
};
let newUser = { ...user };
user.age = 15;

console.log(newUser);
