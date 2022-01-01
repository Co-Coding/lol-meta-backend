const itemsRoutes = require('../dataProcces/itemsProcess');
const spellsRoutes = require('./spells');
const championsDataRoutes = require('./championsdata');
const rankRoutes = require('./rank');
const perksRoutes = require('./perks');
const matchRoutes = require('../services/matchesService');
const summonerControler = require('./summonerController');
const appRoutes = require('./app');


module.exports = {
    itemsRoutes,
    spellsRoutes,
    championsDataRoutes,
    rankRoutes,
    perksRoutes,
    matchRoutes,
    summonerControler,
    appRoutes,
}