const service = require('../../../services/search');
const axios = require('axios');

jest.mock('axios');
describe('Search Item Service', () => {
    test('must Make api call with correct params', () => {
        axios.get.mockImplementation(() => Promise.resolve({
            status: 200,
            data: {
                foo: 'bar'
            }
        }));

        service.get('iphone 8 plus').then((response) => {
            console.log(response);
            expect(axios.get).toBeCalledWith(arg1, arg2);
        })

    });
});