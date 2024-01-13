const SummonerService = require("../services/summonerService");
const MatchHistoryService = require("../services/matchHistoryService");
const MatchesService = require("../services/matchesService");
const MatchProcesser = require("../../domain/dataProcces/matchProcesserService");
const SummonerData = require("../../application/summoner/summonerData");
const HttpService = require("../http/httpService");

const httpService = new HttpService();

const summonerService = new SummonerService(httpService);
const matchHistoryService = new MatchHistoryService(httpService);
const matchesService = new MatchesService(httpService);
const matchProcesser = new MatchProcesser(httpService);

const summonerDataService = new SummonerData(
  summonerService,
  matchHistoryService,
  matchesService,
  matchProcesser
);

module.exports = summonerDataService;
