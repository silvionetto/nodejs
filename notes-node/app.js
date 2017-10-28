console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user.username);

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

var res = notes.addNote();
console.log(res);

var con = notes.concat(1, 5);
console.log(con);
