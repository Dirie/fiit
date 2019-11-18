// const path = require("path");

// console.log(`path name is ${path.basename(__filename)}`);

// console.log(process.pid);
// console.log(process.versions.node);

//console.log(process.argv);

//const [, , firstName, lastName] = process.argv;

//console.log(`this is the ${firstName} ${lastName}`);

// const grap = flag => {
//   const indexOfFlag = process.argv.indexOf(flag) + 1;
//   return process.argv[indexOfFlag];
// };

// const greating = grap("--greating");
// const user = grap("--u");

// console.log(`${greating} ${user}`);

// const questions = [
//   "what is you name?",
//   "what would you rather be doing?",
//   "what is your perfered programming language?"
// ];

// const ask = (i = 0) => {
//   process.stdout.write(`\n\n\n\ ${questions[i]}`);
//   process.stdout.write(` > `);
// };

// ask();
// const answers = [];

// process.stdin.on("data", data => {
//   answers.push(data.toString().trim());
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });

// process.on("exit", () => {
//   const [name, activity, lang] = answers;
//   console.log(`

//     Thank you for your answers.
//     Go ${activity} ${name} you can write ${lang} code later`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const waitInterval = 500;
// let currentTime = 0;
// const waitTime = 5000;

// const incrTime = () => {
//   currentTime += waitInterval;
//   const p = Math.floor((currentTime / waitTime) * 100);
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write(`wainting ....${p}%`);
// };

// console.log(`setting a ${waitTime / 1000} second delay!`);

// const timerFinished = () => {
//   clearInterval(interval);
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   console.log("Done");
// };

// const interval = setInterval(incrTime, waitInterval);
// setTimeout(timerFinished, waitTime);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const path = require("path");
// const dirUploads = path.join(__dirname, "--");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const path = require("path");
// const { log } = require("util");
// const { getHeapStatistics } = require("v8");

// // util.log(path.basename(__filename));
// // util.log("^ the name of the file ");

// log(getHeapStatistics());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const readLine = require("readline");

// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("How do you like Node? ", answer => {
//   console.log(`your answer is ${answer}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const readLine = require("readline");

// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const questions = [
//   "What is your name? ",
//   "Where do you live? ",
//   "What are you going to do with Nodejs? "
// ];

// const collectAnswers = (questions, done) => {
//   const answers = [];
//   const [firstQuestion] = questions;
//   //done(answers)

//   questionAnswered = answer => {
//     answers.push(answer);
//     if (answers.length < questions.length) {
//       rl.question(questions[answers.length], questionAnswered);
//     } else {
//       done(answers);
//     }
//   };

//   rl.question(firstQuestion, questionAnswered);
// };

// collectAnswers(questions, answers => {
//   console.log("Thank you for your answers");
//   console.log(answers);
//   process.exit();
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const events = require("events");
// const emiter = new events.EventEmitter();

// emiter.on("customeEvent", (message, user) => {
//   console.log(`${user}: ${message}`);
// });

// process.stdin.on("data", data => {
//   const input = data.toString().trim();
//   if (input === "exit") {
//     emiter.emit("customeEvent", "Good by", "Process");
//     process.exit();
//   }
//   emiter.emit("customeEvent", input, "Terminal");
// });

// emiter.emit("customeEvent", "testing event", "computer");
// emiter.emit("customeEvent", "That's cool", "Lally");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const fs = require("fs");
// const files = fs.readdirSync(
//   "C:\\Users\\this pc\\Documents\\mongo_db_Json_files"
// );

// console.log(files);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const fs = require("fs");
// console.log("Started");
// const files = fs.readdir(
//   "C:\\Users\\this pc\\Documents\\mongo_db_Json_files",
//   (err, files) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Complete");
//     console.log(files);
//   }
// );

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const fs = require("fs");
// fs.readFile("C:\\Users\\this pc\\Documents\\ac.jpg", (err, img) => {
//   if (err) {
//     console.log(err);
//     process.exit();
//   }
//   console.log(img);
// });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const fs = require("fs");
// const md = `this file contains all the Node.js operations such as

// * read file.
// * write file`;
// fs.writeFile("C:\\Users\\this pc\\Documents\\notes.md", md.trim(), err => {
//   if (err) {
//     throw err;
//   }
//   console.log("file created..");
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const fs = require("fs");
// const users = require("./contact.json");

// fs.appendFile(
//   "C:\\Users\\this pc\\Documents\\notes.md",
//   `\n\n Full Name: ${users.firstName} ${users.lastName} `,
//   err => {
//     if (err) throw err;
//     console.log("file appended!");
//   }
// );

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const fs = require("fs");
// const rs = fs.createReadStream("./notes.md", "UTF-8");

// rs.on("data", data => {
//   console.log(`I read ${data.length - 1} characters of text \n\n\n`);
// });

// rs.once("data", data => {
//   console.log(data);
// });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const cp = require("child_process");
cp.exec("open ");

// cp.exec("ls", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
