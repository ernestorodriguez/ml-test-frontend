const React = require('react');
const ItemsSearchPage = require('../itemsSearch');
const ItemsPage = require('../item');
const {
    Switch,
    Route,
} = require('react-router-dom');


/**
 * React component for routing set the page destination inside app for client or server rendering
 * @return {JSX}
 */
const router = function ({ pageData }) {
    return (
        <Switch>
            <Route path="/items/:id">
                <ItemsPage pageData={pageData}/>
            </Route>
            <Route path="/items">
                <ItemsSearchPage pageData={pageData}/>
            </Route>
            <Route exact path="/">
                <h1>HOME</h1>
            </Route>
        </Switch>
    );
};

module.exports = router;
