import { SummonerService } from "../services/summonerService";
import { MatchesService } from "../services/matchesService";
import { Match } from "../services/dataProccesServices/match";
import { HttpService } from "../http/httpService";
import { RiotClient } from "../services/clients/riotClient/riotClient";

const httpService = new HttpService();
const matchesService = new MatchesService(httpService);
const match = new Match(httpService);
const riotClient = new RiotClient()

export const summonerService = new SummonerService(
  riotClient,
  matchesService,
  match
);
