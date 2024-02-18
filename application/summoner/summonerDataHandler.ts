import { MatchesService, Summoner } from "../../infrastructure/services/types";

export class SummonerDataHandler {

  summonerService: Summoner;
  matchesService: MatchesService;
  match: any;

  constructor(summonerService: Summoner, matchesService: MatchesService, match: any) {
    this.summonerService = summonerService;
    this.matchesService = matchesService;
    this.match = match;
  }

  async getSummonerData(summonerName: string, regionId: string) {
    const summoner = await this.summonerService.getBySummonerName(summonerName, regionId);
    const matchIdList = await this.matchesService.getMatchHistory(summoner.puuid);
    const matches = await this.matchesService.getMatches(matchIdList);
    const participants = this.match.handler(matches, summoner);

    return participants;
  }
}
