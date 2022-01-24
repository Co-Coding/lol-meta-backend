const HttpService = require('../services/http/httpService')

const queueProcess = async (matches) => {

    const httpService = new HttpService();
    const queuesData = await httpService.getRequest('https://static.developer.riotgames.com/docs/lol/queues.json');

    const queueProcessed = matches.map( match => {
        const queueData = queuesData.find( queue => queue.queueId === match.info.queueId )
        match.info.queueData = queueData
        return match
    } )

    return queueProcessed
}


module.exports = queueProcess;