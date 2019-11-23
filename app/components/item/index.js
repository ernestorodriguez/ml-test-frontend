const React = require('react') ;

const Item = ({id}) => (
    <section className={'item'}>
        <form action={`/items/${id}`}>
            <button type={'submit'} data-js={'item'}>
                <h2>Item</h2>
            </button>
        </form>
    </section>
);

module.exports = Item;

