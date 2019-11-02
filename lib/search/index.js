const Item = require('./Item')
class searchResult {
    constructor(searchDTO) {
        this.searchDTO = searchDTO;
        this.items = searchDTO.results.map((itemData) => new Item(itemData))
    }

    result() {
        return JSON.stringify({
            autor: {
                name: 'Ernesto',
                lastName: 'Rodriguez',
            },
            categories: ['Celulares y Smartphones', 'Celulares y Smartphones'],
            items: this.items,
        });
    }
}


module.exports = searchResult;