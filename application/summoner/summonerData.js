class SummonerData {
  constructor(
    summonerService,
    matchHistoryService,
    matchesService,
    matchProcesser
  ) {
    this.summonerService = summonerService;
    this.matchHistoryService = matchHistoryService;
    this.matchesService = matchesService;
    this.matchProcesser = matchProcesser;
  }

  async getSummonerData(summonerName, regionId) {
    const summoner = await this.summonerService.getBySummonerName(
      summonerName,
      regionId
    );
    const matchHistory = await this.matchHistoryService.getMatchHistory(
      summoner.puuid
    );
    const matches = await this.matchesService.getMatches(matchHistory);
    const participants = this.matchProcesser.matchProcess(matches, summoner);

    return participants;
  }
}

module.exports = SummonerData;
