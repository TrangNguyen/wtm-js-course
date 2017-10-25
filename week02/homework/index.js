const Poll = require('./models/poll');
const Participant = require('./models/participant');

const holidayPoll = new Poll('Where should we go for Easter?', ['Home', 'Brandenburg', 'Paris']);

const roman = new Participant('Roman');
const trang = new Participant('Trang');
const motte = new Participant('Motte');
const participants = [roman, trang, motte];

participants.map(p => holidayPoll.addParticipant(p));

roman.voteFor(holidayPoll, 'Paris');
trang.voteFor(holidayPoll, 'Brandenburg');
motte.voteFor(holidayPoll, 'Paris');

holidayPoll.findHighestVote();