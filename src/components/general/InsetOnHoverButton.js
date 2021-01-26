import React from 'react'

const InsetOnHoverButton = ({ label = 'Login', clickFunction, styles = 'w-32' }) => {
    return (
        <div className={`nm-convex-white-lg transition-all duration-1000 hover:shadow-none rounded-lg cursor-pointer ${styles}`} onClick={clickFunction}>
            <div className="hover:nm-inset-white transition-all duration-1000 h-full w-full p-4 rounded-lg">
                <button>{label}</button>
            </div>
        </div>
    )
}

export default InsetOnHoverButton
