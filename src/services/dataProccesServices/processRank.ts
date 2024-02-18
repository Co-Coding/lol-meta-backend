import { HttpService } from "../../http/httpService";

export const rankProcess = async (matches: any, summonerId: any) => {
    const httpService = new HttpService();

    try {
        const rankedUrl = `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`
        const rankedData = await httpService.getRequestApi(rankedUrl);

        const rankedProcessed = matches.map((match: any) => {
            const participants = match.info.participants;

            const participant = participants.find((participant: any) => participant.summonerName === rankedData[0].summonerName)
            participant.rankedData = rankedData

            return match

        })
        return rankedProcessed

    } catch (error) {
        throw error
    }

}
