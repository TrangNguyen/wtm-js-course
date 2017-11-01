const fs = require('fs');

exports.save = async (obj, path) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(obj), (err, content) => {
            if (err) {
                reject(err);
            }
            resolve(content);
        });
    });
}

const readFile = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, content) => {
            if (err) {
                reject(err);
            }
            resolve(content);
        });
    });
}

exports.load = async (path) => {
    const content = await readFile(path);
    return JSON.parse(content);
}

