const Participant = require('../model/participant');
const PollService = require('./poll');
const Database = require('../db/database');
const path = './db/participant.json';

exports.saveAll = async (participants) => {
    await Database.save(participants, path);
}

exports.saveOne = async (partcipant) => {
    const data = await Database.load(path);
    const match = await this.findByName(partcipant.name);
    if (match) {
        const matchIndex = data.findIndex(e => e.name === match.name);
        if (matchIndex > -1) {
             // existing participant, update in list
            data.splice(matchIndex, 1, partcipant); 
            await this.saveAll(data);
        }

    } else {
        // new participant
        data.push(partcipant);
        await this.saveAll(data); 
    }  
}

exports.load = async () => {
    const data = await Database.load(path);
    return data;
}

exports.findByName = async (name) => {
    const participants = await this.load();
    const result = participants.filter(p => p.name === name)[0];
    return result;
}

exports.hasVoted = async (name) => {
    const match = await this.findByName(name);    
    const result = match && match.vote !== '';
    return result;
};

exports.vote = async (name, choice) => {
    const hasVoted = await this.hasVoted(name);
    if (!hasVoted) {
        const match = await this.findByName(name);
        match.vote = choice;
        
        this.saveOne(match);
        const isPartOfPoll = await PollService.isPartOfPoll(name);
        
        if (isPartOfPoll) {
           await PollService.addVote(choice);
        }
        await PollService.addParticipant(match);
        await PollService.addVote(choice);
    }
    else {
        console.log(`Sorry ${name}, it\'s unfair to others if you keep changing your mind`);
    }

}
