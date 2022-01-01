const assert = require('chai').assert;
const summoner = require('../routes/summoner')

describe('App'), () => {
    it('It should return an object', (done) => {
        const output = service.getBySummonerName(summonerName, regionId);
        expect(output).not.to.be.undefined;
        done();
    })
};