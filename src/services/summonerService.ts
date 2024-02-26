import { RiotClient } from "./clients/riotClient/riotClient";
import { MatchesService } from "./matchesService";
import { Participant, Summoner, SummonerData } from "./types";

export class SummonerService implements Summoner {

  riotClient: RiotClient
  matchesService: MatchesService;
  match: any;

  constructor(riotClient: RiotClient, matchesService: MatchesService, match: any) {
    this.riotClient = riotClient;
    this.matchesService = matchesService;
    this.match = match;
  }

  async getBySummonerName(summonerName: string, regionId: string): Promise<SummonerData> {
    const summonerData = await this.riotClient.getSummonerByName(summonerName, regionId)
    return summonerData;
  }

  async getSummonerData(summonerName: string, regionId: string): Promise<Participant> {
    const summoner = await this.getBySummonerName(summonerName, regionId);
    const matchIdList = await this.matchesService.getMatchHistory(summoner.puuid);
    const matches = await this.matchesService.getMatches(matchIdList);
    const participants = this.match.handler(matches, summoner);

    return participants;
  }

}
