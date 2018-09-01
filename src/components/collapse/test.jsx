import React from "react";
import Collapse from "./";
// import Collapse from "@material-ui/core/Collapse";
// import withStyles from '@material-ui/core/styles/withStyles'

class CollapseTest extends React.Component {
  state = {
    in: true
  };
  toggleCollapse = () => {
    this.setState({ in: !this.state.in });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggleCollapse}>
          toggle
        </button>
        <Collapse appear unmountOnExit={false} in={this.state.in}>
          <div>{`
                classNames={{
                appear: 'my-appear',
                appearActive: 'my-active-appear',
                enter: 'my-enter',
                enterActive: 'my-active-enter',
                enterDone: 'my-done-enter,
                exit: 'my-exit',
                exitActive: 'my-active-exit',
                exitDone: 'my-done-exit,
                }}`}</div>
        </Collapse>
      </div>
    );
  }
}

export default CollapseTest;
