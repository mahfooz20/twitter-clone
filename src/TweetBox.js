import React from 'react'
import './TweetBox.css'
import {Avatar,Button} from "@mui/material"
function TweetBox() {
  return (
    <div className='tweetBox'>
        <form action="">
            <div className="tweetBox--input">
                <Avatar src="https://media-exp2.licdn.com/dms/image/C4E03AQGaIBDLXfpPLQ/profile-displayphoto-shrink_400_400/0/1624429541848?e=1661990400&v=beta&t=uv2-qbYt64rNt4s_c8oLG8gs9yfIuMHDDXoLrmy6hL8"></Avatar>
                <input type="text" placeholder="What's happening?" />
            </div>
            <input type="text" placeholder="Optional: Enter image URL" className='tweetBox--imageInput' />

            <Button className='tweetBox--tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox