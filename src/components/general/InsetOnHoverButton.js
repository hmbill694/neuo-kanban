import React from 'react'

const InsetOnHoverButton = ({ label = 'Login' }) => {
    return (
        <div className="nm-convex-white-lg transition-all duration-1000 hover:shadow-none rounded-lg w-32">
            <div className="hover:nm-inset-white transition-all duration-1000 h-full w-full p-4 rounded-lg">
                <button>{label}</button>
            </div>
        </div>
    )
}

export default InsetOnHoverButton
