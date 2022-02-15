const  _ = require('lodash');

const itemsProcessing = (matches) => {

    const deepClonedObject = _.cloneDeep(matches);
    
    const matchProcessed = deepClonedObject.map( match => {
        const participants = match.info.participants

        participants.forEach(participant => {
            const itemAsset0 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant.item0}.png`;
            const itemAsset1 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant.item1}.png`;
            const itemAsset2 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant.item2}.png`;
            const itemAsset3 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant.item3}.png`;
            const itemAsset4 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant.item4}.png`;
            const itemAsset5 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant.item5}.png`;
            const itemAsset6 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant.item6}.png`;
            participant.item0 = itemAsset0;
            participant.item1 = itemAsset1;
            participant.item2 = itemAsset2;
            participant.item3 = itemAsset3;
            participant.item4 = itemAsset4;
            participant.item5 = itemAsset5;
            participant.item6 = itemAsset6;
            
        });

        return match;
    });

    return matchProcessed;
};


module.exports = itemsProcessing;