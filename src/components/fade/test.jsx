import React from "react";
import Transition from "react-transition-group/Transition";
import Fade from './'
class Test extends React.Component {
    state = {
        in: true,
        unmountOnExit: true
    }
    componentDidMount() {
        // setTimeout(() => this.setState({ in: true }), 2000)
    }
    toggleShow = () => {
        this.setState({ in: !this.state.in })
    }
  render() {
    return (
        <div className="test">
            <button className="btn btn-primary" onClick={this.toggleShow}>Toggle</button>
        <Fade appear in={this.state.in} unmountOnExit={this.state.unmountOnExit}>
            {/* 传给 Fade 的其他属性不应传递给 Fade 的子组件 */}
          <div>I'm a fade Transition!</div>
        </Fade>
        </div>
      )
  }
}
export default Test;
