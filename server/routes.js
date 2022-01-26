const routesController = require('../routes/routesController');
const routes = (app) => {

    app.use('/summName/:summonerName/:regionId', routesController.summonerController);
}


module.exports = routes;