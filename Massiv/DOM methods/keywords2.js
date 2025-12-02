let counter = 0;
let interval;

document.addEventListener("keydown", function () {
  if (!interval) {
    interval = setInterval(() => {
      console.log("Sanagich: ", ++counter);
    }, 1000);
  }
});

document.addEventListener("keyup", function () {
  clearInterval(interval);
});
