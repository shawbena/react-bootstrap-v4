import React from 'react'

const BOOTSTRAP_TREE = `
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   └── bootstrap.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
`
const BOOTSTRAP_SRC_TREE = `
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── docs/
│   └── examples/
├── js/
└── scss/
`
export default function Content() {
    return (
        <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
            <h1 className="bd-title" id="content">Contents</h1>
            <p className="bd-lead">Discover what’s included in Bootstrap, including our precompiled and source code flavors. Remember, Bootstrap’s JavaScript plugins require jQuery.</p>
            <script async src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom" id="_carbonads_js" />

            <h2 id="precompiled-bootstrap">Precompiled Bootstrap</h2>

            <p>Once downloaded, unzip the compressed folder and you’ll see something like this:</p>

            {/* <!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. /--> */}

            <figure className="highlight">
                <pre>
                    <code className="language-plaintext" data-lang="plaintext">
                        {BOOTSTRAP_TREE}
                    </code>
                </pre>
            </figure>

            <p>This is the most basic form of Bootstrap: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (<code className="highlighter-rouge">bootstrap.*</code>), as well as compiled and minified CSS and JS (<code className="highlighter-rouge">bootstrap.min.*</code>). <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps">source maps</a> (<code className="highlighter-rouge">bootstrap.*.map</code>) are available for use with certain browsers’ developer tools. Bundled JS files (<code className="highlighter-rouge">bootstrap.bundle.js</code> and minified <code className="highlighter-rouge">bootstrap.bundle.min.js</code>) include <a href="https://popper.js.org/">Popper</a>, but not <a href="https://jquery.com/">jQuery</a>.</p>

            <h2 id="css-files">CSS files</h2>

            <p>Bootstrap includes a handful of options for including some or all of our compiled CSS.</p>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">CSS files</th>
                        <th scope="col">Layout</th>
                        <th scope="col">Content</th>
                        <th scope="col">Components</th>
                        <th scope="col">Utilities</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div><code className="font-weight-normal text-nowrap">bootstrap.css</code></div>
                            <div><code className="font-weight-normal text-nowrap">bootstrap.min.css</code></div>
                        </th>
                        <td className="text-success">Included</td>
                        <td className="text-success">Included</td>
                        <td className="text-success">Included</td>
                        <td className="text-success">Included</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div><code className="font-weight-normal text-nowrap">bootstrap-grid.css</code></div>
                            <div><code className="font-weight-normal text-nowrap">bootstrap-grid.min.css</code></div>
                        </th>
                        <td><a className="text-warning" href="/docs/4.1/layout/grid/">Only grid system</a></td>
                        <td className="bg-light text-muted">Not included</td>
                        <td className="bg-light text-muted">Not included</td>
                        <td><a className="text-warning" href="/docs/4.1/utilities/flex/">Only flex utilities</a></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div><code className="font-weight-normal text-nowrap">bootstrap-reboot.css</code></div>
                            <div><code className="font-weight-normal text-nowrap">bootstrap-reboot.min.css</code></div>
                        </th>
                        <td className="bg-light text-muted">Not included</td>
                        <td><a className="text-warning" href="/docs/4.1/content/reboot/">Only Reboot</a></td>
                        <td className="bg-light text-muted">Not included</td>
                        <td className="bg-light text-muted">Not included</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="js-files">JS files</h2>

            <p>Similarly, we have options for including some or all of our compiled JavaScript.</p>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">JS files</th>
                        <th scope="col">Popper</th>
                        <th scope="col">jQuery</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div><code className="font-weight-normal text-nowrap">bootstrap.bundle.js</code></div>
                            <div><code className="font-weight-normal text-nowrap">bootstrap.bundle.min.js</code></div>
                        </th>
                        <td className="text-success">Included</td>
                        <td className="bg-light text-muted">Not included</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div><code className="font-weight-normal text-nowrap">bootstrap.js</code></div>
                            <div><code className="font-weight-normal text-nowrap">bootstrap.min.js</code></div>
                        </th>
                        <td className="bg-light text-muted">Not included</td>
                        <td className="bg-light text-muted">Not included</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="bootstrap-source-code">Bootstrap source code</h2>

            <p>The Bootstrap source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:</p>

            <figure className="highlight">
                <pre>
                    <code className="language-plaintext" data-lang="plaintext">{BOOTSTRAP_SRC_TREE}</code>
                </pre>
            </figure>

            <p>The <code className="highlighter-rouge">scss/</code> and <code className="highlighter-rouge">js/</code> are the source code for our CSS and JavaScript. The <code className="highlighter-rouge">dist/</code> folder includes everything listed in the precompiled download section above. The <code className="highlighter-rouge">docs/</code> folder includes the source code for our documentation, and <code className="highlighter-rouge">examples/</code> of Bootstrap usage. Beyond that, any other included file provides support for packages, license information, and development.</p>

        </main>
    )
}

