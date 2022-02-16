const  _ = require('lodash');
const HttpService = require('../services/http/httpService')

const perksProcessing = async (matches) => {
    const httpService = new HttpService();
    const perksData = await httpService.getRequest('http://ddragon.canisback.com/10.6.1/data/en_US/runesReforged.json');

    const matchesDeepCloned = _.cloneDeep(matches);

    const perksProcessed = matchesDeepCloned.map(match => {
        const participants = match.info.participants

        participants.forEach(participant => {

            const participantPerks = participant.perks;

            const perkStyleId = participantPerks.styles[0].style;
            const perkStyleInfo = getPerkInfo(perksData, perkStyleId);
            participantPerks.styles[0].styleInfoOne = perkStyleInfo;

            const perkSubStyleId = participantPerks.styles[1].style;
            const perkSubStyleInfo = getPerkInfo(perksData, perkSubStyleId);
            participantPerks.styles[1].styleInfoTwo = perkSubStyleInfo;
        });

            return match
            

    });

    return perksProcessed;

};

const getPerkInfo = (perksData, perkStyle) => perksData.find((perk) => perk.id === perkStyle);

module.exports = perksProcessing;