import React from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { reflow, rmStyle } from "../../utils/transitions";

/**
 * The Fade transition.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
class Fade extends React.Component {
  onEnter = (node, appearing) => {
    node.style.opacity = 0;
    reflow(node);
    if (this.props.onEnter) {
      this.props.onEnter(node);
    }
  };
  onEntering = (node, appearing) => {
    const { timeout } = this.props;
    const enterTimeout = typeof timeout == "number" ? timeout : timeout.enter;
    node.style.webkitTransition = `opacity ${enterTimeout}ms ease`;
    node.style.transition = `opacity ${enterTimeout}ms ease`;
    node.style.opacity = 1;
    if (this.props.onEntering) {
      this.props.onEntering(node);
    }
  };

  onEntered = node => {
    rmStyle(node);
    if (this.props.onEntered) {
      this.props.onEntered(node);
    }
  };

  onExit = node => {
    node.style.opacity = 1;
    const { timeout } = this.props;
    const exitTimeout = typeof timeout == "number" ? timeout : timeout.exit;
    node.style.webkitTransition = `opacity ${exitTimeout}ms ease`;
    node.style.transition = `opacity ${exitTimeout}ms ease`;
    if (this.props.onExit) {
      this.props.onExit(node);
    }
  };
  onExiting = node => {
    node.style.opacity = 0;
    if (this.props.onExiting) {
      this.props.onExiting(node);
    }
  };
  onExited = node => {
    rmStyle(node);
    if (!this.props.unmountOnExit) {
      node.style.opacity = 0;
    }
    if (this.props.onExited) {
      this.props.onExited(node);
    }
  };

  render() {
    const props = { ...this.props };
    return (
      <Transition
        {...props}
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      />
    );
  }
}

Fade.propTypes = {
  ...Transition.propTypes,
  style: PropTypes.object
};

Fade.defaultProps = {
  timeout: {
    enter: 500,
    exit: 300
  },
  in: false,
  appear: false,
  unmountOnExit: true
};

export default Fade;
