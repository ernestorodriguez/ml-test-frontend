const React = require('react');
const serialize = require('serialize-javascript');
const Layout = (props) => {
    const {
        children,
        title,
        pageData
    } = props;

    return (
        <React.Fragment>
            <head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#fafafa" />
            </head>
            <body>
                <div dangerouslySetInnerHTML={{__html: `
                <!--[if IE]>
                    <p class="browserupgrade">
                        You are using an <strong>outdated</strong> browser.
                        Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.
                    </p>
                <![endif]-->`}} />
                <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__ =  ${serialize({pageData, title})};`}} />
                <main id={'root-app'}>
                    {children}
                </main>
            </body>
        </React.Fragment>);
};

module.exports = Layout;
