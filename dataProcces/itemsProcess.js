const itemsProcess = (matches) => {
    
    let matchProcessed = matches.map( match => {
        const participants = match.info.participants

        for (let i = 0; i < participants.length; i++) {
            const player = participants[i];
            let itemAsset0 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${player.item0}.png`;
            let itemAsset1 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${player.item1}.png`;
            let itemAsset2 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${player.item2}.png`;
            let itemAsset3 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${player.item3}.png`;
            let itemAsset4 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${player.item4}.png`;
            let itemAsset5 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${player.item5}.png`;
            let itemAsset6 = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${player.item6}.png`;
            player.item0 = itemAsset0;
            player.item1 = itemAsset1;
            player.item2 = itemAsset2;
            player.item3 = itemAsset3;
            player.item4 = itemAsset4;
            player.item5 = itemAsset5;
            player.item6 = itemAsset6;
        }

        return match;
    });

    return matchProcessed;
};


module.exports = itemsProcess;