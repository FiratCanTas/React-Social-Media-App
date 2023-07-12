import React from 'react'
import "./comments.scss"

const Comments = () => {

    //TEMPORARY
    const comments = [
        {
            id:1,
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at condimentum purus, eu semper mi.",
            name:"John Doe",
            userId:1,
            profilePicture:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id:2,
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum venenatis ornare. Aenean tempor sem.",
            name:"Jane Doe",
            userId:2,
            profilePicture:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }

    ]

  return (
    <div className='comments'>
        {
            comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))
        }
    </div>
  )
}

export default Comments