import got from "got"

export class HttpService {
  async getRequestApi(url: string) {
    return await got
      .get(url, {
        headers: { "X-Riot-Token": `${process.env.API_KEY}` },
      })
      .then((data: any) => {
        return JSON.parse(data.body);
      });
  }

  async getRequest(url: string) {
    try {
      return await got.get(url).then((data) => {
        return JSON.parse(data.body);
      });
    } catch (error) {
      throw error;
    }
  }
}
