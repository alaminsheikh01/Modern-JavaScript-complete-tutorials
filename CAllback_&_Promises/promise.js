// const promiseDemo = new Promise((resolve, reject) => {
//   const read = Math.random();
//   if (read < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// promiseDemo.then(() => {
//   console.log("Yeah we got a dog"); //if promise is resolved
// });
// promiseDemo.catch(() => {
//   console.log("we can't any dog"); //if promise is rejected
// });

/////////////////////////////////

//add a function

// const makeaDog = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const read = Math.random();
//       if (read < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// };

// makeaDog()
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

///////////////////////////////////////////
//add request

const makeaDog = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const read = Math.random();
      if (read < 0.5) {
        resolve({ status: "REQUEST WORKED" });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};

makeaDog()
  .then((req) => {
    console.log(req.status); //then er sate communication resolve er
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAIELD"); //catch er sate communication reject er
  });
