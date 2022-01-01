const got = require('got');
const api_key = require('../../apikey');

class HttpService {

    async getRequest(url) {
        try {
            return await got.get(url, {
                headers: { 'X-Riot-Token': `${ api_key.api_key }` }
            }).then(data => {
                return JSON.parse(data.body);
            });
        } catch (error) {
            throw error;
        }
    }
}


module.exports = HttpService;