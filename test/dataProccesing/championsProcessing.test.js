const { expect } = require('chai');
const championsProcess = require('../../dataProcces/championsProcess');
const mockMatches = require('./dataMock/matches.json')
const championsDataMock = require('./dataMock/championsData.json')
const HttpService = require('../../services/http/httpService');
jest.mock('../../services/http/httpService')


describe('Test Champions Proccesing', () => {

    const getChampionsDataMock = jest.fn().mockReturnValue(championsDataMock)

    beforeAll(() => {
        HttpService.mockImplementation(() => {
            return {
                getRequest: getChampionsDataMock
            };
        });
    });

    beforeEach(() => {
        HttpService.mockClear();
    });


    it("Should return championData inside matches object", async () => {
        const res = await championsProcess(mockMatches)
        expect(res[0].info.participants[0].championData[0].id).to.be.equal("Urgot");
    })

})


