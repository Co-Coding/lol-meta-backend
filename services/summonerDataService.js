class SummonerDataService {
    constructor(opts) {
        this.summonerService = opts.summonerService;
        this.matchHistoryService = opts.matchHistoryService;
        this.matchesService = opts.matchesService;
        this.matchProcessService = opts.matchProcessService;
    }
    async getSummonerData(req) {
        const summoner = await this.summonerService.getBySummonerName(req.params.summonerName, req.params.regionId);
        const matchHistory = await this.matchHistoryService.getMatchHistory(summoner.puuid);
        const matches = await this.matchesService.getMatches(matchHistory);
        const participants = this.matchProcessService.matchProcess(matches);

        return participants;
    }
}

module.exports = SummonerDataService;