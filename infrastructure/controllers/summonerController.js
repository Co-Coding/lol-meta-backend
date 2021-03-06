const container = require('../container/container');
const errorHandler = require('../utils/errorHandler')

const summonerController = async(req, res, next) => {

    const {summonerName, regionId} = req.params

    const summonerDataService = container.resolve('summonerDataService');

    try{
        const resp = await summonerDataService.getSummonerData(summonerName, regionId);
        res.status(200).json({
            ok: true,
            resp,
        });
    }
    catch(err){
        const error = errorHandler(err)
        console.log(error)
        res.status(error.status_code).json(error)
    }

};


module.exports = summonerController;