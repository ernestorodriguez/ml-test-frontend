const Search = require('../../lib/search');
const SearchDTO = require('../../lib/search/SearchDTO');
const mock = require('./mock.json');

describe('Acceptance test for Api items', () => {
   test('must return search result in the correct format', () => {
      const search = new Search(new SearchDTO(mock));
       expect(JSON.stringify(search.result())).toEqual(JSON.stringify({
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