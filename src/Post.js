import React from 'react'
import './Post.css'
import {Avatar} from "@mui/material"

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className='post'>
        <div className="post--avatar">
            <Avatar src="https://media-exp2.licdn.com/dms/image/C4E03AQGaIBDLXfpPLQ/profile-displayphoto-shrink_400_400/0/1624429541848?e=1661990400&v=beta&t=uv2-qbYt64rNt4s_c8oLG8gs9yfIuMHDDXoLrmy6hL8"></Avatar>
        </div>
    </div>
  )
}

export default Post