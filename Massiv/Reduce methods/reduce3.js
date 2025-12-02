let sentence = "Bugun havo juda yaxshi";
let initials = sentence
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(initials);
