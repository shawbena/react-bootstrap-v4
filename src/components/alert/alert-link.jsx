import React from "react";
import PropTypes from "prop-types";

function AlertLink(props) {
    const {
        component: Component,
        className,
        children,
        ...others
    } = props;
    return (
        <Component className={`alert-link ${className ? className : ''}`} {...others}>
            {children}
        </Component>
    )
}

AlertLink.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object
    ]).isRequired,
    children: PropTypes.node
}
AlertLink.defaultProps = {
    component: 'a'
}

export default AlertLink

