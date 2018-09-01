import React from 'react'

// import "../scss/skippy.scss"
export default function Skippy() {
    return (
        <a id="skippy" className="sr-only sr-only-focusable" href="#content">
            <div className="container">
                <span className="skiplink-text">Skip to main content</span>
            </div>
        </a>
    )
}
