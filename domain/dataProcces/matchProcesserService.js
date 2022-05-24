const itemsProcessing = require('./itemsProcessing');
const perksProcessing = require('./perksProcessing');
const championsProcessing = require('./championsProcessing');
const timeProcess = require('./timeProcess');
const rankProcess = require('./rankProcess');
const queueProcess = require('./queueProcess');
//const spellsProcess = require('../dataProcces/spellsProcess');

class MatchProcesser {
    constructor(opts){
        this.httpService = opts.httpService
    }

    async matchProcess(matches, summoner) {
        const data = await this.getData()
        const perksData = data[0]
        const championsData = data[1]
        const queuesData = data[2]

        const itemsProcessed = await itemsProcessing(matches);
        const perksProcessed = await perksProcessing(itemsProcessed, perksData);
        const championsProcessed = await championsProcessing(perksProcessed, championsData);
        const timeProcessed = await timeProcess(championsProcessed)
        const queueProcessed = await queueProcess(timeProcessed, queuesData)
        const rankProcessed = await rankProcess(queueProcessed, summoner.id)
        //const spellsProcessed = spellsProcess(perksProcessed);
        
        return rankProcessed;

    }

    async getData(){
        const data = await Promise.all([
            this.httpService.getRequest('http://ddragon.canisback.com/10.6.1/data/en_US/runesReforged.json'),
            this.httpService.getRequest('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json'),
            this.httpService.getRequest('https://static.developer.riotgames.com/docs/lol/queues.json')
        ])
        return data
    }
}


module.exports = MatchProcesser;