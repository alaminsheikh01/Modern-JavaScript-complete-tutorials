//Normal scope function

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

//////////////////////////////////

let demo = "this is global demo value";
function demo1() {
  let demo = "this is scop demo value";
  console.log(demo);
}
console.log(demo);
demo1();

////////////////////////////////////
//block scop function

{
  //this is a block
}

if (true) {
  var animal = "caw";
  console.log(animal);
}
console.log(animal);

////////////////////////////////////

let animals = ["grizzly bear", "panda bear"];
var i = 4;
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
console.log(i);

////////////////////////////////////////

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

///////////////////////////////////////////

///LEXICAL SCOPE
function outer() {
  let hero = "Black Panther";

  function inner() {
    let helpFun = `${hero} please help me`;
    console.log(helpFun);
  }
  inner();
}
outer();

/////////////////////////////////////////

//Function Expressions

function add(x, y) {
  return x + y;
}

const sum = function (x, y) {
  return x + y;
};

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

const operation = [add, sub, mul, div];

for (let fun of operation) {
  let result = fun(4, 6);
  console.log(result);
}
////////////////////////////////////////////////
