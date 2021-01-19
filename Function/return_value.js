const val = "hello".toUpperCase();
console.log(val);

function add(x, y) {
  return x + y;
}
const total = add(43, 6); //we need to store data to print value.
console.log(total);

function isPurple(color) {
  if (color.toLowerCase() === "purple") {
    return true;
  } else {
    return false;
  }
}
const result = isPurple("Purple");
console.log("result for first fun: " + result);

function containsColor(arr) {
  for (let color of arr) {
    if (color === "purple" || color === "red") {
      return true;
    }
    return false;
  }
}
const a = containsColor(["purple", "red"]);
console.log("result for second fun: " + a);
