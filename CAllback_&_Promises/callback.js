// const btn = document.querySelector("#callBack");

// const mouseX = (element, amount, delay) => {
//   setTimeout(() => {
//     element.style.transfrom = `translateX(${amount}px)`;
//   }, delay);
// };

// mouseX(btn, 100, 1000);

const btn = document.getElementById("callBack");

const moveX = (element, amount, delay, callback) => {
  setTimeout(() => {
    element.style.transform = `translateX(${amount}px)`;
    if (callback) return callback();
  }, delay);
};
moveX(btn, 100, 1000, () => {
  moveX(btn, 200, 1000, () => {
    moveX(btn, 300, 1000, () => {
      moveX(btn, 400, 1000);
    });
  });
});
