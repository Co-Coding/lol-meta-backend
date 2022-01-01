class SummonerService {
    constructor(opts) {
        this.httpService = opts.httpService;
    }

    async getBySummonerName(summonerName, regionId) {
        const url = `https://${regionId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
        const data = await this.httpService.getRequest(url);
        return data;

    }

}


module.exports = SummonerService;