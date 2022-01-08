const itemsProcess = (matches) => {
    const matchesProcessed = matches;
 // items data http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/item.json
    let participantsArr = matches.map(m => {
        return m.info.participants;
    });
    for (let index = 0; index < participantsArr.length; index++) {
        const players = participantsArr[index];

        for (let j = 0; j < players.length; j++) {
            const player = players[j];
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
    }
    return matchesProcessed;
};


module.exports = itemsProcess;