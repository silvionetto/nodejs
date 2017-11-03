console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes.js');

var user = os.userInfo();
console.log(user.username);

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

var res = notes.addNote();
console.log(res);

console.log(_.isString('Silvio Netto'));
console.log(_.isString('Silvio'));
console.log(_.isString(1));

var filteredArray = _.uniq(['Silvio','Netto', 1,'Silvio', 1, 2, 3, 4, 5]);
console.log(filteredArray);

console.log("Process: " + process.argv);

var command = process.argv[2];
console.log('Command: ' + command);
console.log('Yargs: --title: ' + argv.title);

if (command === 'add') {
    console.log('Adding new note');
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    console.log('Reading note');
    notes.getNote(argv.title);
} else if (command === 'remove') {
    console.log('Removing note');
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}