import { SummonerService } from "../services/summonerService";
import { MatchesService } from "../services/matchesService";
import { MatchProcesser } from "../../domain/dataProcces/matchProcesserService";
import { SummonerDataHandler } from "../../application/summoner/summonerDataHandler";
import { HttpService } from "../http/httpService";

const httpService = new HttpService();

const summonerService = new SummonerService(httpService);
const matchesService = new MatchesService(httpService);
const matchProcesser = new MatchProcesser(httpService);

export const summonerDataService = new SummonerDataHandler(
  summonerService,
  matchesService,
  matchProcesser
);
