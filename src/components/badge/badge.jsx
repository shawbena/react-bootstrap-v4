import React from "react";
import PropTypes from "prop-types";
import warning from "warning";
import classnames from "classnames";

const Badge_Colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
];
function Badge(props) {
  const {
    color,
    className,
    component: Component,
    pill,
    ...other
  } = props;
  warning(
    Badge_Colors.indexOf(color) > -1,
    `You probably need style a new badge color ${color}`
  );
  return (
      <Component
        className={classnames(
          "badge",
          {
              ["badge-" + color]: !!color,
              'badge-pill': pill
          },
          className
        )}
        {...other}
        />
  );
}

Badge.propTypes = {
  color: PropTypes.string.isRequired,
  pill: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]).isRequired
};
Badge.defaultProps = {
  color: "primary",
  component: 'span',
  pill: false,
};

export default Badge;
