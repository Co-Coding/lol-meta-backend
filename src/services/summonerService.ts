import { HttpService } from "../http/httpService";

export class SummonerService {
  httpService: HttpService
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  async getBySummonerName(summonerName: string, regionId: string) {
    const url = `https://${regionId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
    const data = await this.httpService.getRequestApi(url);
    return data;
  }
}
