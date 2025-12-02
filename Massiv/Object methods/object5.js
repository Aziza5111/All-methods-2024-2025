let users = [
  { id: 1, fname: "Ali", age: 24 },
  { id: 2, fname: "Vali", age: 21 },
  { id: 3, fname: "Halim", age: 26 },
];

let filteredUsers = users.filter((user) => user.age > 25);
console.log(filteredUsers);
