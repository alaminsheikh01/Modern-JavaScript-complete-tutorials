///find/////////////////////

let movies = [
  "The fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

let movie = movies.find((movie) => {
  return movie.includes("Mrs.");
});
//"Mr. and Mrs. Smith"

let movie2 = movies.find((m) => m.indexOf("Mrs") === 0);
//"Mrs. Doubtfire"

//const goodbook = books.find(b => b.rating >=4.3) //will find just one value

//const neilbook = books.find(b=> b.authors.includes('alamin Sheik')) // will find whole array of author
/////////////////////////////////////////////////////////

//filter/////////////////

const nums = [4, 6, 3, 5, 34, 6, 3, 2, 78, 65];
const fil = nums.filter((n) => n % 2 == 1);
