const _ = require('lodash');

export const processChampions = async (matches: any, championsData: any) => {

    const matchesDeepCloned = _.cloneDeep(matches);
    const championsDataArr = championsDataToArr(championsData.data);

    const championProcessed = matchesDeepCloned.map((match: any) => {

        const participants = match.info.participants;

        participants.forEach((participant: any) => {
            const championData = championsDataArr.filter((champion: any) => champion.id === participant.championName)
            participant.championData = championData;
            participant.championAsset = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${participant.championName}.png`;
        });
        return match;
    });

    return championProcessed;
};

const championsDataToArr = (championsData: any) => {
    const championsDataArr: any = [];

    Object.keys(championsData).forEach(key => {
        const champion = championsData[key];
        championsDataArr.push(champion);
    })

    return championsDataArr;
}