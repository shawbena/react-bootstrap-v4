import React from "react";
import { CSSTransition } from "react-transition-group";
import "./fade.scss";
export default class FadeTransition extends React.Component {
  state = { in: false };
  toggleState = () => {
    this.setState({ in: !this.state.in });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggleState}>
          toggle
        </button>
        <CSSTransition
          unmountOnExit
          classNames="fade"
          timeout={3000}
          in={this.state.in}
        >
          <div>adfafasdfasfasfsadfas</div>
        </CSSTransition>
      </div>
    );
  }
}
