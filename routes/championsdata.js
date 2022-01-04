let express = require('express')
const router = express.Router()
const got = require('got');

router.get('/', async(req, res, next) => {

    async function getChampionJson() {
        return new Promise((resolve, reject) => {
            got.get(`http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json`, {
                headers: { 'X-Riot-Token': `${ process.env.API_KEY }` }
            }).then(data => {

                let bodyChamps = JSON.parse(data.body)
                resolve({
                    bodyChamps
                });
            }).catch(error => {
                resolve({
                    mensaje: error
                })
            })
        })
    }

    let bodyChamps = await getChampionJson();

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente',
        Champs: bodyChamps
    });

})

module.exports = router;