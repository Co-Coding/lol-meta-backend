const { expect } = require('chai');
const perksProcessing = require('../../domain/dataProcces/perksProcessing');
const mockMatches = require('./dataMock/matches.json');
const perksMock = require('./dataMock/perksData.json');
const HttpService = require('../../infrastructure/http//httpService');
jest.mock('../../infrastructure/http//httpService');


describe("Test Perks Processing", () => {

    const getPerksMock = jest.fn().mockReturnValue(perksMock)

    beforeAll(() => {
        HttpService.mockImplementation(() => {
            return {
                getRequest: getPerksMock
            }
        })

    })

    it("Should return data inside the matches object", async () => {
        const res = await perksProcessing(mockMatches);

        expect(res[0].info.participants[0].perks.styles[0].hasOwnProperty('styleInfoOne')).to.be.true;
        expect(res[0].info.participants[0].perks.styles[1].hasOwnProperty('styleInfoTwo')).to.be.true;

    })

})