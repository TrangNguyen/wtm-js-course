const Database = require('../db/database');

module.exports = class Poll {
    constructor(title, choices) {
        this.title = title;
        this.choices = choices;
        this.participants = [];
        this.votes = this.choices.map(choice => ({choice, count: 0}));
    }
    /** add participant to the poll
     * @param  {object} people
     */
    addParticipant(people) {
        // only add participant if not yet present
        if (!this.participants.includes(people)) {
            this.participants.push(people);
            Database.savePoll(this);
        }       
    }
    /** add vote count to the poll
     * @param  {string} value
     */
    addVote(value) {
        // increment vote count if vote found.
        const voteIndex = this.votes.findIndex(vote => vote.choice === value);
        if (voteIndex > -1) {
            this.votes[voteIndex].count += 1;
            Database.savePoll(this);
        }
    }

    /** find vote with highest count
     * @param  {}
     */
    findHighestVote() {
        const result = this.votes.sort((a, b) => b.count - a.count)[0];
        console.log(this.title);
        console.log(`We are going to ${result.choice}`);
    }
}
