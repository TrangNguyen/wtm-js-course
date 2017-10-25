const fs = require('fs');

module.exports.save = (people) => {
    fs.writeFileSync('./data.json',
    JSON.stringify(people));
}

module.exports.load = () => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}

// real life example with class, node and interaction for classes
