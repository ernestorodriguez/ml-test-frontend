const React = require('react');
const { useEffect, useState } = require('react');
const Item = require('../../components/item');
const { useLocation } = require('react-router-dom');
const service = require('../../../services/api');

const ItemsPage = ({ pageData }) => {
    const [items, setItems] = useState(pageData.items);
    const query = new URLSearchParams(useLocation().search);

    const fetchData = () =>  {
        const userQuery = query.get('q');

        service.search(userQuery).then(data => {
            setItems(data.items);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        if (!items.length) {
            fetchData();
        }
    }, []);

    return (
        <article>
            <h1>SEARCH RESULT</h1>
            { items.map(data => (<Item key={data.id} {...data} />)) }
        </article>
    );
};

ItemsPage.defaultProps = {
    pageData: {
        items: [],
    },
};

module.exports = ItemsPage;
