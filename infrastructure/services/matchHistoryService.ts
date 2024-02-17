// export class MatchHistoryService {
//   constructor(httpService) {
//     this.httpService = httpService;
//   }

//   async getMatchHistory(puuid: string) {
//     const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=10`;
//     const data = await this.httpService.getRequestApi(url);
//     return data;
//   }
// }
