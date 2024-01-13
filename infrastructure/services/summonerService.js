class SummonerService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  async getBySummonerName(summonerName, regionId) {
    const url = `https://${regionId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
    const data = await this.httpService.getRequestApi(url);
    return data;
  }
}

module.exports = SummonerService;
