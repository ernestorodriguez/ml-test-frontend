const React = require('react');
const { useState } = require('react');
const { useHistory } = require('react-router-dom');

const Header = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();
    const clickHandler = (event) => {
        event.preventDefault();
        history.push(`/items?q=${query}`);
    };

    return (
        <header>
            <form action={'/items'}>
                <input data-js="search-input" name="q" onChange={(event) => setQuery(event.target.value)} value={query} />
                <button type={'submit'} data-js="search-submit" onClick={clickHandler}>
                    buscar
                </button>
            </form>
        </header>
    );
};

module.exports = Header;
