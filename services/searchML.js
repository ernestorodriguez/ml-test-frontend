const restClient = require('axios').default;
const config = require('config');

const apiPath = config.get('apiSearchPath');

class SearchItemsService {
    static get(query) {
        return restClient.get(apiPath, {
            params: {
                q: query,
                limit: 4,
            }
        }).then((response) => {
            console.log('response', response.data)
            return response.data;
        }).catch((error) => {
            console.error(`not data found for query: "${query}", error: ${JSON.stringify(error)}`);
            return {};
        });
    }
}


module.exports = SearchItemsService;