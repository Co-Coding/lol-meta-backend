const HttpService = require('../services/http/httpService')

const championsProcess = async (matches) => {

    const httpService = new HttpService();
    const championsData = await httpService.getRequest('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json');
    const championsDataArr = championsDataToArr(championsData.data)

    const championProcessed = matches.map( match => {

        const participants = match.info.participants

        for (let i = 0; i < participants.length; i++) {
            const participant = participants[i];

            const championData = championsDataArr.filter( champion => champion.id === participant.championName)
            participant.championData = championData
            participant.championAsset = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${participant.championName}.png`
        }

        return match

    }  )

    return championProcessed;
};

const championsDataToArr = (championsData) => {
    const championsDataArr = []

    Object.keys(championsData).forEach( key => {
        const champion = championsData[key]
        championsDataArr.push(champion)
    })

    return championsDataArr
}


module.exports = championsProcess;