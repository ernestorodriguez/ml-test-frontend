const React = require('React');
const Header = () => (
    <header>
        <form action={'/items'}>
            <input data-js="search-input" name="q" />
            <button type={'submit'} data-js="search-submit" value={'buscar'}>
                Buscar
            </button>
        </form>
    </header>
);

module.exports = Header;
