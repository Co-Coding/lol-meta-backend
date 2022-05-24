const awilix = require('awilix');
const SummonerService = require('../services/summonerService');
const HttpService = require('../http/httpService');
const SummonerDataService = require('../../application/summoner/summonerData');
const MatchHistoryService = require('../services/matchHistoryService');
const MatchesService = require('../services/matchesService');
const MatchProcesser = require('../../domain/dataProcces/matchProcesserService');


const container = awilix.createContainer();

container.register({
    matchHistoryService: awilix.asClass(MatchHistoryService),
    matchProcesser: awilix.asClass(MatchProcesser),
    matchesService: awilix.asClass(MatchesService),
    summonerDataService: awilix.asClass(SummonerDataService),
    summonerService: awilix.asClass(SummonerService),
    httpService: awilix.asClass(HttpService)
});

module.exports = container;