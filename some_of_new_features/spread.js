function result(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
const colors = ["red", "orange", "yellow", "green"];

result(colors);
/**
 a (4) ["red", "orange", "yellow", "green"]0: "red"1: "orange"2: "yellow"3: "green"length: 4__proto__: Array(0)
spread.js:3 b undefined
spread.js:4 c undefined
spread.js:5 d undefined
 */

result(...colors);
/**
  a red
spread.js:3 b orange
spread.js:4 c yellow
spread.js:5 d green
  */

///////////////////////////////

// spreead in object literals
const feline = {
  legs: 4,
  family: "Felidae",
};
const canine = {
  family: "caninae",
  furry: true,
};
const dog = {
  ...feline,
  isPet: true,
  adorable: true,
};
/**
 adorable: true
family: "Felidae"
isPet: true
legs: 4
 */

const random = [..."hello", { ...dog }];
// 0: "h"
// 1: "e"
// 2: "l"
// 3: "l"
// 4: "o"
// 5:
// adorable: true
// family: "Felidae"
// isPet: true
// legs: 4

Math.max(...[4, 6, 7, 8]); //8
///////////////////////

//Rest Parametes
function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}
// fullName("Alamin","sheikh", "sfsgsdg","asdfga")
// spread.js:65 first Alamin
// spread.js:66 last sheikh
// spread.js:67 titles (2) ["sfsgsdg", "asdfga"]

const results = [
  {
    name: "Alamin",
    country: "bangladesh",
  },
  {
    name: "sheikh",
    country: "bd",
  },
];

const [{ name }, { country }] = results;
// name
// "Alamin"
// country
// "bd"
