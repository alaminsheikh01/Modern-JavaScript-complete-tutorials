const val = (multiply = (x, y = 0) => {
  //   if (typeof y === "undefined" || typeof y === NaN) {
  //     y = 0;
  //   }

  //or
  //y = typeof y === "undefined" ? 0 : y;

  //or

  return x + y;
});

const greet = (person, greeting = "Hi") => {
  console.log(`${greeting}, ${person}`);
};
//greeting = 'Hi' = default params
