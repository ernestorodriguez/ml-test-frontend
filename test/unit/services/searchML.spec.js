const service = require('../../../services/searchML');
const axios = require('axios');

jest.mock('axios');

describe('Search Item Service', () => {
    afterAll(() => {
        axios.mockReset();
    });

    test('must Make api call with correct params', (done) => {
        axios.get.mockImplementation(() => Promise.resolve({
            status: 200,
            data: {
                foo: 'bar'
            }
        }));

        service.get('iphone 8 plus').then((response) => {
            console.log(response);

            done();
        });
        expect(axios.get).toBeCalledWith(
            'https://api.mercadolibre.com/sites/MLA/search',
            {
                params: {
                    limit: 4,
                    q: 'iphone 8 plus'
                }
            }
        );
    });

    test('must handle error response and return and empty response', (done) => {
        axios.get.mockImplementation(() => Promise.reject({
            status: 400,
            data: {
                foo: 'bar'
            }
        }));

        service.get('iphone 8 plus').then((response) => {
            expect(response).toEqual({});
            done();
        });
    });
});
