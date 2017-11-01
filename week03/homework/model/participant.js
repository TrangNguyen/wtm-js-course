module.exports = class Participant {
    constructor(name) {
        this.name = name;
        this.vote = '';
    }

    static create(obj) {
        return new Participant(obj.name);
    }
}