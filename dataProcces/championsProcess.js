const HttpService = require('../services/http/httpService')


const championsProcess = async (matches) => {

    const httpService = new HttpService();
    const championsData = await httpService.getRequest('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json');
    const championsDataArr = championsDataToArr(championsData.data)
    const matchesProcessed = matches;

    let participantsArr = matches.map(m => {
        return m.info.participants;
    });
    for (let index = 0; index < participantsArr.length; index++) {
        const players = participantsArr[index];

        for (let j = 0; j < players.length; j++) {
            const player = players[j];

            const championData = championsDataArr.filter( champion => champion.id === player.championName)
            player.championData = championData
            player.championAsset = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${player.championName}.png`

        }
    }
    return matchesProcessed;
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