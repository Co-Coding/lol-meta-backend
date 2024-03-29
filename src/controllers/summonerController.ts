import { Request, Response } from 'express';
import { summonerService } from "../container/dependencyContainer";
import { errorHandler } from "../errorHandler/errorHandler";

export const summonerController = async (req: Request, res: Response) => {
  const { summonerName, regionId } = req.params;

  try {
    const resp = await summonerService.getSummonerData(summonerName, regionId);
    res.status(200).json({
      resp,
    });
  } catch (err) {
    const error = errorHandler(err)
    console.log(error);
    res.status(error.status_code).json(error);
  }
};
