export interface Summoner {
    getBySummonerName(summonerName: string, regionId: string): Promise<SummonerData>
}

export interface MatchIdList {
    [index: number]: string;
}

export interface Matches {
    getMatchHistory(puuid: string): Promise<MatchIdList>, // ver si devuleve promesa
    getMatches(matchHistory): Promise<any>
}

export interface MatchProcesser {
    matchProcess(matches, summoner): Promise<MatchesProcessed>
}

export interface HttpService {

}

export interface MatchesData {

}

export type SummonerData = {
    puuid: string
    id: string
    accountId: string,
    name: string,
    profileIconId: number,
    revisionDate: number,
    summonerLevel: number
}