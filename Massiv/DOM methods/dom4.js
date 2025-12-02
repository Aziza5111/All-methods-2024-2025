let text = document.querySelector(".text");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  text.style.display = "none";
});

btn.addEventListener("mouseup", function () {
  text.style.display = "block";
});
