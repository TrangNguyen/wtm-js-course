const Participant = require('./model/participant');
const Poll = require('./model/poll');
const ParticipantService = require('./service/participant');
const PollService = require('./service/poll');

const roman = new Participant('Roman');
const trang = new Participant('Trang');
const motte = new Participant('Motte');

const participants = [roman, trang, motte];

const easterPoll = new Poll('Where should we go for Easter?', ['Home', 'Brandenburg', 'Paris']);


const main = async () => {
    await PollService.save(easterPoll);
    await ParticipantService.saveAll(participants);
    await ParticipantService.vote('Roman', 'Paris');
    await ParticipantService.vote('Trang', 'Brandenburg');
    await ParticipantService.vote('Motte', 'Paris');
    await ParticipantService.vote('Roman', 'Home');
    await PollService.findHighestVote();
}

main();