import React from "react";
import PropTypes from "prop-types";

function AlertHeading(props) {
    const {
        component: Component,
        className,
        children,
        ...others
    } = props;
    return (
        <Component className={`alert-heading ${className ? className : ''}`} {...others}>
            {children}
        </Component>
    )
}

AlertHeading.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object
    ]).isRequired,
    children: PropTypes.node
}
AlertHeading.defaultProps = {
    component: 'h4'
}

export default AlertHeading

