const React = require('react');
const View = require('./view');
const Layout = require('../../components/layout');

const { StaticRouter } = require('react-router');

/**
 * Spa controller for server, return layout and current page to express app
 * @param url
 * @module
 */
const controller = ({url, pageData}) => (
    <Layout pageData={pageData} title={'ML'}>
        <StaticRouter location={url} context={{}}>
            <View pageData={pageData}/>
        </StaticRouter>
    </Layout>
);

module.exports = controller;
