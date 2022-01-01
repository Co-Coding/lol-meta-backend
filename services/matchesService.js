const HttpService = require('../services/http/httpService');

class MatchesService {
    constructor() {}

    async getMatches(matchHistory) {

        const url = 'https://americas.api.riotgames.com/lol/match/v5/matches/';
        const httpService = new HttpService();
        const [...matches] = await Promise.all([
            httpService.getRequest(`${url}${matchHistory[0]}`),
            httpService.getRequest(`${url}${matchHistory[1]}`),
            httpService.getRequest(`${url}${matchHistory[2]}`),
            httpService.getRequest(`${url}${matchHistory[3]}`),
            httpService.getRequest(`${url}${matchHistory[4]}`),
            httpService.getRequest(`${url}${matchHistory[5]}`),
            httpService.getRequest(`${url}${matchHistory[6]}`),
            httpService.getRequest(`${url}${matchHistory[7]}`),
            httpService.getRequest(`${url}${matchHistory[8]}`),
            httpService.getRequest(`${url}${matchHistory[9]}`),
        ]);
        return matches;
    }
}


module.exports = MatchesService;