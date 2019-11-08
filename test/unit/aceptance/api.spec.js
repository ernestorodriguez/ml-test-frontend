const author = require('../../../lib/middlewares/author');
const search = require('../../../lib/middlewares/itemSearch');
const itemDescription = require('../../../lib/middlewares/itemDescription');
const { respondAsJSON } = require('../../../lib/middlewares/utils');
const SearchDTO = require('../../../lib/ItemSearch/SearchDTO');
const mock = require('./mock.json');
const mockItem = require('./mockItem.json');

describe('Acceptance test for Api items', () => {
    test('must return search result in the correct format', () => {

        let result;
        const req = {
            serverResponse: {},
        };
        const res = {
            locals:{
                searchApiResult: new SearchDTO(mock),
            },
            status() {
                return this;
            },
            json(serverResponse) {
                result = serverResponse;
            }
        };

        author(req, res, () => {});
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
    test('must return item description result in the correct format', () => {

        let result;
        const req = {
            serverResponse: {},
        };
        const res = {
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

        author(req, res, () => {});
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