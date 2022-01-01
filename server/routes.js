const routesController = require('../routes/routesController');
const routes = (app) => {

    app.use('/items', routesController.itemsRoutes);
    app.use('/spells', routesController.spellsRoutes);
    app.use('/rank', routesController.rankRoutes);
    app.use('/perks', routesController.perksRoutes);
    app.use('/championsdata', routesController.championsDataRoutes);
    app.use('/match', routesController.matchRoutes);
    app.use('/summName/:summonerName/:regionId', routesController.summonerControler);
}


module.exports = routes;