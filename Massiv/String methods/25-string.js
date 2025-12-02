let str = "Coding";

if (!(str.length % 2)) {
  let first = str.slice(0, str.length / 2 - 1);
  let last = str.slice(str.length / 2 + 1);

  console.log(first + "**" + last);
} else {
}
