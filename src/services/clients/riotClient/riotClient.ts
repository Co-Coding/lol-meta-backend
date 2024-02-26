
import got from "got";
import { riot } from "./constants";
import { SummonerData } from "../../types";

export class RiotClient {
    constructor() { }

    async getSummonerByName(summonerName: string, regionId: string): Promise<SummonerData> {
        const endpoint = riot.endpoints.getSummonerByName(summonerName, regionId)
        return await got.get(endpoint, {
            headers: { "X-Riot-Token": `${process.env.API_KEY}` },
        })
            .then((data: any) => {
                return JSON.parse(data.body);
            });
    }
}