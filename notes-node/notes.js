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