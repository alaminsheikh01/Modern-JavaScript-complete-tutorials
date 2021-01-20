const nums = [5, 8, 6, 3, 2, 1, 5, 4, 1, 2];

nums.forEach(function (n) {
  //console.log(n * n);
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});
