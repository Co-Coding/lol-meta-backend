const HttpService = require('../services/http/httpService')

const perksProcess = async(matches) => {
    const httpService = new HttpService();
    const perksData = await httpService.getRequest('http://ddragon.canisback.com/10.6.1/data/en_US/runesReforged.json');
    const matchesProccesed = matches;

    let participantsArr = matches.map(m => {
        return m.info.participants;
    });
    for (let index = 0; index < participantsArr.length; index++) {
        const players = participantsArr[index];

        for (let j = 0; j < players.length; j++) {

            playerPerks = players[j].perks;

            const perkStyle = playerPerks.styles[0].style;
            const perkStyleInfo = getPerkInfo(perksData, perkStyle);
            playerPerks.styles[0].styleInfo = perkStyleInfo;


            const perkSubStyle = playerPerks.styles[1].style;
            const perkSubStyleInfo = getPerkInfo(perksData, perkSubStyle);
            playerPerks.styles[1].styleInfo = perkSubStyleInfo;
        }

    }

    return matchesProccesed;

};

const getPerkInfo = (perksData, perkStyle) => perksData.find((perk) => perk.id === perkStyle);



module.exports = perksProcess;