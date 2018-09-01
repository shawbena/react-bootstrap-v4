import React from 'react'

export default function Main() {
    return (
        <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
            <h1 className="bd-title" id="content">Introduction</h1>
            <p className="bd-lead">Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.</p>
            <script async src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom" id="_carbonads_js" />

            <h2 id="quick-start">Quick start</h2>

            <p>Looking to quickly add Bootstrap to your project? Use BootstrapCDN, provided for free by the folks at StackPath. Using a package manager or need to download the source files? <a href="/docs/4.1/getting-started/download/">Head to the downloads page.</a></p>

            <h3 id="css">CSS</h3>

            <p>Copy-paste the stylesheet <code className="highlighter-rouge">&lt;link&gt;</code> into your <code className="highlighter-rouge">&lt;head&gt;</code> before all other stylesheets to load our CSS.</p>

            <figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"stylesheet"</span> <span className="na">href=</span><span className="s">"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"</span> <span className="na">integrity=</span><span className="s">"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;</span></code></pre></figure>

            <h3 id="js">JS</h3>

            <p>Many of our components require the use of JavaScript to function. Specifically, they require <a href="https://jquery.com">jQuery</a>, <a href="https://popper.js.org/">Popper.js</a>, and our own JavaScript plugins. Place the following <code className="highlighter-rouge">&lt;script&gt;</code>s near the end of your pages, right before the closing <code className="highlighter-rouge">&lt;/body&gt;</code> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.</p>

            <p>We use <a href="https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/">jQuery’s slim build</a>, but the full version is also supported.</p>

            <figure className="highlight">
                <pre>
                    <code className="language-html" data-lang="html"><span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://code.jquery.com/jquery-3.3.1.slim.min.js"</span> <span className="na">integrity=</span><span className="s">"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;&lt;/script&gt;</span>
                        <span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"</span> <span className="na">integrity=</span><span className="s">"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;&lt;/script&gt;</span>
                        <span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"</span> <span className="na">integrity=</span><span className="s">"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;&lt;/script&gt;</span>
                    </code>
                </pre>
            </figure>

            <p>Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p>

            <p>Our <code className="highlighter-rouge">bootstrap.bundle.js</code> and <code className="highlighter-rouge">bootstrap.bundle.min.js</code> include <a href="https://popper.js.org/">Popper</a>, but not <a href="https://jquery.com/">jQuery</a>. For more information about what’s included in Bootstrap, please see our <a href="/docs/4.1/getting-started/contents/#precompiled-bootstrap">contents</a> section.</p>

            <details>
                <summary className="text-primary mb-3">Show components requiring JavaScript</summary>
                <ul>
                    <li>Alerts for dismissing</li>
                    <li>Buttons for toggling states and checkbox/radio functionality</li>
                    <li>Carousel for all slide behaviors, controls, and indicators</li>
                    <li>Collapse for toggling visibility of content</li>
                    <li>Dropdowns for displaying and positioning (also requires <a href="https://popper.js.org/">Popper.js</a>)</li>
                    <li>Modals for displaying, positioning, and scroll behavior</li>
                    <li>Navbar for extending our Collapse plugin to implement responsive behavior</li>
                    <li>Tooltips and popovers for displaying and positioning (also requires <a href="https://popper.js.org/">Popper.js</a>)</li>
                    <li>Scrollspy for scroll behavior and navigation updates</li>
                </ul>
            </details>

            <h2 id="starter-template">Starter template</h2>

            <p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>

            <figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="cp">&lt;!doctype html&gt;</span>
                <span className="nt">&lt;html</span> <span className="na">lang=</span><span className="s">"en"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;head&gt;</span>
                <span className="c">&lt;!-- Required meta tags --&gt;</span>
                <span className="nt">&lt;meta</span> <span className="na">charset=</span><span className="s">"utf-8"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"viewport"</span> <span className="na">content=</span><span className="s">"width=device-width, initial-scale=1, shrink-to-fit=no"</span><span className="nt">&gt;</span>

                <span className="c">&lt;!-- Bootstrap CSS --&gt;</span>
                <span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"stylesheet"</span> <span className="na">href=</span><span className="s">"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"</span> <span className="na">integrity=</span><span className="s">"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;</span>

                <span className="nt">&lt;title&gt;</span>Hello, world!<span className="nt">&lt;/title&gt;</span>
                <span className="nt">&lt;/head&gt;</span>
                <span className="nt">&lt;body&gt;</span>
                <span className="nt">&lt;h1&gt;</span>Hello, world!<span className="nt">&lt;/h1&gt;</span>

                <span className="c">&lt;!-- Optional JavaScript --&gt;</span>
                <span className="c">&lt;!-- jQuery first, then Popper.js, then Bootstrap JS --&gt;</span>
                <span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://code.jquery.com/jquery-3.3.1.slim.min.js"</span> <span className="na">integrity=</span><span className="s">"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;&lt;/script&gt;</span>
                <span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"</span> <span className="na">integrity=</span><span className="s">"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;&lt;/script&gt;</span>
                <span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"</span> <span className="na">integrity=</span><span className="s">"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"</span> <span className="na">crossorigin=</span><span className="s">"anonymous"</span><span className="nt">&gt;&lt;/script&gt;</span>
                <span className="nt">&lt;/body&gt;</span>
                <span className="nt">&lt;/html&gt;</span></code></pre>
            </figure>

            <p>That’s all you need for overall page requirements. Visit the <a href="/docs/4.1/layout/overview/">Layout docs</a> or <a href="/docs/4.1/examples/">our official examples</a> to start laying out your site’s content and components.</p>

            <h2 id="important-globals">Important globals</h2>

            <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the <em>normalization</em> of cross browser styles. Let’s dive in.</p>

            <h3 id="html5-doctype">HTML5 doctype</h3>

            <p>Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky incomplete styling, but including it shouldn’t cause any considerable hiccups.</p>

            <figure className="highlight">
                <pre><code className="language-html" data-lang="html"><span className="cp">&lt;!doctype html&gt;</span>
                    <span className="nt">&lt;html</span> <span className="na">lang=</span><span className="s">"en"</span><span className="nt">&gt;</span>
                    ...
                    <span className="nt">&lt;/html&gt;</span></code></pre>
            </figure>
            <h3 id="responsive-meta-tag">Responsive meta tag</h3>
            <p>Bootstrap is developed <em>mobile first</em>, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, <strong>add the responsive viewport meta tag</strong> to your <code className="highlighter-rouge">&lt;head&gt;</code>.</p>

            <figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"viewport"</span> <span className="na">content=</span><span className="s">"width=device-width, initial-scale=1, shrink-to-fit=no"</span><span className="nt">&gt;</span></code></pre></figure>

            <p>You can see an example of this in action in the <a href="#starter-template">starter template</a>.</p>

            <h3 id="box-sizing">Box-sizing</h3>

            <p>For more straightforward sizing in CSS, we switch the global <code className="highlighter-rouge">box-sizing</code> value from <code className="highlighter-rouge">content-box</code> to <code className="highlighter-rouge">border-box</code>. This ensures <code className="highlighter-rouge">padding</code> does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.</p>

            <p>On the rare occasion you need to override it, use something like the following:</p>

            <figure className="highlight">
                <pre>
                    <code className="language-css" data-lang="css">
                        <span className="nc">.selector-for-some-widget </span>
                        <span className="p">{"{"}</span><br />
                        <span className="nl">  box-sizing</span>
                        <span className="p">: </span>
                        <span className="n">content-box</span>
                        <span className="p">;</span><br />
                        <span className="p">{"}"}</span>
                    </code>
                </pre>
            </figure>

            <p>With the above snippet, nested elements—including generated content via <code className="highlighter-rouge">::before</code> and <code className="highlighter-rouge">::after</code>—will all inherit the specified <code className="highlighter-rouge">box-sizing</code> for that <code className="highlighter-rouge">.selector-for-some-widget</code>.</p>

            <p>Learn more about <a href="https://css-tricks.com/box-sizing/">box model and sizing at CSS Tricks</a>.</p>

            <h3 id="reboot">Reboot</h3>

            <p>For improved cross-browser rendering, we use <a href="/docs/4.1/content/reboot/">Reboot</a> to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.</p>

            <h2 id="community">Community</h2>

            <p>Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.</p>

            <ul>
                <li>Follow <a href="https://twitter.com/getbootstrap">@getbootstrap on Twitter</a>.</li>
                <li>Read and subscribe to <a href="https://blog.getbootstrap.com">The Official Bootstrap Blog</a>.</li>
                <li>Join <a href="https://bootstrap-slack.herokuapp.com">the official Slack room</a>.</li>
                <li>Chat with fellow Bootstrappers in IRC. On the <code className="highlighter-rouge">irc.freenode.net</code> server, in the <code className="highlighter-rouge">##bootstrap</code> channel.</li>
                <li>Implementation help may be found at Stack Overflow (tagged <a href="https://stackoverflow.com/questions/tagged/bootstrap-4"><code className="highlighter-rouge">bootstrap-4</code></a>).</li>
                <li>Developers should use the keyword <code className="highlighter-rouge">bootstrap</code> on packages which modify or add to the functionality of Bootstrap when distributing through <a href="https://www.npmjs.com/browse/keyword/bootstrap">npm</a> or similar delivery mechanisms for maximum discoverability.</li>
            </ul>

            <p>You can also follow <a href="https://twitter.com/getbootstrap">@getbootstrap on Twitter</a> for the latest gossip and awesome music videos.</p>

        </main>
    )
}
