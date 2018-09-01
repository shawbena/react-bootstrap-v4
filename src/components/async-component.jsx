import React from "react";
import PropTypes from 'prop-types';
// Somewhere in code
{/* <AsyncComponent loader={() => import("./SomeComponent")} /> */}

class AsyncComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Component: null };
  }
  componentDidMount() {
    this.props.loader().then(
      Component => {
        // debugger
        this.setState({ Component: Component.default })
      }
    );
  }
  render() {
    const { Component } = this.state;
    const {...props } = this.props;
    return Component ? <Component {...props} /> : <Placeholder />;
  }
}
AsyncComponent.propTypes = {
  loader: PropTypes.func.isRequired,
  Placeholder: PropTypes.node
};

function Placeholder () {
  return <div>加载中...</div>
}
export default AsyncComponent;
