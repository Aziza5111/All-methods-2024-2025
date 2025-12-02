let text = document.querySelector(".text");
let btn = document.querySelector(".btn");

text.addEventListener("mouseover", function () {
  text.style.color = "gray";
  console.log(text);
});

text.addEventListener("mouseout", function () {
  text.style.color = "red";
  console.log(text);
});
