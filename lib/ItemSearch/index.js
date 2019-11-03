const Item = require('./Item');
const Categories = require('./Categories');

class searchResult {
    constructor(searchDTO) {
        this.items = searchDTO.results.map((itemData) => new Item(itemData));
        this.categories = new Categories(searchDTO.categories, searchDTO.results);
    }

    result() {
        return {
            categories: this.categories.getList(),
            items: this.items,
        };
    }
}


module.exports = searchResult;