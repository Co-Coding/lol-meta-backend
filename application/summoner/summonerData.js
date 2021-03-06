class SummonerData {
    constructor(opts) {
        this.summonerService = opts.summonerService;
        this.matchHistoryService = opts.matchHistoryService;
        this.matchesService = opts.matchesService;
        this.matchProcesser = opts.matchProcesser;
    }
    async getSummonerData(summonerName, regionId) {
        const summoner = await this.summonerService.getBySummonerName(summonerName, regionId);
        const matchHistory = await this.matchHistoryService.getMatchHistory(summoner.puuid);
        const matches = await this.matchesService.getMatches(matchHistory);
        const participants = this.matchProcesser.matchProcess(matches, summoner);

        return participants;
    }
}

module.exports = SummonerData;