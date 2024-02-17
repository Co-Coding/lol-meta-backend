import { MatchIdList } from "./types";
import { HttpService } from "../http/httpService";

export class MatchesService {
  httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }
  async getMatchHistory(puuid: string): Promise<MatchIdList> {
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=10`;
    const matchIdList = await this.httpService.getRequestApi(url);
    return matchIdList as MatchIdList;
  }

  async getMatches(matchIdList: MatchIdList): Promise<any> {
    const url = "https://americas.api.riotgames.com/lol/match/v5/matches/";
    const httpService = new HttpService();
    console.log(`${url}${matchIdList[0]}`);
    const matches = await httpService.getRequestApi(`${url}${matchIdList[0]}`);
    // const matches = await Promise.all([
    //     httpService.getRequestApi(`${url}${matchIdList[0]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[1]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[2]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[3]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[4]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[5]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[6]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[7]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[8]}`),
    //     httpService.getRequestApi(`${url}${matchIdList[9]}`),
    // ]);
    return [matches];
  }


}
