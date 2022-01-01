const awilix = require('awilix');
const SummonerService = require('../../summonerService');
const HttpService = require('../../http/httpService');
const SummonerDataService = require('../../summonerDataService');
const MatchHistoryService = require('../../matchHistoryService');
const MatchesService = require('../../matchesService');
const MatchProcessService = require('../../../dataProcces/matchProcessService');


const container = awilix.createContainer();

container.register({
    matchHistoryService: awilix.asClass(MatchHistoryService),
    matchProcessService: awilix.asClass(MatchProcessService),
    matchesService: awilix.asClass(MatchesService),
    summonerDataService: awilix.asClass(SummonerDataService),
    summonerService: awilix.asClass(SummonerService),
    httpService: awilix.asClass(HttpService)
});

module.exports = container;