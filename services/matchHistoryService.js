class MatchHistoryService {
    constructor(opts) {
        this.httpService = opts.httpService;
    }

    async getMatchHistory(puuid) {
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`;
        const data = await this.httpService.getRequestApi(url);
        return data;

    }

}

module.exports = MatchHistoryService;