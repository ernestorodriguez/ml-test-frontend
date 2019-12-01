const restClient = require('axios').default;
const config = require('config');

const apiPath = config.get('apiItemsPath');

class ItemsService {
    static get(itemId) {
        const itemsPath = `${apiPath}/${itemId}`;
        const itemsDescriptionPath = `${apiPath}/${itemId}/description`;
        const getItem = restClient.get(itemsPath);
        const getDescriptionItem = restClient.get(itemsDescriptionPath);

        return Promise.all([getItem, getDescriptionItem]).then((response) => {
            const [itemsApiResponse, itemsDescriptionApiResponse] = response;

            return {
                itemsApiResult: itemsApiResponse.data,
                itemsDescriptionApiResult: itemsDescriptionApiResponse.data,
            };
        }).catch((error) => {
            console.error(`not data found for item: ${itemId}, error: ${JSON.stringify(error)}`);
            return {};
        });
    }
}


module.exports = ItemsService;
