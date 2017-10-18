class Poll {
    constructor(title, choices) {
        this.title = title;
        this.choices = choices;
        this.participants = [];
        this.votes = this.choices.map(choice => ({choice, count: 0}));
    }

    addVote(value) {
        const voteIndex = this.votes.findIndex(vote => vote.choice === value);
        if (voteIndex > -1) {
            this.votes[voteIndex].count += 1;
        }
    }

    addParticipant(people) {
        if (!this.participants.includes(people)) {
            this.participants.push(people);
        }       
    }
}
class Participant {
    constructor(name) {
        this.name = name;
        this.vote = '';
    }
    voteFor(poll, choice) {
        if (!this.vote) { // did not vote yet
            this.vote = choice;
            poll.addVote(choice);
        }        
    }
}

const holidayPoll = new Poll('Where should we go for Easter?', ['Paris', 'Brandenburg', 'Home']);
const roman = new Participant('Roman');
const trang = new Participant('Trang');
const motte = new Participant('Motte');

holidayPoll.addParticipant(roman);
holidayPoll.addParticipant(trang);
holidayPoll.addParticipant(motte);

roman.voteFor(holidayPoll, 'Paris');
trang.voteFor(holidayPoll, 'Brandenburg');
motte.voteFor(holidayPoll, 'Paris');