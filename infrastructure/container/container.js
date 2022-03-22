const awilix = require('awilix');
const SummonerService = require('../services/summonerService');
const HttpService = require('../http/httpService');
const SummonerDataService = require('../../domain/summonerDataService');
const MatchHistoryService = require('../services/matchHistoryService');
const MatchesService = require('../services/matchesService');
const MatchProcessService = require('../../domain/dataProcces/matchProcessService');


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