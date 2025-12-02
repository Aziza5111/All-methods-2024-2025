let element = document.querySelector(".element");

element.addEventListener("mousemove", function () {
  element.textContent = "Siz sichqonchani harakatlantiryapsiz";
});

element.addEventListener("mouseleave", function () {
  element.textContent = "Sichqoncha tashqarida!";
});
