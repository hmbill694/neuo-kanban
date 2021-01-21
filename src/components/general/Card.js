import React from 'react'

const gridLayout = {
    display: 'grid'
}

const Card = ({ title = "fish", wrapperStyle, children }) => {
    return (
        <div className="rounded-2xl nm-convex-white-lg w-4/12 h-72 p-4" >
            <div>
                <h1>{title}</h1>
            </div>
            <content>
                {children}
            </content>
        </div>
    )
}

export default Card
