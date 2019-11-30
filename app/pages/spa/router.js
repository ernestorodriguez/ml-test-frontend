const React = require('react');
const { Fragment } = require('react');
const ItemsSearchPage = require('../itemsSearch');
const ItemsPage = require('../itemDetail');
const Header = require('../../components/header');
const {
    Switch,
    Route,
    useLocation,
} = require('react-router-dom');

/**
 * React component for routing set the page destination inside app for client or server rendering
 * @return {JSX}
 */
const router = function ({ pageData }) {
    const getQuerySearch = (pageData) => {
        if (pageData) {
            return pageData;
        }
        const query = new URLSearchParams(useLocation().search);

        return {
            userQuery: query.get('q'),
            items: [],
        };
    };

    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route path="/items/:id">
                    <ItemsPage pageData={pageData}/>
                </Route>
                <Route path="/items">
                    <ItemsSearchPage pageData={getQuerySearch(pageData)}/>
                </Route>
                <Route exact path="/">
                    <h1>HOME</h1>
                </Route>
            </Switch>
        </Fragment>
    );
};

module.exports = router;
