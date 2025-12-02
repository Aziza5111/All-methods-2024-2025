let cells = [
  "bir",
  "ikki",
  "uch",
  "tort",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "toqqiz",
];
let acc = 0;
let clickedCells = {};

let winPatterns = [
  [".bir", ".ikki", ".uch"],
  [".tort", ".besh", ".olti"],
  [".yetti", ".sakkiz", ".toqqiz"],
  [".bir", ".tort", ".yetti"],
  [".ikki", ".besh", ".sakkiz"],
  [".uch", ".olti", ".toqqiz"],
  [".bir", ".besh", ".toqqiz"],

  [".uch", ".besh", ".yetti"],
];

cells.map((cell) => {
  let element = document.querySelector(`.${cell}`);
  clickedCells[cell] = false;

  element.addEventListener("click", () => {
    if (clickedCells[cell]) {
      alert("Bu bosilgan");
    } else {
      clickedCells[cell] = true;
      let mark = document.createElement(acc % 2 == 0 ? "i" : "div");

      if (acc % 2 == 0) {
        mark.classList.add("fa-solid", "fa-xmark");
      } else {
        mark.classList.add("nol");
      }

      element.appendChild(mark);
      acc++;

      winPatterns.forEach((pattern) => {
        let cells = pattern.map((selector) => document.querySelector(selector));
        if (cells.every((cell) => cell.innerHTML.includes("fa-xmark"))) {
          cells.forEach((cell) => (cell.style.backgroundColor = "aqua"));
        } else if (cells.every((cell) => cell.innerHTML.includes("nol"))) {
          cells.forEach((cell) => (cell.style.backgroundColor = "red"));
        }
      });
    }
  });
});
