const React = require('react');
const { Fragment } = require('react');
const Router = require('./router');

/**
 * templage for page, set scripts and common components for pages
 * return {JSX}
 */
const page = (props) => (
    <Fragment>
        <Router {...props} />
        <script src={'/spa.js'} />
    </Fragment>
);

module.exports = page;
