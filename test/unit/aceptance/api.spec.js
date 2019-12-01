const searchMlResponse = require('../mocks/searchMLresponse.json');
const itemsMlResponse = require('../mocks/itemsMLresponse.json');
const apiItemsItemIdResponse = require('../mocks/apiItemsItemIdResponse.json');
const apiItemsResponse = require('../mocks/apiItemsResponse.json');
const axios = require('axios');
const request = require('supertest');
const App = require('../../../index');

jest.mock('axios');

describe('Acceptance test for Api items', () => {
    afterEach(() => {
        axios.get.mockClear();
    });

    afterAll(() => {
        axios.mockRestore();
    });

    test('must return search result in the correct format', async (done) => {
        axios.get.mockImplementation(() => new Promise((resolve) => {
            setTimeout(() => resolve({
                status: 200,
                data: searchMlResponse,
            }), 1000);
        }));

        request(App)
            .get('/api/items?q=iphone%208')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(JSON.stringify(apiItemsResponse));
                done();
            });
    });

    test('must return item description result in the correct format', (done) => {
        let response = 0;
        const responses = [itemsMlResponse, {
            plain_text: 'item description',
        }];

        axios.get.mockImplementation(() => {
            const promise = Promise.resolve({
                status: 200,
                data: responses[response]
            });

            response ++;
            return promise;
        });

        request(App)
            .get('/api/items/MLA1234')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(JSON.stringify(apiItemsItemIdResponse));
                done();
            });
    });
});
