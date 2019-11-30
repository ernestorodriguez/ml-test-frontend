const React = require('react');
const { Fragment } = require('react');
const {
    Switch,
    Route,
} = require('react-router-dom');
const ItemsSearchPage = require('../itemsSearch');
const ItemsPage = require('../itemDetail');
const Header = require('../../components/header');

/**
 * React component for routing set the page destination inside app for client or server rendering
 * @return {JSX}
 */
const router = ({ pageData }) => (
    <Fragment>
        <Header/>
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
    </Fragment>
);

module.exports = router;
