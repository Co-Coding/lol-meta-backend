const routesController = require('../controllers/routesController');

const routes = (app) => {

    app.get('/summName/:summonerName/:regionId', routesController.summonerController);
    app.post('/rank', routesController.getRank);
}


module.exports = routes;