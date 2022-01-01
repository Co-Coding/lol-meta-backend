const container = require('../services/lib/container/container');

const summonerController = async(req, res) => {
    const summonerDataService = container.resolve('summonerDataService');
    const resp = await summonerDataService.getSummonerData(req);

    res.status(200).json({
        ok: true,
        resp,
    });
};


module.exports = summonerController;