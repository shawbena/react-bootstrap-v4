import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom'
import AsyncComponent from './components/async-component'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ScrollToTop from './components/scroll-to-top'
import Header from './components/header'
// import Examples from './examples'
import Skippy from './components/skippy'

import "./styles/css/bootstrap.css";
import "./styles/style.scss"
import "./app.scss";
import './scss/animation.scss'
// import './animations/fade.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Carnitas: null,
            curMenu: {}
        };
    }
    componentDidMount() {
        console.log(this.props.theme);
    }
    render() {
        // const { classes, } = this.props;
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <React.Fragment>
                        <Header />
                        <Skippy />
                        <Route path="/" exact strict render={(props) => <AsyncComponent home {...props} loader={() => import(/* webpackChunkName: "home"*/'./home')} />} />
                        <Route path="/examples" render={(props) => <AsyncComponent examples {...props} loader={() => import(/* webpackChunkName: "examples"*/'./examples')} />} />
                        {/* <Redirect exact strict from="/examples/" to="/examples" /> */}
                        <Route path="/docs" render={(props) => <AsyncComponent examples {...props} loader={() => import(/* webpackChunkName: "docs"*/'./documentation')} />} />
                        <Route path="/test" render={(props) => <AsyncComponent examples {...props} loader={() => import(/* webpackChunkName: "test"*/'./test')} />} />
                    </React.Fragment>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app-root'));
