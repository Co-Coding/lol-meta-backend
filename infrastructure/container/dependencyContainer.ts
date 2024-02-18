import { SummonerService } from "../services/summonerService";
import { MatchesService } from "../services/matchesService";
import { Match } from "../../domain/dataProcces/match";
import { SummonerDataHandler } from "../../application/summoner/summonerDataHandler";
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
