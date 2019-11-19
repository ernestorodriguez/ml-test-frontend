/**
 * Client Module for spa
 * @module
 */

const React = require('react');
const ReactDOM = require('react-dom');
const View = require('../pages/spa/view');
const { BrowserRouter } = require('react-router-dom');

ReactDOM.hydrate(
    <BrowserRouter>
        <View/>
    </BrowserRouter>,
    document.getElementById('root-app'),
);
