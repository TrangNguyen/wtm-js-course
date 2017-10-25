const Person = require('./person');
const Database = require('./database');
console.log('Hello World!');

const armagan = new Person('Armagan', 33);
const mihri = new Person('Mihri', 29);

const instructors = [armagan, mihri];
// console.log(instructors);
Database.save(instructors);

const loadedFile = Database.load();
console.log(loadedFile);