import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Sidebar from './components/sidebar'
import GettingStarted from './getting-started'
import Components from './modules'

function Documentation() {
    return (
        <div className="container-fluid">
            <div className="row flex-xl-nowrap">
                <Sidebar />
                <Route path="/docs/getting-started" component={GettingStarted} />
                <Route path="/docs/components" component={Components} />
                <Route path="/docs" exact render={() => <Redirect to="/docs/getting-started/introduction" />} />
            </div>
        </div>
    )
}

export default Documentation
