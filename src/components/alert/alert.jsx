import React from "react";
import PropTypes from "prop-types";
import warning from "warning";
import classnames from "classnames";
import Fade from "../fade";

const Alert_Variants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
];
function Alert(props) {
  const { variant, className, dismissible, show, children, TransitionComponent, ...other} = props;
  warning(
    Alert_Variants.indexOf(variant) > -1,
    `You probably need style a new variant ${variant}`
  );
  return (
    <TransitionComponent in={show} {...other}>
      <div
        className={classnames(
          "alert",
          { 
            ["alert-" + variant]: !!variant,
            'alert-dismissible': dismissible
            },

          className
        )}
      >
        {children}
      </div>
    </TransitionComponent>
  );
}

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dismissable: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  TransitionComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ])
};
Alert.defaultProps = {
  dismissible: false,
  variant: 'primary',
  show: true,
  TransitionComponent: Fade
};

export default Alert;
