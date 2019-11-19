const React = require('react');
const {
    Switch,
    Route,
} = require('react-router-dom');

/**
 * React component for routing set the page destination inside app for client or server rendering
 * @return {JSX}
 */
const router = function () {
    return (
        <Switch>
            <Route path="/items/:id">
                <h1>ITEM DESCRIPTION</h1>
            </Route>
            <Route path="/items">
                <h1>SEARCH RESULT</h1>
            </Route>
            <Route exact path="/">
                <h1>HOME</h1>
            </Route>
        </Switch>
    );
};

module.exports = router;
