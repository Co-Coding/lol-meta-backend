
const { expect } = require('chai');
const itemsProcessing = require('../../dataProcces/itemsProcessing');
const mockMatches = require('./matches.json')

describe('Test Champions Procesing', () => {

    it("Test if every item field has it's own image ", () => {
        const res = itemsProcessing(mockMatches)
        expect(res[0].info.participants[0].item0).to.be.equal("http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6662.png");
        expect(res[0].info.participants[0].item1).to.be.equal("http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3071.png");
        expect(res[0].info.participants[0].item2).to.be.equal("http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png");
        expect(res[0].info.participants[0].item3).to.be.equal("http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3075.png");
        expect(res[0].info.participants[0].item4).to.be.equal("http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3748.png");
        expect(res[0].info.participants[0].item5).to.be.equal("http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3111.png");
        expect(res[0].info.participants[0].item6).to.be.equal("http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png");
    })

})