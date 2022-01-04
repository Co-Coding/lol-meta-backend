const got = require('got');

class HttpService {

    async getRequest(url) {
        try {
            return await got.get(url, {
                headers: { 'X-Riot-Token': `${ process.env.API_KEY }` }
            }).then(data => {
                return JSON.parse(data.body);
            });
        } catch (error) {
            throw error;
        }
    }
}


module.exports = HttpService;