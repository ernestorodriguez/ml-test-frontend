const React = require('react');

const Layout = (props) => {
    const {
        children,
        title
    } = props;

    return (
        <React.Fragment>
            <html className="no-js" lang="">
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
                    <main id={'root-app'}>
                        {children}
                    </main>
                </body>
            </html>
        </React.Fragment>);
};

module.exports = Layout;
