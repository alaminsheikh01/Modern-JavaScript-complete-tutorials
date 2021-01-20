const nums = [2, 4, 5, 7];

const val = nums.reduce((total, currVal) => {
  if (total > currVal) {
    return currVal;
  }
  return total;

  //return Math.max(total, currVal)
  //return Math.min(total, currVal)
});
console.log(val);

//max    currVal      return
//2        4            6
//6         5            11
//11        7            18
//for sum of array
////////////////////

const num = [2, 4, 5, 7].reduce((sum, curval) => {
  return sum + curval;
}, 100);
console.log(num);

///a more advanced knowledge

const votes = ["y", "n", "y", "n", "absent", "y", "y", "n"];

const result = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

//for books array with rating
/**
books.reduce((groupbooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupbooks[key]) groupbooks[key] == [];
  groupbooks[key].push(book);
  return groupbooks;
}, {});
 */
