const restClient = require('axios').default;

const path = '/api/items';

class ApiService {
    static search(query) {
        return restClient.get(path, {
            params: {
                q: query,
                limit: 4,
            }
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            console.error(`not data found for query: "${query}", error: ${JSON.stringify(error)}`);
            return {};
        });
    }

    static getItem(id) {
        return restClient.get(`${path}/${id}`).then((response) => {
            return response.data;
        }).catch((error) => {
            console.error(`not data found for item: "${id}", error: ${JSON.stringify(error)}`);
            return {};
        });
    }
}


module.exports = ApiService;