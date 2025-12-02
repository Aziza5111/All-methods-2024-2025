let btn = document.querySelector(".btn");
let number = document.querySelector("p");

btn.addEventListener("click", function () {
  number.textContent = Number(number.textContent) + 1;
});
