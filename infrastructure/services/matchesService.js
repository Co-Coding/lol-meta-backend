const HttpService = require('../http/httpService');

class MatchesService {
    constructor() {}

    async getMatches(matchHistory) {

        const url = 'https://americas.api.riotgames.com/lol/match/v5/matches/';
        const httpService = new HttpService();
        const matches = await Promise.all([
            httpService.getRequestApi(`${url}${matchHistory[0]}`),
            httpService.getRequestApi(`${url}${matchHistory[1]}`),
            httpService.getRequestApi(`${url}${matchHistory[2]}`),
            httpService.getRequestApi(`${url}${matchHistory[3]}`),
            httpService.getRequestApi(`${url}${matchHistory[4]}`),
            httpService.getRequestApi(`${url}${matchHistory[5]}`),
            httpService.getRequestApi(`${url}${matchHistory[6]}`),
            httpService.getRequestApi(`${url}${matchHistory[7]}`),
            httpService.getRequestApi(`${url}${matchHistory[8]}`),
            httpService.getRequestApi(`${url}${matchHistory[9]}`),
        ]);
        return matches;
    }
}

module.exports = MatchesService;