console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();
console.log(user.username);

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

var res = notes.addNote();
console.log(res);

var con = notes.concat(1, 5);
console.log(con);

console.log(_.isString('Silvio'));
console.log(_.isString(1));

var filteredArray = _.uniq(['Silvio','Netto', 1,'Silvio', 1, 2, 3, 4, 5]);
console.log(filteredArray);
