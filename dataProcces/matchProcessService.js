const itemsProcess = require('../dataProcces/itemsProcess');
const perksProcess = require('../dataProcces/perksProcess');
//const spellsProcess = require('../dataProcces/spellsProcess');

class MatchProcessService {

    matchProcess(matches) {
        const itemsProcessed = itemsProcess(matches);
        const perksProcessed = perksProcess(itemsProcessed);
        // const spellsProcessed = spellsProcess(perksProcessed);
        
        return perksProcessed;

    }
}


module.exports = MatchProcessService;