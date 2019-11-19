const React = require('react');
const View = require('./view');
const Layout = require('../../components/layout');

const { StaticRouter } = require('react-router');

/**
 * Spa controller for server, return layout and current page to express app
 * @param url
 * @module
 */
const controller = ({url}) => (
    <Layout>
        <StaticRouter location={url} context={{}}>
            <View />
        </StaticRouter>
    </Layout>
);

module.exports = controller;
