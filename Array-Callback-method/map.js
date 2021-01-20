/**
 * creates a new array with the results of calling a callback on every element in the array
 */
const texts = ["alamin", "sheikh", "muhammad"];

const maps = texts.map(function (t) {
  return t.toUpperCase();
});
console.log(maps);
console.log(texts);

///////////////////////
//benifits of map function

const numbers = ["8", "6", "9", "4", "3", "1"];
const result = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});
console.log(result);
/**
 * output:
0: {value: "8", isEven: true}
1: {value: "6", isEven: true}
2: {value: "9", isEven: false}
3: {value: "4", isEven: true}
4: {value: "3", isEven: false}
5: {value: "1", isEven: false}
 */
const result1 = texts.map(function (text) {
  return text.toUpperCase().split("").join(".");
});
/**
 * ex:
  "abcd".toUpperCase().split('')
     ["A", "B", "C", "D"]
"abcd".toUpperCase().split('').join('.')
    "A.B.C.D"
 */
