document.addEventListener("keydown", function (event) {
  if (event.shiftKey) {
    document.body.style.backgroundColor = "green";
  }
});

document.addEventListener("keyup", function (event) {
  document.body.style.backgroundColor = "red";
});
