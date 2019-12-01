const service = require('../../../services/api');
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

        service.getItem('MLA823005561').then((response) => {
            expect(response).toEqual({ foo: 'bar' });
            done();
        });
        expect(axios.get.mock.calls).toEqual(
            [['/api/items/MLA823005561']]
        );
    });

    test('must handle error response and return and empty response', (done) => {
        axios.get.mockImplementation(() => Promise.reject({
            status: 400,
            data: {
                foo: 'bar'
            }
        }));

        service.getItem('MLA123123').then((response) => {
            expect(response).toEqual({});
            done();
        });
    });
});

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

        service.search('iphone 8 plus').then((response) => {
            console.log(response);

            done();
        });
        expect(axios.get).toBeCalledWith(
            '/api/items',
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

        service.search('iphone 8 plus').then((response) => {
            expect(response).toEqual({});
            done();
        });
    });
});

