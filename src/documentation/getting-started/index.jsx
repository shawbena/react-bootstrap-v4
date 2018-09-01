import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Introduction from './introduction'
import Contents from './contents'
function GettingStarted() {
    return (
        <React.Fragment>
            <Route path="/docs/getting-started/introduction" component={Introduction} />
            <Route path="docs/getting-started/contents" component={Contents} />
            <Route path="/docs/getting-started" exact render={() => <Redirect to="/docs/getting-started/introduction" />} />
        </React.Fragment>
    )
}

export default GettingStarted
