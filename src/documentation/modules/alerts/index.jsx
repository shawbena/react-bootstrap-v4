import React from "react";
import PropTypes from "prop-types";
import Alert, { AlertLink, AlertHeading } from "../../../components/alert";
import * as Snippets from './code_snippets'
// import 'src/scss_content.scss'

class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDismissAlert: true
        };
    }
    dismissAlert = () => {
        this.setState({ showDismissAlert: false })
    }
    componentDidMount() {
        // Prism.highlightAll();
    }
  render() {
    return (
      <main
        className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
        role="main"
      >
        <h1 className="bd-title" id="content">
          Alerts
        </h1>
        <p className="bd-lead">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <script
          async
          src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom"
          id="_carbonads_js"
        />

        <h2 id="examples">Examples</h2>

        <p>
          Alerts are available for any length of text, as well as an optional
          dismiss button. For proper styling, use one of the eight{" "}
          <strong>required</strong> contextual classes (e.g.,{" "}
          <code className="highlighter-rouge">.alert-success</code>
          ). For inline dismissal, use the{" "}
          <a href="#dismissing">alerts jQuery plugin</a>.
        </p>

        <div className="bd-example">
          <Alert variant="primary">A simple primary alert—check it out!</Alert>
          <Alert variant="secondary">
            A simple primary alert—check it out!
          </Alert>
          <Alert variant="success">A simple primary alert—check it out!</Alert>
          <Alert variant="danger">A simple primary alert—check it out!</Alert>
          <Alert variant="warning">A simple primary alert—check it out!</Alert>
          <Alert variant="success">A simple primary alert—check it out!</Alert>
          <Alert variant="info">A simple primary alert—check it out!</Alert>
          <Alert variant="light">A simple primary alert—check it out!</Alert>
          <Alert variant="dark">A simple primary alert—check it out!</Alert>
        </div>
        <figure className="highlight">
          <pre>
            <code
              className="language-html"
              data-manual
              data-lang="html"
              dangerouslySetInnerHTML={{
                __html: Snippets.BasicCodeSinppet
              }}
            />
          </pre>
        </figure>

        <div className="bd-callout bd-callout-warning">
          <h5 id="conveying-meaning-to-assistive-technologies">
            Conveying meaning to assistive technologies
          </h5>

          <p>
            Using color to add meaning only provides a visual indication, which
            will not be conveyed to users of assistive technologies – such as
            screen readers. Ensure that information denoted by the color is
            either obvious from the content itself (e.g. the visible text), or
            is included through alternative means, such as additional text
            hidden with the <code className="highlighter-rouge">.sr-only</code>{" "}
            class.
          </p>
        </div>

        <h3 id="link-color">Link color</h3>

        <p>
          Use the <code className="highlighter-rouge">.alert-link</code> utility
          class to quickly provide matching colored links within any alert.
        </p>

        <div className="bd-example">
            <Alert variant="primary">
                A simple primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="secondary">
                A simple secondary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="success">
                A simple success alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="danger">
                A simple danger alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="warning">
                A simple warning alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="info">
                A simple primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="light">
                A simple light alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="dark">
                A simple dark alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
                __html: Snippets.LinkColorsCodeSnippet
            }} />
          </pre>
        </figure>

        <h3 id="additional-content">Additional content</h3>

        <p>
          Alerts can also contain additional HTML elements like headings,
          paragraphs and dividers.
        </p>

        <div className="bd-example">
          <Alert variant="success">
              <AlertHeading>Well done!</AlertHeading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
                __html: Snippets.AdditionalContentCodeSnippet
            }} />
          </pre>
        </figure>

        <h3 id="dismissing">Dismissing</h3>

        <p>
          Using the alert JavaScript plugin, it’s possible to dismiss any alert
          inline. Here’s how:
        </p>

        <ul>
          <li>
            Be sure you’ve loaded the alert plugin, or the compiled Bootstrap
            JavaScript.
          </li>
          <li>
            If you’re building our JavaScript from source, it{" "}
            <a href="/docs/4.1/getting-started/javascript/#util">
              requires <code className="highlighter-rouge">util.js</code>
            </a>
            . The compiled version includes this.
          </li>
          <li>
            Add a dismiss button and the{" "}
            <code className="highlighter-rouge">.alert-dismissible</code> class,
            which adds extra padding to the right of the alert and positions the{" "}
            <code className="highlighter-rouge">.close</code> button.
          </li>
          <li>
            On the dismiss button, add the{" "}
            <code className="highlighter-rouge">data-dismiss="alert"</code>{" "}
            attribute, which triggers the JavaScript functionality. Be sure to
            use the <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
            element with it for proper behavior across all devices.
          </li>
          <li>
            To animate alerts when dismissing them, be sure to add the{" "}
            <code className="highlighter-rouge">.fade</code> and{" "}
            <code className="highlighter-rouge">.show</code> classes.
          </li>
        </ul>

        <p>You can see this in action with a live demo:</p>

        <div className="bd-example">
          <Alert variant="warning" dismissible show={this.state.showDismissAlert}>
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={this.dismissAlert}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Alert>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-jsx" data-lang="jsx" dangerouslySetInnerHTML={{
                __html: Snippets.DissmissingCodeSnippet
            }} />
          </pre>
        </figure>

        <h2 id="javascript-behavior">JavaScript behavior</h2>

        <h3 id="triggers">Triggers</h3>

        <p>Enable dismissal of an alert via JavaScript:</p>

        <figure className="highlight">
          <pre>
            <code className="language-js" data-lang="js">
              <span className="nx">$</span>
              <span className="p">(</span>
              <span className="s1">'.alert'</span>
              <span className="p">).</span>
              <span className="nx">alert</span>
              <span className="p">()</span>
            </code>
          </pre>
        </figure>

        <p>
          Or with <code className="highlighter-rouge">data</code> attributes on
          a button <strong>within the alert</strong>, as demonstrated above:
        </p>

        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;button</span>{" "}
              <span className="na">type=</span>
              <span className="s">"button"</span>{" "}
              <span className="na">class=</span>
              <span className="s">"close"</span>{" "}
              <span className="na">data-dismiss=</span>
              <span className="s">"alert"</span>{" "}
              <span className="na">aria-label=</span>
              <span className="s">"Close"</span>
              <span className="nt">&gt;</span>
              <span className="nt">&lt;span</span>{" "}
              <span className="na">aria-hidden=</span>
              <span className="s">"true"</span>
              <span className="nt">&gt;</span>
              <span className="ni">&amp;times;</span>
              <span className="nt">&lt;/span&gt;</span>
              <span className="nt">&lt;/button&gt;</span>
            </code>
          </pre>
        </figure>

        <p>Note that closing an alert will remove it from the DOM.</p>

        <h3 id="methods">Methods</h3>

        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="highlighter-rouge">$().alert()</code>
              </td>
              <td>
                Makes an alert listen for click events on descendant elements
                which have the{" "}
                <code className="highlighter-rouge">data-dismiss="alert"</code>{" "}
                attribute. (Not necessary when using the data-api’s
                auto-initialization.)
              </td>
            </tr>
            <tr>
              <td>
                <code className="highlighter-rouge">$().alert('close')</code>
              </td>
              <td>
                Closes an alert by removing it from the DOM. If the{" "}
                <code className="highlighter-rouge">.fade</code> and{" "}
                <code className="highlighter-rouge">.show</code> classes are
                present on the element, the alert will fade out before it is
                removed.
              </td>
            </tr>
            <tr>
              <td>
                <code className="highlighter-rouge">$().alert('dispose')</code>
              </td>
              <td>Destroys an element’s alert.</td>
            </tr>
          </tbody>
        </table>

        <figure className="highlight">
          <pre>
            <code className="language-js" data-lang="js" dangerouslySetInnerHTML={{
                __html: Snippets.CallScript
            }} />
          </pre>
        </figure>

        <h3 id="events">Events</h3>

        <p>
          Bootstrap’s alert plugin exposes a few events for hooking into alert
          functionality.
        </p>

        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="highlighter-rouge">close.bs.alert</code>
              </td>
              <td>
                This event fires immediately when the <code>close</code>{" "}
                instance method is called.
              </td>
            </tr>
            <tr>
              <td>
                <code className="highlighter-rouge">closed.bs.alert</code>
              </td>
              <td>
                This event is fired when the alert has been closed (will wait
                for CSS transitions to complete).
              </td>
            </tr>
          </tbody>
        </table>

        <figure className="highlight">
          <pre>
            <code className="language-js" data-lang="js" dangerouslySetInnerHTML={{
                __html: Snippets.CallScriptEvent
            }} />
          </pre>
        </figure>
      </main>
    );
  }
}

export default Alerts;
