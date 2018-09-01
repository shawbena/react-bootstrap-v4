import React from "react";
import PropTypes from "prop-types";
import Modal from "./modal";
import Fade from "../fade";

class Modal extends React.Component {
  static PropTypes = {};
  
  render() {
    const { 
        open,
        onClose,
        transitionDuration,
        transitionProps,
        TransitionComponent,
        ...other
    } = this.props;
    const { children, className, ...other } = this.props;
    return (
      <Modal
        open={open}
        {...other}
      >
        <TransitionComponent
            appear
            in={open}
            timeout={transitionDuration}
            {...transitionProps}
        >
          <div className={`modal-dialog`} role="document">
            {children}
          </div>
        </TransitionComponent>
      </Modal>
    );
  }
}
