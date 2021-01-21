/**
 * //play with google
 
const myImgs = document.createElement('img');
myImgs.src = 'https://picsum.photos/id/237/200/300';

myImgs.style.width='200px'
document.body.append(myImgs);
myImgs.style.transition = 'all 2s'

const allE = document.body.children;

setInterval(() =>{
    for(let el of allE){
        const rotation = Math.floor(Math.random() * 360)
         const x = Math.floor(document.body.clientWidth * Math.random())
         const y = Math.floor(document.body.clientHeight * Math.random())
         el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`
    }
    
},2000)

 */

const allLis = document.querySelectorAll("li");
for (let i = 0; i < allLis.length; i++) {
  //console.log(allLis[i].innerText);
  // allLis[i].innerText = "THIS IS FIRST DOM";
}
// First thing
// second thing
// third thing

const colors = ["red", "blue", "green"];

allLis.forEach((li, i) => {
  const color = colors[i];
  console.log(color);
  li.style.color = color;
});

////////////////////////////////

const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/id/237/600/300";
newImg.style.width = "500px";
document.body.appendChild(newImg);

///////////////////////////////

const newLink = document.createElement("a");
newLink.innerText = "Hello";
newLink.href = "#";

const p = document.querySelector("p");
p.appendChild(newLink);

//////////////////////////////
