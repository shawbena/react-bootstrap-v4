import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Alerts from './alerts'
import Badge from './badge'
function Components() {
    return (
        <React.Fragment>
            <Route path="/docs/components/alerts" component={Alerts} />
            <Route path="/docs/components/badge" component={Badge} />
            <Route path="/docs/components" exact render={() => <Redirect to="/docs/components/alerts" />} />
        </React.Fragment>
    )
}

export default Components
