const React = require('react');
const Item = require('../../components/item');

const ItemsPage = ({pageData}) => {
    const { items } = pageData;
    const ItemViews = items.map(data => (<Item key={data.id} {...data} />));

    return (
        <article>
            <h1>SEARCH RESULT</h1>
            { ItemViews }
        </article>
    );
};

module.exports = ItemsPage;
