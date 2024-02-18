import { HttpService } from "../../infrastructure/http/httpService";
import { Matches, SummonerData } from "../../infrastructure/services/types";

import { processItems } from "./itemsProcessing";
import { processPerks } from "./processPerks";
import { processChampions } from "./processChampions";
import { timeProcess } from "./processItems";
import { rankProcess } from "./processRank";
import { queueProcess } from "./processQueue";

export class Match {
  httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  async handler(matches: Matches[], summoner: SummonerData) {
    const data = await this.getData();
    const perksData = data[0];
    const championsData = data[1];
    const queuesData = data[2];

    const itemsProcessed = processItems(matches);
    const perksProcessed = await processPerks(itemsProcessed, perksData);
    const championsProcessed = await processChampions(
      perksProcessed,
      championsData
    );
    const timeProcessed = await timeProcess(championsProcessed);
    const queueProcessed = await queueProcess(timeProcessed, queuesData);
    const rankProcessed = await rankProcess(queueProcessed, summoner.id);
    //const spellsProcessed = processSpells(perksProcessed);

    return rankProcessed;
  }

  async getData() {
    const data = await Promise.all([
      this.httpService.getRequest(
        "http://ddragon.canisback.com/10.6.1/data/en_US/runesReforged.json"
      ),
      this.httpService.getRequest(
        "http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json"
      ),
      this.httpService.getRequest(
        "https://static.developer.riotgames.com/docs/lol/queues.json"
      ),
    ]);
    return data;
  }
}

