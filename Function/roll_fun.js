function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled ${roll}`);
}
console.log(Math.random());
rollDie();

function multiple() {
  rollDie();
  rollDie();
  rollDie();
}
multiple();

/* OUTPUT

0.5239018284375618
roll_fun.js:3 Rolled 2
roll_fun.js:3 Rolled 1
roll_fun.js:3 Rolled 6
roll_fun.js:3 Rolled 5

*/
