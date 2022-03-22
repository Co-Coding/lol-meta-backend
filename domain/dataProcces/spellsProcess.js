const HttpService = require('../../infrastructure/http/httpService');
//http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png
const spellsProcess = async(matches) => {
    const httpService = new HttpService();
    const spellsData = await httpService.getRequest('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/summoner.json');
    const matchesProccesed = matches;

    let participantsArr = matches.map(m => {
        return m.info.participants;
    });
    for (let index = 0; index < participantsArr.length; index++) {
        const players = participantsArr[index];

        for (let j = 0; j < players.length; j++) {

            const playerSpellOne = players[j].spell1Casts;
            const playerSpelltwo = players[j].spell2Casts;
            const playerSpellThree = players[j].spell3Casts;
            const playerSpellFour = players[j].spell4Casts;
        }

    }

    return matchesProccesed;

};

const getPerkInfo = (perksData, perkStyle) => perksData.find((perk) => perk.id === perkStyle);



module.exports = spellsProcess;