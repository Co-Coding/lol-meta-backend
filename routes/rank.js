let express = require('express');
let app = express();
const got = require('got')
let api_key = require('../apikey')


app.get('/:regionId/:summonerId', async (req, res, next) => {

    regionId = req.params.regionId
    summonerId = req.params.summonerId

    console.log(req.params);

    async function getRank(regionId, summonerId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`, {
                headers: { 'X-Riot-Token': `${api_key.api_key}` }
            }).then(data => {
                let body = JSON.parse(data.body)
                resolve({
                    data: body
                });
            }).catch(error => {
                reject({
                    message: error
                });
            });
        });
    }

    let rank = await getRank(`${regionId}`, `${summonerId}`);

    res.status(200).json({
        ok: true,
        rank: rank
    });

});

module.exports = app;