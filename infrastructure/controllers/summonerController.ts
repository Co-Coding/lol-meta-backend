import { Request, Response } from 'express';
import { summonerDataService } from "../container/dependencyContainer";
import { errorHandler } from "../utils/errorHandler";

export const summonerController = async (req: Request, res: Response) => {
  const { summonerName, regionId } = req.params;

  try {
    const resp = await summonerDataService.getSummonerData(summonerName, regionId);
    res.status(200).json({
      ok: true,
      resp,
    });
  } catch (err) {
    const error = errorHandler(err)
    console.log(error);
    res.status(error.status_code).json(error);
  }
};
