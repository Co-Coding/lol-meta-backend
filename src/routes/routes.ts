import { summonerController } from '../controllers/routesController';
import express from 'express';

const router = express.Router()

router.get('/summName/:summonerName/:regionId', summonerController);
// router.post('/rank', getRank);

export default router