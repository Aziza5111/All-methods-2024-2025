let box = document.querySelector(".box");
let horizontal = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    horizontal = horizontal + 10;
    box.style.left = `${horizontal}px`;
  } else if (e.key === "ArrowLeft") {
    horizontal = horizontal - 10;
    box.style.left = `${horizontal}px`;
  }
});

let verticale = 0;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    verticale = verticale - 10;
    box.style.top = `${verticale}px`;
  } else if (e.key === "ArrowDown") {
    verticale = verticale + 10;
    box.style.top = `${verticale}px`;
  }
});
