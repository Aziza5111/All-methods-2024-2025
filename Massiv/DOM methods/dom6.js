let text = document.querySelector(".text");
let btn = document.querySelector(".btn");

let father = document.querySelector(".btns");

btn.addEventListener("click", function () {
  let newBtn = document.createElement("button");
  newBtn.textContent = "New Button ";

  father.appendChild(newBtn);
});
