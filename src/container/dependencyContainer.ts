import { SummonerService } from "../services/summonerService";
import { MatchesService } from "../services/matchesService";
import { Match } from "../services/dataProccesServices/match";
import { HttpService } from "../http/httpService";

const httpService = new HttpService();
const matchesService = new MatchesService(httpService);
const match = new Match(httpService);

export const summonerService = new SummonerService(
  httpService,
  matchesService,
  match
);
