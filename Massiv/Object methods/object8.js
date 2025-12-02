let student = { fname: "Ali", age: 14, grade: 7 };

for (let user in student) {
  console.log(`${user}: ${student[user]}`);
}
