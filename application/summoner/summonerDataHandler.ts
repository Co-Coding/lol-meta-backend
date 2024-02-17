import { Matches, Summoner, SummonerData } from "../../infrastructure/services/types";

export class SummonerDataHandler {
  summonerService: Summoner;
  matchesService: Matches;
  matchProcesser: any;
  constructor(
    summonerService: Summoner,
    matchesService: Matches,
    matchProcesser: any
  ) {
    this.summonerService = summonerService;
    this.matchesService = matchesService;
    this.matchProcesser = matchProcesser;
  }

  async getSummonerData(summonerName: string, regionId: string) {
    const summoner: SummonerData = await this.summonerService.getBySummonerName(
      summonerName,
      regionId
    );
    const matchIdList = await this.matchesService.getMatchHistory(
      summoner.puuid
    );
    const matches = await this.matchesService.getMatches(matchIdList);
    const participants = this.matchProcesser.matchProcess(matches, summoner);

    return participants;
  }
}
