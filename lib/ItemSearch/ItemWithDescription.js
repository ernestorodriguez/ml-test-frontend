const Item = require('./Item');

class ItemWithDescription extends Item {
    constructor({ item, description }) {
        super(item);
        this.sold_quantity = item.sold_quantity;
        this.description = description.plain_text;
    }
}

module.exports = ItemWithDescription;