const fs = require('fs');
const pollPath = './poll.json';

/** save poll to fs
 * @param  {object} poll
 */
module.exports.savePoll = poll => fs.writeFileSync(
    pollPath,
    JSON.stringify(poll)
);
/** read poll from fs
 * @param  {array} participants
 */
module.exports.loadPoll = () => JSON.parse(
    fs.readFileSync(pollPath, 'utf8')
);

/** delete poll from fs
 * @param  {}
 */
module.exports.deletePoll = () => fs.unlink(
    pollPath,
    () => console.log('Deleted poll')
);
