let matn = document.querySelector("p");

document.addEventListener("keydown", function (event) {
  if (event.key === "A" || event.key === "a") {
    if (event.shiftKey) {
      console.log("Shift + A kombinatsiyasi ishladi!");
    } else {
      console.log("A bosildi");
    }
  }
});
