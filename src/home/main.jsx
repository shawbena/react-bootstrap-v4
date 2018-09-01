import React from 'react'

export default function Main() {
    return (
        <main className="bd-masthead" id="content" role="main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 mx-auto col-md-6 order-md-2">
                        <img className="img-fluid mb-3 mb-md-0" src="/assets/img/bootstrap-stack.png" alt="" width="1024" height="860" />
                    </div>
                    <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                        <h1 className="mb-3 bd-text-purple-bright">Bootstrap</h1>
                        <p className="lead">
                            Build responsive, mobile-first projects on the web with the world's most popular front-end component library.
                    </p>
                        <p className="lead mb-4">
                            Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
                    </p>
                        <div className="d-flex flex-column flex-md-row lead mb-3">
                            <a href="/docs/4.1/getting-started/introduction/" className="btn btn-lg btn-bd-primary mb-3 mb-md-0 mr-md-3" onClick={eval("ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');")}>Get started</a>
                            <a href="/docs/4.1/getting-started/download/" className="btn btn-lg btn-outline-secondary" onClick={eval("ga('send', 'event', 'Jumbotron actions', 'Download', 'Download 4.1.3');")}>Download</a>
                        </div>
                        <p className="text-muted mb-0">
                            Currently v4.1.3
                    </p>
                    </div>
                </div>
                <script async src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom" id="_carbonads_js" />

            </div>
        </main>
    )
}
