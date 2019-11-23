const React = require('react');
const ItemsPage = ({pageData}) => {
    const { item } = pageData;

    return (
        <article>
            <h1>ITEM DESCRIPTION</h1>
            <div data-js={'description'}>{ item.description }</div>
        </article>
    );
};

module.exports = ItemsPage;
