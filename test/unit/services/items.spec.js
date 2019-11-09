const service = require('../../../services/items');
const axios = require('axios');

jest.mock('axios');

describe('Search Item Service', () => {
    afterEach(() => {
        axios.get.mockClear();
    });

    afterAll(() => {
        axios.mockRestore();
    });

    test('must Make api call with correct params', (done) => {
        axios.get.mockImplementation(() => Promise.resolve({
            status: 200,
            data: {
                foo: 'bar'
            }
        }));

        service.get('MLA823005561').then((response) => {
           expect(response).toEqual({
               itemsApiResult: { foo: 'bar' },
               itemsDescriptionApiResult: { foo: 'bar' },
           });
            done()
        });
        expect(axios.get.mock.calls).toEqual(
            [["https://api.mercadolibre.com/items/MLA823005561"],["https://api.mercadolibre.com/items/MLA823005561/description"]]
        );
    });

    test('must handle error response and return and empty response', (done) => {
        axios.get.mockImplementation(() => Promise.reject({
            status: 400,
            data: {
                foo: 'bar'
            }
        }));

        service.get('MLA123123').then((response) => {
            expect(response).toEqual({});
            done()
        });
    });
});