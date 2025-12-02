let bir = document.querySelector(".bir");
let ikki = document.querySelector(".ikki");
let uch = document.querySelector(".uch");
let tort = document.querySelector(".tort");
let besh = document.querySelector(".besh");
let olti = document.querySelector(".olti");
let yetti = document.querySelector(".yetti");
let sakkiz = document.querySelector(".sakkiz");
let toqqiz = document.querySelector(".toqqiz");

let acc = 0;

let birIsClick = false;
let ikkiIsClick = false;
let uchIsClick = false;
let tortIsClick = false;
let beshIsClick = false;
let oltiIsClick = false;
let yettIsClick = false;
let yettiIsClick = false;
let sakkizIsClick = false;
let toqqizIsClick = false;

bir.addEventListener("click", () => {
  if (birIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      birIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      bir.appendChild(iks);
    } else {
      acc = acc - 1;
      birIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      bir.appendChild(nol);
    }
  }
});

ikki.addEventListener("click", () => {
  if (ikkiIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      ikkiIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      ikki.appendChild(iks);
    } else {
      acc = acc - 1;
      ikkiIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      ikki.appendChild(nol);
    }
  }
});

uch.addEventListener("click", () => {
  if (uchIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      uchIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      uch.appendChild(iks);
    } else {
      acc = acc - 1;
      uchIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      uch.appendChild(nol);
    }
  }
});

tort.addEventListener("click", () => {
  if (tortIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      tortIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      tort.appendChild(iks);
    } else {
      acc = acc - 1;
      tortIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      tort.appendChild(nol);
    }
  }
});

besh.addEventListener("click", () => {
  if (beshIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      beshIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      besh.appendChild(iks);
    } else {
      acc = acc - 1;
      beshIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      besh.appendChild(nol);
    }
  }
});

olti.addEventListener("click", () => {
  if (oltiIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      oltiIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      olti.appendChild(iks);
    } else {
      acc = acc - 1;
      oltiIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      olti.appendChild(nol);
    }
  }
});

yetti.addEventListener("click", () => {
  if (yettiIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      yettiIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      yetti.appendChild(iks);
    } else {
      acc = acc - 1;
      yettiIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      yetti.appendChild(nol);
    }
  }
});

sakkiz.addEventListener("click", () => {
  if (sakkizIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      sakkizIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      sakkiz.appendChild(iks);
    } else {
      acc = acc - 1;
      sakkizIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      sakkiz.appendChild(nol);
    }
  }
});

toqqiz.addEventListener("click", () => {
  if (toqqizIsClick) {
    alert("Bu bosilgan");
  } else {
    if (acc % 2 == 0) {
      acc = acc + 1;
      toqqizIsClick = true;
      let iks = document.createElement("i");
      iks.classList.add("fa-solid");
      iks.classList.add("fa-xmark");
      toqqiz.appendChild(iks);
    } else {
      acc = acc - 1;
      toqqizIsClick = true;
      let nol = document.createElement("div");
      nol.classList.add("nol");
      toqqiz.appendChild(nol);
    }
  }
});
