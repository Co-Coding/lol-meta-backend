const  _ = require('lodash');

const championsProcessing = async (matches, championsData) => {

    const matchesDeepCloned = _.cloneDeep(matches);
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