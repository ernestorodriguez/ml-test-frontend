const author = require('../../../lib/middlewares/author');
const search = require('../../../lib/middlewares/itemSearch');
const itemDescription = require('../../../lib/middlewares/itemDescription');
const { configResponse, respondAsJSON, searchItemsService, itemService } = require('../../../lib/middlewares/utils');
const mock = require('./mock.json');
const mockItem = require('./mockItem.json');
const axios = require('axios');

jest.mock('axios');

describe('Acceptance test for Api items', () => {
    afterEach(() => {
        axios.get.mockClear();
    });

    afterAll(() => {
        axios.mockRestore();
    });

    test('must return search result in the correct format', async () => {
        axios.get.mockImplementation(() => new Promise((resolve) => {
            setTimeout(() => resolve({
                status: 200,
                data: mock,
            }), 1000)
        }));

        let result;
        const req = {
            query: {
                q: 'iphone 8'
            }
        };
        const res = {
            locals:{},
            status() {
                return this;
            },
            json(serverResponse) {
                result = serverResponse;
            }
        };

        configResponse(req, res, () => {});
        author(req, res, () => {});
        await searchItemsService(req, res, () => {});
        search(req, res, () => {});
        respondAsJSON(req, res, () => {});

        expect(JSON.stringify(result)).toEqual(JSON.stringify({
            author: {
                name: 'Ernesto',
                lastName: 'Rodriguez'
            },
            categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
            items:[
                {
                    id: 'MLA823005561',
                    title: 'Apple iPhone 6s 32 Gb Gris Espacial',
                    price: {
                       currency: '$',
                       amount: '30990',
                       decimals: '20'
                    },
                    picture: 'http://mla-s2-p.mlstatic.com/898290-MLA31003118647_062019-I.jpg',
                    condition: 'new',
                    free_shipping: true,
                },
                {
                    id: 'MLA823005563',
                    title: 'Apple iPhone 7s 32 Gb Gris Espacial',
                    price: {
                        currency: '$',
                        amount: '40990',
                        decimals: '70'
                    },
                    picture: 'http://mla-s2-p.mlstatic.com/898290-MLA31003118647_062019-I.jpg',
                    condition: 'new',
                    free_shipping: true,
                },
                {
                    id: 'MLA689528238',
                    title: 'Funda Silicone Case 5s Se 6 6s 7 Plus iPhone 8 Plus Original',
                    price: {
                        currency: '$',
                        amount: '699',
                        decimals: '90'
                    },
                    picture: 'http://mla-s1-p.mlstatic.com/679417-MLA31019694444_062019-I.jpg',
                    condition: 'new',
                    free_shipping: false,
                }
            ],
       }));
   });
    test('must return item description result in the correct format', async () => {
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

        let result;
        const req = {
            params: {
                id: 'MLA1234'
            }
        };
        const res = {
            serverResponse: {},
            locals:{
                itemsApiResult: mockItem,
                itemsDescriptionApiResult: {
                    plain_text: 'item description',
                }
            },
            status() {
                return this;
            },
            json(serverResponse) {
                result = serverResponse;
            }
        };

        configResponse(req, res, () => {});
        author(req, res, () => {});
        await itemService(req, res, () => {});
        itemDescription(req, res, () => {});
        respondAsJSON(req, res, () => {});

        expect(JSON.stringify(result)).toEqual(JSON.stringify({
            author: {
                name: 'Ernesto',
                lastName: 'Rodriguez'
            },
            item: {
                id: 'MLA823005561',
                title: 'Apple iPhone 6s 32 Gb Gris Espacial',
                price: {
                    currency: '$',
                    amount: '30990',
                    decimals: '00'
                },
                picture: 'http://mla-s2-p.mlstatic.com/898290-MLA31003118647_062019-I.jpg',
                condition: 'new',
                free_shipping: true,
                sold_quantity: 1,
                description: 'item description'
            }
        }));
    });
});