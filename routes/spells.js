let express = require('express')
let app = express();
let got = require('got')

app.get('/', async(req, res, next) => {

    async function getSuperHeroes() {
        return new Promise((resolve, reject) => {
            got.get('http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/summoner.json')
                .then(data => {
                    let spells = JSON.parse(data.body)
                    resolve({
                        spells
                    })
                }).catch(error => {
                    reject({
                        error: error
                    })
                });
        })
    }

    let spells = await getSuperHeroes();

    res.status(200).json({
        ok: true,
        spells
    });
});


module.exports = app;

