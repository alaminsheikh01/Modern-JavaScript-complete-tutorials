const prices = [2, 5, 8, 9, 6, 3, 2, 10, 45, 8, 85];
const sor = prices.slice().sort();

const sort1 = prices.slice().sort((a, b) => a - b); //sort will be assending order
const desc = prices.slice().sort((x, y) => y - x);

//assendng  books.sort(a,b) => a.rating - b.rating
//desnding books.sort(a,b) => b.rating - a.rating
