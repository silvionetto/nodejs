console.log('Starting notes.js');

//console.log(module);

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

module.exports.concat = (a, b) => {
    console.log('concat');
    return a + b;
};

var addNote = (title, body) => {
    console.log('Adding note: ', title, body);
    return title + ' ' + body;
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting  note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};