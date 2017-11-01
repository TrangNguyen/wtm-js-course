
module.exports = class Poll {
    constructor(title, choices) {
        this.title = title;
        this.choices = choices;
        this.participants = [];
        this.votes = this.choices.map(choice => ({choice, count: 0}));
    }

    static create(obj) {
        return new Poll(obj.title, obj.choice);
    }

}