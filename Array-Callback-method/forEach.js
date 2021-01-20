const nums = [5, 8, 6, 3, 2, 1, 5, 4, 1, 2];

nums.forEach(function (n) {
  console.log(n * n);
});

//////////////////////////

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});
nums.forEach(function (num) {
  console.log(num * 3);
});

////////////////////////////

const books = [
  {
    title: "this is first title",
    author: ["this is first author", "this is second auther"],
    rating: 2.32,
  },
  {
    title: "this is second title",
    author: ["this is first author", "this is second auther"],
    rating: 2.32,
  },
];

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

//////////////////////////

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}
///////////////////////

for (let book of books) {
  console.log(book.title);
}
/////////////////////
nums.forEach(function (num, idx) {
  console.log(idx, num);
});
//that is advanced for used forEach
