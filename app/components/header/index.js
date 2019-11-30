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
            <form action={'/items'} onSubmit={()=>{console.log('this not supposed to happen')}}>
                <input data-js="search-input" name="q" onChange={(event) => setQuery(event.target.value)} value={query} />
                <button type={'submit'} data-js="search-submit" value={'buscar'} onClick={clickHandler}>
                    buscar
                </button>
            </form>
        </header>
    );
};

module.exports = Header;
