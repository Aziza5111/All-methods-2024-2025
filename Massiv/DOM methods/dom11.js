let element = document.querySelector(".element");

element.addEventListener("mousedown", function () {
  element.style.display = "none";
});

element.addEventListener("mouseup", function () {
  element.style.display = "block";
});
