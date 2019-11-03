const author = require('../../lib/middlewares/author');
const search = require('../../lib/middlewares/itemSearch');
const { respondAsJSON } = require('../../lib/middlewares/utils');
const SearchDTO = require('../../lib/ItemSearch/SearchDTO');
const mock = require('./mock.json');

describe('Acceptance test for Api items', () => {
   test('must return search result in the correct format', () => {

        let result;
        const req = {
            locals:{
                searchApiResult: new SearchDTO(mock),
            },
            serverResponse: {},
        };
        const res = {
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
               }
            ],
       }));
   })
});