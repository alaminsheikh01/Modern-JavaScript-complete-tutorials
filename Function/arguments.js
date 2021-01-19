console.log("arguments");

function greet(person) {
  console.log(`Hi ${person}`);
}
greet("Alamin Sheikh"); // Hi Alamin Sheikh

function demo(name, age) {
  console.log(`my name is ${name}`);
  console.log(`my age is ${age} years old`);
}
demo("Alamin sheikh", 21);

/* output
arguments
arguments.js:4 Hi Alamin Sheikh
arguments.js:9 my name is Alamin sheikh
arguments.js:10 my age is 21 years old
 */
