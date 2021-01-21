/*
A small Taste

-click 
-drags
-drops
-hovers
-scrolls
-form submission
-key presses
-focus/blur


-mouse wheel
-double click
-copying
-pasting
-aution start
-screen resize
-printing

 */
console.log("Learning event Listiner");

//click event
// const single = document.querySelector("#single");
// const double = document.querySelector("#double");
// single.onclick = function () {
//   alert("Hi");
// };
// double.ondblclick = function () {
//   alert("Hi");
// };
///////////////////////////

//addEventListener
// const button = document.querySelector("#addEvent");
// button.addEventListener("mouseover", function () {
//   console.log("touch me");
// });

// window.addEventListener("scroll", function () {
//   console.log("stop scrolling");
// });
//////////////////////////////////

// const btn = document.querySelector("button");
// btn.addEventListener("mouseover", function () {
//   console.log("hover me");
//   const h = Math.floor(Math.random() * window.innerHeight);
//   const w = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${h}px`;
//   btn.style.top = `${w}px`;
//   btn.style.color = "red";
// });

// btn.addEventListener("click", function () {
//   btn.innerText = "You got me";
//   document.body.style.backgroundColor = "green";
// });
/////////////////////////////////////

// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet",
// ];

// const container = document.querySelector("#boxes");
// const changeColor = function () {
//   const h1 = document.querySelector("h1");
//   h1.style.color = this.style.backgroundColor;
// };

// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);

//   box.addEventListener("click", changeColor);
// }
// document.body.addEventListener("keypress", function (e) {
//   console.log(e);
// });
//////////////////////////////////////

const addItemInput = document.querySelector("#addItemInput");
const itemUL = document.querySelector("#itemUL");

addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    itemUL.appendChild(newItem);
    this.value = "";
  }
});
