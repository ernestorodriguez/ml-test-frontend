const mock = require('./mock.json');
const mockItem = require('./mockItem.json');
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

    test('serve app when / path is called', (done) => {
        request(App)
            .get('/')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toContain('HOME');
                done();
            });
    });

    test('serve app when /items path is called', async (done) => {
        axios.get.mockImplementation(() => new Promise((resolve) => {
            setTimeout(() => resolve({
                status: 200,
                data: mock,
            }), 1000);
        }));

        request(App)
            .get('/items?q=iphone%208')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toContain('SEARCH');
                done();
            });
    });

    test('serve app when /items/MLA1234 path is called', (done) => {
        let response = 0;
        const responses = [mockItem, {
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
            .get('/items/MLA1234')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toContain('DESCRIPTION');
                done();
            });
    });
});