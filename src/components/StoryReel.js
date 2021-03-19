import React from 'react'
import '../styles/StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                img='https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                profilePic='https://images.unsplash.com/profile-1508350886988-bd399de11640?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                name="Nong Vang" />

            <Story
                img='https://images.unsplash.com/photo-1615584439532-6d8a7afa3452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'
                profilePic='https://images.unsplash.com/profile-1600379663418-83b31bb02b5bimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                name="Renata Lamez" />

            <Story
                img='https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                profilePic='https://images.unsplash.com/profile-1531317482485-8eb87d0610c9?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                name="Matt Bluejay" />

            <Story
                img='https://images.unsplash.com/photo-1512061203001-0c4d837c6882?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                profilePic='https://images.unsplash.com/profile-1531317482485-8eb87d0610c9?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                name="Aizada Turarova" />

            <Story
                img='https://images.unsplash.com/photo-1517690623533-ca77a9a4b402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
                profilePic='https://images.unsplash.com/profile-1487364728341-6b6a3c0fa1d1?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                name="Federico Beccari" />

        </div>
    )
}

export default StoryReel