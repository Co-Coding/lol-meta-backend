import { SummonerService } from "../services/summonerService";
import { MatchesService } from "../services/matchesService";
import { Match } from "../services/dataProccesServices/match";
import { SummonerDataHandler } from "../services/summonerDataHandler";
import { HttpService } from "../http/httpService";

const httpService = new HttpService();

const summonerService = new SummonerService(httpService);
const matchesService = new MatchesService(httpService);
const match = new Match(httpService);

export const summonerDataService = new SummonerDataHandler(
  summonerService,
  matchesService,
  match
);
