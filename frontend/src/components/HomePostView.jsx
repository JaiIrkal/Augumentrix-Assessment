import React from 'react'
import { NavLink } from 'react-router-dom'

function HomePostView({ id, title, description, datePosted, tag }) {

  var tags = tag.split(" ")

  return (
    <div className='home-post-view'>
      <h2 className='post-title-home'>{title}</h2>
      <h5 className='date'>{datePosted}</h5>
      <div className='hashtag-container'>
        {
          tags.map(tag => (
            <h4 key={tag} className='tag'>#{tag}</h4>
          ))
        }
      </div>
      {/* <h4 className='tag'>{tag}</h4> */}
      <div className="go-to-post">
        <NavLink to={`/post/${id}`}>View Post</NavLink>
      </div>
    </div>
  )
}

export default HomePostView
