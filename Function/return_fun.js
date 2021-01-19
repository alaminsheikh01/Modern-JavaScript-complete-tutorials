function multiplayBy() {
  return function () {
    console.log("Hi");
  };
}
const fun = multiplayBy();
fun(); //Hi

///////////////////////////////////////////////////////

function multiplay(num) {
  return function (x) {
    return x * num;
  };
}

const truple = multiplay(3);
console.log(truple(1));
/**
 * multiplay(3) will store value inside num
 * and truple(1) will store inside x
 * please check in the chrome console write truple then you can understand
 */

///////////////////////////////

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

const ischild = makeBetweenFunc(1, 15);
