const BasicCodeSinppet = Prism.highlight(
`<Alert variant="primary">
    A simple primary alert—check it out!
</Alert>
<Alert variant="secondary">
    A simple primary alert—check it out!
</Alert>
<Alert variant="success">
    A simple primary alert—check it out!
</Alert>
<Alert variant="danger">
    A simple primary alert—check it out!
</Alert>
<Alert variant="warning">
    A simple primary alert—check it out!
</Alert>
<Alert variant="success">
    A simple primary alert—check it out!
</Alert>
<Alert variant="info">
    A simple primary alert—check it out!
</Alert>
<Alert variant="light">
    A simple primary alert—check it out!
</Alert>
<Alert variant="dark">
    A simple primary alert—check it out!
</Alert>
`, Prism.languages.jsx, 'jsx');

const LinkColorsCodeSnippet = Prism.highlight(
`<Alert variant="primary">
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
`, Prism.languages.jsx, 'jsx');

const AdditionalContentCodeSnippet = Prism.highlight(
`<Alert variant="success">
    <AlertHeading>Well done!</AlertHeading>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr />
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</Alert>`, Prism.languages.markup, 'markup');

const DissmissingCodeSnippet = Prism.highlight(
`// ...
dismissAlert = () => {
    this.setState({ showDismissAlert: false })
}
// ...
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
// ...
`, Prism.languages.jsx, 'jsx');
const CallScript = Prism.highlight(
`$(".alert").alert('close')
`, Prism.languages.javascript, 'javascript')
const CallScriptEvent = Prism.highlight(
`$('#myAlert').on('closed.bs.alert', function () {
    // do something…
})
`, Prism.languages.javascript, 'javascript')
export {
    BasicCodeSinppet,
    LinkColorsCodeSnippet,
    AdditionalContentCodeSnippet,
    DissmissingCodeSnippet,
    CallScript,
    CallScriptEvent
};
