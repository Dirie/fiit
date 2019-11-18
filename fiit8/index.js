// function hidden(str, done) {
//   return str.replace(/[a-zA-Z]/g, "X");
// }

// hidden = (str, done) => {
//   process.nextTick(() => {
//     done(str.replace(/[a-zA-Z]/g, "X"));
//   });
// };

// hidden("abdulrazak Dirie", hide => {
//   console.log(hide);
// });

// console.log("End");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function delay(seconds, callback) {
//   setTimeout(callback, seconds * 1000);
// }

// console.log("Starting delays.......");
// delay(2, () => {
//   console.log("two seconds");
//   delay(2, () => {
//     console.log("three seconds");
//     delay(2, () => {
//       console.log("four seconds");
//     });
//   });
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function delay(seconds, callback) {
//   setTimeout(callback, seconds * 1000);
// }

// delay(2, () => {
//   console.log("The delay has ended!");
// });

// console.log("End first Tick");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var delay = seconds =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, seconds * 1000);
//   });

// delay(1).then(() => {
//   console.log("the delay has ended!");
// });
// console.log("End first Tick");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var delay = seconds =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("the long delay has ended!");
//     }, seconds * 1000);
//   });

// delay(1).then(message => {
//   console.log(message);
// });
// console.log("End first Tick");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var delay = seconds =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("the long delay has ended!");
//     }, seconds * 1000);
//   });

// delay(1).then(console.log);
// console.log("End first Tick");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var delay = seconds =>
//   new Promise((resolve, reject) => {
//     throw new Error("argh");
//     setTimeout(() => {
//       resolve("the long delay has ended!");
//     }, seconds * 1000);
//   });

// delay(1)
//   .then(console.log)
//   .then(() => 30)
//   .then(n => console.log(`the number was ${n}`))
//   .catch(error => console.log(`error:${error.message}`));

// console.log("End first Tick");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var delay = seconds =>
//   new Promise((resolve, reject) => {
//     if (seconds > 3) throw new Error(`${seconds} is too long`);
//     setTimeout(() => {
//       resolve("the long delay has ended!");
//     }, seconds * 1000);
//   });

// delay(4)
//   .then(console.log)
//   .then(() => 30)
//   .then(n => console.log(`the number was ${n}`))
//   .catch(error => console.log(`error:${error.message}`));

// console.log("End first Tick");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var delay = (seconds, calback) => {
  if (seconds > 3) {
    calback(new Error(`${seconds} is too long`));
  } else {
    setTimeout(() => {
      calback("the long delay has ended!");
    }, seconds * 1000);
  }
};

delay(5, (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
