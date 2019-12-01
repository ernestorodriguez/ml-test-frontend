const React = require('react');
const { useEffect, useState } = require('react');
const { useParams } = require('react-router-dom');
const service = require('../../../services/api');

const ItemDetailPage = ({ pageData }) => {
    const [description, setDescription] = useState(pageData.item.description);
    const { id } = useParams();
    const updateData = (data) => {
        setDescription(data.item.description);
    };

    useEffect(() => {
        if (!description) {
            service.getItem(id).then(data => {
                updateData(data);
            }).catch(err => { console.log(err); });
            // TODO ADD redirect to Error page
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
