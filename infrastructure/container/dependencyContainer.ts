import { SummonerService } from "../services/summonerService";
import { MatchesService } from "../services/matchesService";
import { MatchProcesser } from "../../domain/dataProcces/matchProcesserService";
import { SummonerDataHandler } from "../../application/summoner/summonerDataHandler";
import { HttpService } from "../http/httpService";
import { Matches, Summoner } from "../services/types";

const httpService = new HttpService();

const summonerService: Summoner = new SummonerService(httpService);
const matchesService: Matches = new MatchesService(httpService);
const matchProcesser: any = new MatchProcesser(httpService);

export const summonerDataService = new SummonerDataHandler(
  summonerService,
  matchesService,
  matchProcesser
);
