import React, { useContext } from 'react'
import { AuthContext } from "../../context/authContext.js"
import "./stories.scss"

const Stories = () => {

  const { currentUser } = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id:1,
      name:"John Doe",
      img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id:2,
      name:"John Doe",
      img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id:3,
      name:"John Doe",
      img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id:4,
      name:"John Doe",
      img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ]

  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePicture} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story=>(
        <div className='story' key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))
      }
    </div>
  )
}

export default Stories