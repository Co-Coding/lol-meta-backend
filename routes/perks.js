let express = require('express')
let app = express();
let got = require('got')

app.get('/', async(req, res, next) => {

    async function getSuperHeroes() {
        return new Promise((resolve, reject) => {
            got.get('http://ddragon.canisback.com/10.6.1/data/en_US/runesReforged.json')
                .then(data => {
                    let perks = JSON.parse(data.body)
                    resolve({
                        perks
                    })
                }).catch(error => {
                    reject({
                        error: error
                    })
                });
        })
    }

    let perks = await getSuperHeroes();

    res.status(200).json({
        ok: true,
        data: perks
    });
});


module.exports = app;