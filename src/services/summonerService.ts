import { HttpService } from "../http/httpService";
import { MatchesService } from "./matchesService";
import { Participant, Summoner, SummonerData } from "./types";

export class SummonerService implements Summoner {

  httpService: HttpService
  matchesService: MatchesService;
  match: any;

  constructor(httpService: HttpService, matchesService: MatchesService, match: any) {
    this.httpService = httpService;
    this.matchesService = matchesService;
    this.match = match;
  }

  async getBySummonerName(summonerName: string, regionId: string): Promise<SummonerData> {
    const url = `https://${regionId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
    const data = await this.httpService.getRequestApi(url);
    return data;
  }

  async getSummonerData(summonerName: string, regionId: string): Promise<Participant> {
    const summoner = await this.getBySummonerName(summonerName, regionId);
    const matchIdList = await this.matchesService.getMatchHistory(summoner.puuid);
    const matches = await this.matchesService.getMatches(matchIdList);
    const participants = this.match.handler(matches, summoner);

    return participants;
  }

}
