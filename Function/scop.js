function fun1() {
  let name = "alamin";
  const age = 21;
  var color = "red";
  console.log(color);
}
function fun2() {
  let name = "alamin";
  const age = 21;
  var color = "red";
  console.log(age);
}
fun1();
fun2();

let demo = "this is global demo value";
function demo1() {
  let demo = "this is scop demo value";
  console.log(demo);
}
console.log(demo);
demo1();

//block scop function

{
  //this is a block
}

if (true) {
  var animal = "caw";
  console.log(animal);
}
console.log(animal);

let animals = ["grizzly bear", "panda bear"];
var i = 4;
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
console.log(i);

function doubleArr(arr) {
  const result = [];
  for (let num of arr) {
    var double = num * 2;
    result.push(double);
  }
  console.log(double);
  return result;
}
var a = doubleArr([1, 5, 4]);
console.log(a);
