const  _ = require('lodash');
const HttpService = require('../services/http/httpService')

const championsProcessing = async (matches) => {

    const httpService = new HttpService();
    const matchesDeepCloned = _.cloneDeep(matches);
    const championsData = await httpService.getRequest('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json');
    const championsDataArr = championsDataToArr(championsData.data);

    const championProcessed = matchesDeepCloned.map( match => {
        
        const participants = match.info.participants;

        participants.forEach(participant => {
            const championData = championsDataArr.filter( champion => champion.id === participant.championName)
            participant.championData = championData;
            participant.championAsset = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${participant.championName}.png`;
        });
        return match;
    });

    return championProcessed;
};

const championsDataToArr = (championsData) => {
    const championsDataArr = [];

    Object.keys(championsData).forEach( key => {
        const champion = championsData[key];
        championsDataArr.push(champion);
    })

    return championsDataArr;
}


module.exports = championsProcessing;