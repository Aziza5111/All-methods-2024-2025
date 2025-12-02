let name = prompt("Ismingizni kiriting:");
let birthdate = prompt("Tug'ilgan kuningizni kiriting:");

let hozir = new Date().getTime();
let day = new Date(2008, 3, 9).getTime();
let todaysyear = new Date(hozir).getFullYear();
let birthyear = new Date(day).getFullYear();
let Livedyear = todaysyear - birthyear;
let birthmonth = new Date(Livedyear).getMonth();
let birthday = new Date(birthmonth).getDay();
let birthtime = new Date(birthday).getHours();

console.log(
  "Hurmatli",
  name,
  "siz",
  Livedyear,
  " yil,",
  birthmonth,
  "oy,",
  birthday,
  "kun,",
  birthtime,
  "soat yashabsiz."
);
