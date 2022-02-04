const HttpService = require('../services/http/httpService')

const rankProcess = async (matches, summonerId) => {
    const httpService = new HttpService();
    
    try {
        const rankedUrl = `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`
        const rankedData = await httpService.getRequestApi(rankedUrl);
        
        const rankedProcessed = matches.map( match => {
            const participants = match.info.participants;

            const participant = participants.find( participant => participant.summonerName === rankedData[0].summonerName)
            participant.rankedData = rankedData

            return match
         
        })
        return rankedProcessed

    } catch (error) {
        throw error
    }

}


module.exports = rankProcess;