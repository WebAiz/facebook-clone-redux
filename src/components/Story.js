import React from 'react'
import '../styles/Story.css'
import { Avatar } from '@material-ui/core'
function Story({ img, profilePic, name }) {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='story'>
            <Avatar className="story__avatar" src={profilePic} />
            <h4>{name}</h4>
        </div>
    )
}

export default Story
