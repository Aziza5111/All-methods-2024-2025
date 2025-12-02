let AName = prompt("Ismingizni kiriting:");
let birthYear1 = prompt("Tug'ilgan yilingizni kiriting");
let birthMonth1 = prompt("Tug'ilgan oyingizni kiriting");
let birthDay1 = prompt("Tug'ilgan kuningizni kiriting");

let fName = prompt("Ismingizni kiriting:");
let birthYear2 = prompt("Tug'ilgan yilingizni kiriting");
let birthMonth2 = prompt("Tug'ilgan oyingizni kiriting");
let birthDay2 = prompt("Tug'ilgan kuningizni kiriting");

let now = Date.now();
let birth1 = new Date(birthYear1, birthMonth1 - 1, birthDay1).getTime();
let birth2 = new Date(birthYear2, birthMonth2 - 1, birthDay2).getTime();
let forHour1 = new Date();
let forHour2 = new Date();

const livedYear1 = parseInt((now - birth1) / 1000 / 60 / 60 / 24 / 365.25);
const livedMonth1 =
  parseInt(((now - birth1) / 1000 / 60 / 60 / 24 / 365.25) * 12) -
  livedYear1 * 12;
const livedDay1 = parseInt(
  parseInt((now - birth1) / 1000 / 60 / 60 / 24) -
    (livedYear1 * 365.25 + livedMonth1 * (365.25 / 12))
);
const livedHour1 = forHour1.getHours();

const livedYear2 = parseInt((now - birth2) / 1000 / 60 / 60 / 24 / 365.25);
const livedMonth2 =
  parseInt(((now - birth2) / 1000 / 60 / 60 / 24 / 365.25) * 12) -
  livedYear2 * 12;
const livedDay2 = parseInt(
  parseInt((now - birth2) / 1000 / 60 / 60 / 24) -
    (livedYear2 * (365.25 / 12) + livedMonth2 * (365.25 / 12))
);
const livedHour2 = forHour2.getHours();

console.log(
  "Hurmatli",
  AName,
  "siz",
  livedYear1,
  "yil",
  livedMonth1,
  "oy",
  livedDay1,
  "kun",
  livedHour1,
  "soat yashabsiz"
);

console.log(
  "Hurmatli",
  fName,
  "siz",
  livedYear2,
  "yil",
  livedMonth2,
  "oy",
  livedDay2,
  "kun",
  livedHour2,
  "soat yashabsiz"
);

let yearDifference = Math.abs(livedYear1 - livedYear2);
let monthDifference = Math.abs(
  (livedYear1 * 12 + livedMonth1 - (livedYear2 * 12 + livedMonth2)) % 12
);
let dayDifference = Math.abs(
  livedMonth1 * 365.25 +
    livedDay1 -
    ((livedMonth2 * 365.25 + livedDay2) % 365.25)
);
let hourDifference = Math.abs(
  livedDay1 * 24 + livedHour1 - (livedDay2 * 24 + livedHour2)
);

console.log(
  "Birinchi va ikkinchi odam orasidagi farq:",
  yearDifference,
  "yil",
  monthDifference,
  "oy",
  dayDifference,
  "kun",
  hourDifference,
  "soat"
);
