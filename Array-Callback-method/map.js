/**
 * creates a new array with the results of calling a callback on every element in the array
 */
const texts = ["alamin", "sheikh", "muhammad"];

const maps = texts.map(function (t) {
  return t.toUpperCase();
});
console.log(maps);
console.log(texts);
