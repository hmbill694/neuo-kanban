import React from 'react'

const TaskCard = ({ id = -1 , title = 'default', status = 'pending', tags = ['fish', 'paste']}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{status}</p>
            <p>{tags}</p>
        </div>
    )
}

export default TaskCard
