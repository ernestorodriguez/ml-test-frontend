class Item {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        const [amount, decimals] = data.price.toFixed(2).toString().split('.');
        this.price = {
            currency: '$',
            amount,
            decimals
        };
        this.picture = data.thumbnail;
        this.condition = data.condition;
        this.free_shipping = data.shipping.free_shipping;
    }
}

module.exports = Item;