const Database = require('../db/database');

module.exports = class Participant {
    constructor(name) {
        this.name = name;
        this.vote = '';
    }
    
    /** voteFor - vote for a choice in a poll
     * @param  {object} poll
     * @param  {string} choice
     */
    voteFor(poll, choice) {
        if (!this.vote) { // did not vote yet
            this.vote = choice;
            poll.addVote(choice);
        }        
    }
}