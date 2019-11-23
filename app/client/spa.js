/**
 * Client Module for spa
 * @module
 */

const React = require('react');
const ReactDOM = require('react-dom');
const View = require('../pages/spa/view');
const { BrowserRouter } = require('react-router-dom');

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
    <BrowserRouter>
        <View {...preloadedState} />
    </BrowserRouter>,
    document.getElementById('root-app'),
);
