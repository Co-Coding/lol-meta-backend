const itemsProcessing = require('./itemsProcessing');
const perksProcess = require('../dataProcces/perksProcess');
const championsProcess = require('../dataProcces/championsProcess');
const timeProcess = require('../dataProcces/timeProcess');
const rankProcess = require('./rankProcess');
const queueProcess = require('./queueProcess');
//const spellsProcess = require('../dataProcces/spellsProcess');

class MatchProcessService {

    async matchProcess(matches, summoner) {
        const itemsProcessed = await itemsProcessing(matches);
        const perksProcessed = await perksProcess(itemsProcessed);
        const championsProcessed = await championsProcess(perksProcessed);
        const timeProcessed = await timeProcess(championsProcessed)
        const queueProcessed = await queueProcess(timeProcessed)
        const rankProcessed = await rankProcess(queueProcessed, summoner.id)
        //const spellsProcessed = spellsProcess(perksProcessed);
        
        return rankProcessed;

    }
}


module.exports = MatchProcessService;