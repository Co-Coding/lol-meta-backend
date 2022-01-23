const HttpService = require('../services/http/httpService')

const perksProcess = async(matches) => {
    const httpService = new HttpService();
    const perksData = await httpService.getRequest('http://ddragon.canisback.com/10.6.1/data/en_US/runesReforged.json');

    const perksProcessed = matches.map((match,index) => {
        const participants = match.info.participants
        
        for (let i = 0; i < participants.length; i++) {

            participantPerks = participants[i].perks;

            const perkStyle = participantPerks.styles[0].style;
            const perkStyleInfo = getPerkInfo(perksData, perkStyle);
            participantPerks.styles[0].styleInfo = perkStyleInfo;


            const perkSubStyle = participantPerks.styles[1].style;
            const perkSubStyleInfo = getPerkInfo(perksData, perkSubStyle);
            participantPerks.styles[1].styleInfo = perkSubStyleInfo;
        }

            return match
            

    })

    return perksProcessed;

};

const getPerkInfo = (perksData, perkStyle) => perksData.find((perk) => perk.id === perkStyle);



module.exports = perksProcess;