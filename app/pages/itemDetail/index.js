const React = require('react');
const { useEffect, useState } = require('react');
const { useParams } = require('react-router-dom');

const ItemDetailPage = ({pageData}) => {
    const [description, setDescription] = useState(pageData.item.description);
    const { id } = useParams();
    const fetchData = (id) =>  {
        const res = fetch(`/api/items/${id}`, {
            method: 'GET',
        });

        res.then(res => {
            res.json().then(data => {
                setDescription(data.item.description);
            });
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        if (!description) {
            fetchData(id);
        }
    }, []);

    return (
        <article>
            <h1>ITEM DESCRIPTION</h1>
            <div data-js={'description'}>{ description }</div>
        </article>
    );
};

ItemDetailPage.defaultProps = {
    pageData: {
        item: {},
    },
};

module.exports = ItemDetailPage;
