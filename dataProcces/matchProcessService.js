const itemsProcess = require('../dataProcces/itemsProcess');
const perksProcess = require('../dataProcces/perksProcess');
const championsProcess = require('../dataProcces/championsProcess');
//const spellsProcess = require('../dataProcces/spellsProcess');

class MatchProcessService {

    async matchProcess(matches) {
        const itemsProcessed = await itemsProcess(matches);
        const perksProcessed = await perksProcess(itemsProcessed);
        const championsProcessed = await championsProcess(perksProcessed);
        // const spellsProcessed = spellsProcess(perksProcessed);
        
        return championsProcessed;

    }
}


module.exports = MatchProcessService;