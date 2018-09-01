const BasicBadges = Prism.highlight(
`<div className="h1">
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
</div>`, Prism.languages.jsx, 'jsx');

const AsPart = Prism.highlight(
` <button type="button" className="btn btn-primary">
    Notifications <Badge color="blight">4</Badge>
</button>`, Prism.languages.jsx, 'jsx');
const AddSrcOnly = Prism.highlight(
`<button type="button" className="btn btn-primary">
    Profile <Badge color="light">9</Badge> <span className="sr-only">unread messages</span>
</button>`
, Prism.languages.jsx, 'jsx');

const Badge_Variants = Prism.highlight(
`<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>
<Badge color="light">Light</Badge>
<Badge color="dark">Dark</Badge>`
, Prism.languages.jsx, 'jsx')

const Badge_WithPill = Prism.highlight(
`<Badge color="primary" pill>Primary</Badge>
<Badge color="secondary" pill>Secondary</Badge>
<Badge color="success" pill>Success</Badge>
<Badge color="danger" pill>Danger</Badge>
<Badge color="warning" pill>Warning</Badge>
<Badge color="info" pill>Info</Badge>
<Badge color="light" pill>Light</Badge>
<Badge color="dark" pill>Dark</Badge>`
, Prism.languages.jsx, 'jsx')

const Link_Badges = Prism.highlight(
`<Badge color="primary" component="a" href="#">Primary</Badge>
<Badge color="secondary" component="a" href="#">Secondary</Badge>
<Badge color="success" component="a" href="#">Success</Badge>
<Badge color="danger" component="a" href="#">Danger</Badge>
<Badge color="warning" component="a" href="#">Warning</Badge>
<Badge color="info" component="a" href="#">Info</Badge>
<Badge color="light" component="a" href="#">Light</Badge>
<Badge color="dark" component="a" href="#">Dark</Badge>`
, Prism.languages.jsx, 'jsx') 

export {
    BasicBadges,
    AsPart,
    AddSrcOnly,
    Badge_Variants,
    Badge_WithPill,
    Link_Badges
}
