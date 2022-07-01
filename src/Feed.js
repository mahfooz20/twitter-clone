import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        {/* header */}
        <div className='feed--header'>
            <h2>Home</h2>
        </div>
        
        {/* tweetbox */}
        <TweetBox></TweetBox>
        
        {/* posts */}

        <Post></Post>

    </div>
  )
}

export default Feed