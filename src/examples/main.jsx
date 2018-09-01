import React from 'react'
function Main() {
    return (
        <React.Fragment>
            <header className="d-flex flex-column flex-md-row align-items-md-center p-5 bg-light">
                <div className="pt-md-3 pb-md-4">
                    <h1 className="bd-title mt-0">Examples</h1>
                    <p className="bd-lead">Quickly get a project started with any of our examples ranging from using parts of the frameworkto custom components and layouts.</p>
                    <a href="https://github.com/twbs/bootstrap/archive/v4.1.3.zip" className="btn btn-lg btn-bd-primary" onClick={eval("ga('send', 'event', 'Examples', 'Hero', 'Download');")}>Download source code</a>
                </div>
                <script async src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom" id="_carbonads_js" />
            </header>
            <main className="bd-content p-5" id="content" role="main">
                <h2>Custom components</h2>
                <p>Brand new components and templates to help folks quickly get started with Bootstrap and demonstrate best practices for adding onto the framework.</p>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="album/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/album.png" alt="Album screenshot" width="960" height="600" />
                            <h5 className="mb-1">Album</h5>
                        </a>
                        <p className="text-muted">Simple one-page template for photo galleries, portfolios, and more.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="pricing/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/pricing.png" alt="Pricing screenshot" width="960" height="600" />
                            <h5 className="mb-1">Pricing</h5>
                        </a>
                        <p className="text-muted">Example pricing page built with Cards and featuring a custom header and footer.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="checkout/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/checkout.png" alt="Checkout screenshot" width="960" height="600" />
                            <h5 className="mb-1">Checkout</h5>
                        </a>
                        <p className="text-muted">Custom checkout form showing our form components and their validation features.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="product/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/product.png" alt="Product screenshot" width="960" height="600" />
                            <h5 className="mb-1">Product</h5>
                        </a>
                        <p className="text-muted">Lean product-focused marketing page with extensive grid and image work.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="cover/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/cover.png" alt="Cover screenshot" width="960" height="600" />
                            <h5 className="mb-1">Cover</h5>
                        </a>
                        <p className="text-muted">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="carousel/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/carousel.png" alt="Carousel screenshot" width="960" height="600" />
                            <h5 className="mb-1">Carousel</h5>
                        </a>
                        <p className="text-muted">Customize the navbar and carousel, then add some new components.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="blog/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/blog.png" alt="Blog screenshot" width="960" height="600" />
                            <h5 className="mb-1">Blog</h5>
                        </a>
                        <p className="text-muted">Magazine like blog template with header, navigation, featured content.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="dashboard/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/dashboard.png" alt="Dashboard screenshot" width="960" height="600" />
                            <h5 className="mb-1">Dashboard</h5>
                        </a>
                        <p className="text-muted">Basic admin dashboard shell with fixed sidebar and navbar.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="/sign-in/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/sign-in.png" alt="Sign-in screenshot" width="960" height="600" />
                            <h5 className="mb-1">Sign-in</h5>
                        </a>
                        <p className="text-muted">Custom form layout and design for a simple sign in form.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="sticky-footer/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/sticky-footer.png" alt="Sticky footer screenshot" width="960" height="600" />
                            <h5 className="mb-1">Sticky footer</h5>
                        </a>
                        <p className="text-muted">Attach a footer to the bottom of the viewport when page content is short.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="sticky-footer-navbar/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/sticky-footer-navbar.png" alt="Sticky footer navbar screenshot" width="960" height="600" />
                            <h5 className="mb-1">Sticky footer navbar</h5>
                        </a>
                        <p className="text-muted">Attach a footer to the bottom of the viewport with a fixed top navbar.</p>
                    </div>
                </div>
                <h2>Framework</h2>
                <p>Examples that focus on implementing uses of built-in components provided by Bootstrap.</p>

                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="starter-template/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/starter-template.png" alt="Starter template screenshot" width="960" height="600" />
                            <h5 className="mb-1">Starter template</h5>
                        </a>
                        <p className="text-muted">Nothing but the basics: compiled CSS and JavaScript.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="examples/grid/">
                            <img className="/img-thumbnail mb-3" src="/assets/img/screenshots/grid.png" alt="Grid screenshot" width="960" height="600" />
                            <h5 className="mb-1">Grid</h5>
                        </a>
                        <p className="text-muted">Multiple examples of grid layouts with all four tiers, nesting, and more.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="jumbotron/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/jumbotron.png" alt="Jumbotron screenshot" width="960" height="600" />
                            <h5 className="mb-1">Jumbotron</h5>
                        </a>
                        <p className="text-muted">Build around the jumbotron with a navbar and some basic grid columns.</p>
                    </div>
                </div>
                <h2>Navbars</h2>
                <p>Taking the default navbar component and showing how it can be moved, placed, and extended.</p>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="navbars/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/navbars.png" alt="Navbars screenshot" width="960" height="600" />
                            <h5 className="mb-1">Navbars</h5>
                        </a>
                        <p className="text-muted">Demonstration of all responsive and container options for the navbar.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="navbar-static/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/navbar-static.png" alt="Navbar static screenshot" width="960" height="600" />
                            <h5 className="mb-1">Navbar static</h5>
                        </a>
                        <p className="text-muted">Single navbar example of a static top navbar along with some additional content.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="navbar-fixed/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/navbar-fixed.png" alt="Navbar fixed screenshot" width="960" height="600" />
                            <h5 className="mb-1">Navbar fixed</h5>
                        </a>
                        <p className="text-muted">Single navbar example with a fixed top navbar along with some additional content.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="navbar-bottom/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/navbar-bottom.png" alt="Navbar bottom screenshot" width="960" height="600" />
                            <h5 className="mb-1">Navbar bottom</h5>
                        </a>
                        <p className="text-muted">Single navbar example with a bottom navbar along with some additional content.</p>
                    </div>
                </div>
                <p>Examples that focus on future-friendly features or techniques.</p>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="floating-labels/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/floating-labels.png" alt="Floating labels screenshot" width="960" height="600" />
                            <h5 className="mb-1">Floating labels</h5>
                        </a>
                        <p className="text-muted">Beautifully simple forms with floating labels over your inputs.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <a href="offcanvas/">
                            <img className="img-thumbnail mb-3" src="/assets/img/screenshots/offcanvas.png" alt="Offcanvas screenshot" width="960" height="600" />
                            <h5 className="mb-1">Offcanvas</h5>
                        </a>
                        <p className="text-muted">Turn your expandable navbar into a sliding offcanvas menu.</p>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
export default Main;
