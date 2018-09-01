import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import { reflow, rmStyle } from "../../utils/transitions";
import classnames from 'classnames'
import './collapse.scss'
/*
 * "collapse" transition
 * 内部使用 [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
*/
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.innerWrapper = React.createRef();
  }
  static propTypes = {
    ...Transition.PropTypes,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    style: PropTypes.object
  };
  static defaultProps = {
    appear: false,
    timeout: { enter: 500, exit: 300 },
    component: "div",
    unmountOnExit: false
  };
  onEnter = (node, appearing) => {
    node.style.height = "0px";
    node.style.overflow = "hidden";
    const { timeout } = this.props;
    const enterTimeout = typeof timeout == "number" ? timeout : timeout.enter;
    node.style.transition = `height ${enterTimeout}ms ease`;
    if (this.props.onEnter) {
      this.props.onEnter(node, isAppearing);
    }
  };
  onEntering = (node, appearing) => {
    node.style.height = this.wrapper.current.offsetHeight + "px";
    if (this.props.onEntering) {
      this.props.onEntering(node, isAppearing);
    }
  };

  onEntered = node => {
    node.style.height = 'auto';
    // rmStyle(node);
    if (this.props.onEntered) {
      this.props.onEntered(node, isAppearing);
    }
    // rmStyle(node);
  };

  onExit = node => {
    node.style.height = this.wrapper.current.offsetHeight + "px";
    node.style.overflow = "hidden";
    reflow(node);
    const { timeout } = this.props;
    const exitTimeout = typeof timeout == "number" ? timeout : timeout.exit;
    node.style.transition = `height ${exitTimeout}ms ease`;
    if (this.props.onExit) {
      this.props.onExit(node);
    }
  };
  onExiting = node => {
    node.style.height = "0px";
    if (this.props.onExiting) {
      this.props.onExiting(node);
    }
  };
  onExited = node => {
    rmStyle(node);
    if (!this.props.unmountOnExit) {
      node.style.overflow = "hidden";
      node.style.height = "0px";
    }
    if (this.props.onExited) {
      this.props.onExited(node);
    }
  };

  render() {
    const { component: Component, className, children, ...props } = this.props;
    return (
      <Transition
        {...props}
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status, childProps) => {
          return (
            <Component className={classnames('collapse__wrapper',
            {'collapse__entered': status == 'entered'},
             className)} {...childProps}>
              <div ref={this.wrapper}>
                {children}
              </div>
            </Component>
          );
        }}
      </Transition>
    );
  }
}
