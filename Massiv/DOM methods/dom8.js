let btn = document.querySelector(".btn");
let place = document.querySelector(".maydon");

btn.addEventListener("click", function () {
  if (btn.textContent == "Hide") {
    place.type = "password";
    btn.textContent = "Show";
  } else {
    place.type = "text";
    btn.textContent = "Hide";
  }
});
