const React = require('react');
const { useHistory } = require('react-router-dom');

const Item = ({id}) => {
    const history = useHistory();
    const action = `/items/${id}`;
    const clickHandler = (event) => {
        event.preventDefault();
        history.push(action);
    };

    return (
        <section className={'item'}>
            <form action={action}>
                <button type={'submit'} data-js={'item'} onClick={clickHandler}>
                    <h2>Item</h2>
                </button>
            </form>
        </section>
    );
};

module.exports = Item;

