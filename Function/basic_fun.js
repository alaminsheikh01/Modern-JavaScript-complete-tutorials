console.log("Hello"); //Hello
console.log("hello".toUpperCase()); // HELLO

function demo() {
  console.log("this is first line");
  console.log("this is second line");
}

demo(); //this is first line
//this is second line
demo(); //continue will be copy 2 console line.

for (let i = 0; i < 50; i++) {
  demo(); //this function will be print 50 times
}
