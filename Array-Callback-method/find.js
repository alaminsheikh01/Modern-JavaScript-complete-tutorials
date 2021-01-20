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
