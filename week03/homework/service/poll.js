const Poll = require('../model/poll');
const Database = require('../db/database');
const path = './db/poll.json';

exports.save = async (poll) => {
    await Database.save(poll, path);
}

exports.load = async () => {
    const data = await Database.load(path);
    return data;
}

exports.addParticipant = async (participant) => {
    const poll = await this.load();
    poll.participants.push(participant);

    // update poll in db
    await this.save(poll);
}

exports.addVote = async (value) => {
    const poll = await this.load();
    // increment vote count if vote found.
    const voteIndex = poll.votes.findIndex(vote => vote.choice === value);
    if (voteIndex > -1) {
        poll.votes[voteIndex].count += 1;
        // update poll in db
        await this.save(poll);
    }
}


exports.isPartOfPoll = async (name) => {
    const poll = await this.load();
    const match = poll.participants.filter(p => p.name === name);
    const result = match.length > 0;
    return result;
};

exports.findHighestVote = async () => {
    const poll = await this.load();
    const highestVote = poll.votes.sort((a, b) => b.count - a.count)[0];
    console.log(poll.title);
    console.log(`We are going to ${highestVote.choice} with ${highestVote.count} votes`);
}
