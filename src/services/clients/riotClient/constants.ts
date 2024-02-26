export const riot = {
    endpoints: {
        getSummonerByName: (summonerName: string, regionId: string) => `https://${regionId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
    }
}