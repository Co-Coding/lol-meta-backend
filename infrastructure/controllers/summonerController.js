const summonerDataService = require("../container/dependencyContainer");
const errorHandler = require("../utils/errorHandler");

const summonerController = async (req, res, next) => {
  const { summonerName, regionId } = req.params;

  try {
    const resp = await summonerDataService.getSummonerData(
      summonerName,
      regionId
    );
    res.status(200).json({
      ok: true,
      resp,
    });
  } catch (err) {
    const error = errorHandler(err);
    console.log(error);
    res.status(error.status_code).json(error);
  }
};

module.exports = summonerController;
