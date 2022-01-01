const itemsProcess = (matches) => {
    const matchesProcessed = matches;

    let participantsArr = matches.map(m => {
        return m.info.participants;
    });
    for (let index = 0; index < participantsArr.length; index++) {
        const players = participantsArr[index];

        for (let j = 0; j < players.length; j++) {
            const player = players[j];
            let itemsImage0 = `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${player.item0}.png`;
            let itemsImage1 = `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${player.item1}.png`;
            let itemsImage2 = `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${player.item2}.png`;
            let itemsImage3 = `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${player.item3}.png`;
            let itemsImage4 = `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${player.item4}.png`;
            let itemsImage5 = `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${player.item5}.png`;
            let itemsImage6 = `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${player.item6}.png`;
            player.item0 = itemsImage0;
            player.item1 = itemsImage1;
            player.item2 = itemsImage2;
            player.item3 = itemsImage3;
            player.item4 = itemsImage4;
            player.item5 = itemsImage5;
            player.item6 = itemsImage6;
        }
    }
    return matchesProcessed;
};


module.exports = itemsProcess;