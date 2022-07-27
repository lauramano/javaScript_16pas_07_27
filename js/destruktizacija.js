'use strict';
console.log('destuktizacija');

const u1 = {
    firstName: 'Petras',
    lastName: 'Jonaitis',
    age: 33,
    size: ['s', 'm', 'l'],
};
// sukuriam globalius kintamuosius
// is objektu istraukiame atskirai reiksmes (paprastai)
// const firstName = u1.firstName;
// const lastName = u1.lastName;
// const size = u1.size;

// objekto destruktizacija

const {firstName, lastName, size} = u1;
console.log(`${firstName}, ${lastName} ${size}`);

// level 1 destruct
function printSizes(obj) {
    const {firstName, lastName, size} = obj;
    
}
