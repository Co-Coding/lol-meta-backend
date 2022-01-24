const itemsProcess = require('../dataProcces/itemsProcess');
const perksProcess = require('../dataProcces/perksProcess');
const championsProcess = require('../dataProcces/championsProcess');
const timeProcess = require('../dataProcces/timeProcess');
const queueProcess = require('./queueProcess');
//const spellsProcess = require('../dataProcces/spellsProcess');

class MatchProcessService {

    async matchProcess(matches) {
        const itemsProcessed = await itemsProcess(matches);
        const perksProcessed = await perksProcess(itemsProcessed);
        const championsProcessed = await championsProcess(perksProcessed);
        const timeProcessed = await timeProcess(championsProcessed)
        const queueProcessed = await queueProcess(timeProcessed)
        // const spellsProcessed = spellsProcess(perksProcessed);
        
        return queueProcessed;

    }
}


module.exports = MatchProcessService;