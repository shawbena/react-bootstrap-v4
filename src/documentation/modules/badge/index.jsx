import React from "react";
import PropTypes from "prop-types";
import Badge from '../../../components/badge'
import { BasicBadges, AsPart, AddSrcOnly, Badge_WithPill, Link_Badges, Badge_Variants } from './code_snippets'

class BadgeDemos extends React.Component {
  render() {
    return (
      <main
        className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
        role="main"
      >
        <h1 className="bd-title" id="content">
          Badges
        </h1>
        <p className="bd-lead">
          Documentation and examples for badges, our small count and labeling
          component.
        </p>
        <script
          async
          src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom"
          id="_carbonads_js"
        />

        <h2 id="example">Example</h2>

        <p>
          Badges scale to match the size of the immediate parent element by
          using relative font sizing and{" "}
          <code className="highlighter-rouge">em</code> units.
        </p>

        <div className="bd-example">
          <div className="h1">
            Example heading <Badge color="secondary">New</Badge>
          </div>
          <div className="h2">
            Example heading <Badge color="secondary">New</Badge>
          </div>
          <div className="h3">
            Example heading <Badge color="secondary">New</Badge>
          </div>
          <div className="h4">
            Example heading <Badge color="secondary">New</Badge>
          </div>
          <div className="h5">
            Example heading <Badge color="secondary">New</Badge>
          </div>
          <div className="h6">
            Example heading <Badge color="secondary">New</Badge>
          </div>
        </div>

        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
              __html: BasicBadges
            }} />
          </pre>
        </figure>

        <p>
          Badges can be used as part of links or buttons to provide a counter.
        </p>

        <div className="bd-example">
          <button type="button" className="btn btn-primary">
            Notifications <Badge color="light">4</Badge>
          </button>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
              __html: AsPart
            }} />
          </pre>
        </figure>

        <p>
          Note that depending on how they are used, badges may be confusing for
          users of screen readers and similar assistive technologies. While the
          styling of badges provides a visual cue as to their purpose, these
          users will simply be presented with the content of the badge.
          Depending on the specific situation, these badges may seem like random
          additional words or numbers at the end of a sentence, link, or button.
        </p>

        <p>
          Unless the context is clear (as with the “Notifications” example,
          where it is understood that the “4” is the number of notifications),
          consider including additional context with a visually hidden piece of
          additional text.
        </p>

        <div className="bd-example">
          <button type="button" className="btn btn-primary">
            Profile <Badge color="light">9</Badge>
            <span className="sr-only">unread messages</span>
          </button>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
              __html: AddSrcOnly
            }} />
          </pre>
        </figure>

        <h2 id="contextual-variations">Contextual variations</h2>

        <p>
          Add any of the below mentioned modifier classes to change the
          appearance of a badge.
        </p>

        <div className="bd-example">
          <Badge color="primary">Primary</Badge>{" "}
          <Badge color="secondary">Secondary</Badge>{" "}
          <Badge color="success">Success</Badge>{" "}
          <Badge color="danger">Danger</Badge>{" "}
          <Badge color="warning">Warning</Badge>{" "}
          <Badge color="info">Info</Badge>{" "}
          <Badge color="light">Light</Badge>{" "}
          <Badge color="dark">Dark</Badge>{" "}
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
              __html: Badge_Variants
            }} />
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

        <h2 id="pill-badges">Pill badges</h2>

        <p>
          Use the <code className="highlighter-rouge">.badge-pill</code> modifier
          class to make badges more rounded (with a larger{" "}
          <code className="highlighter-rouge">border-radius</code> and additional
          horizontal <code className="highlighter-rouge">padding</code>
          ). Useful if you miss the badges from v3.
        </p>

        <div className="bd-example">
          <Badge color="primary" pill>Primary</Badge>{" "}
          <Badge color="secondary" pill>Secondary</Badge>{" "}
          <Badge color="success" pill>Success</Badge>{" "}
          <Badge color="danger" pill>Danger</Badge>{" "}
          <Badge color="warning" pill>Warning</Badge>{" "}
          <Badge color="info" pill>Info</Badge>{" "}
          <Badge color="light" pill>Light</Badge>{" "}
          <Badge color="dark" pill>Dark</Badge>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
              __html: Badge_WithPill
            }} />
          </pre>
        </figure>

        <h2 id="links">Links</h2>

        <p>
          Using the contextual <code className="highlighter-rouge">.badge-*</code>{" "}
          classes on an <code className="highlighter-rouge">&lt;a&gt;</code> element
          quickly provide <em>actionable</em> badges with hover and focus
          states.
        </p>

        <div className="bd-example">
          <Badge color="primary" component="a" href="#">Primary</Badge>{" "}
          <Badge color="secondary" component="a" href="#">Secondary</Badge>{" "}
          <Badge color="success" component="a" href="#">Success</Badge>{" "}
          <Badge color="danger" component="a" href="#">Danger</Badge>{" "}
          <Badge color="warning" component="a" href="#">Warning</Badge>{" "}
          <Badge color="info" component="a" href="#">Info</Badge>{" "}
          <Badge color="light" component="a" href="#">Light</Badge>{" "}
          <Badge color="dark" component="a" href="#">Dark</Badge>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html" data-manual dangerouslySetInnerHTML={{
              __html: Link_Badges
            }} />
          </pre>
        </figure>
      </main>
    );
  }
}

export default BadgeDemos;
