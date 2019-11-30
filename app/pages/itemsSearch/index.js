const React = require('react');
const { useEffect, useState } = require('react');
const Item = require('../../components/item');

const ItemsPage = ({ pageData }) => {
    const [items, setItems] = useState(pageData.items);

    const fetchData = () =>  {
        const res = fetch(`/api/items?q=${encodeURIComponent(pageData.userQuery)}`, {
            method: 'GET',
        });

        res.then(res => {
            res.json().then(data => {
                setItems(data.items);
            });
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        if (pageData.userQuery) {
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
