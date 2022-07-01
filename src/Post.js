import React from 'react'
import './Post.css'
import {Avatar} from "@mui/material"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className='post'>
        <div className="post--avatar">
            <Avatar src="https://media-exp2.licdn.com/dms/image/C4E03AQGaIBDLXfpPLQ/profile-displayphoto-shrink_400_400/0/1624429541848?e=1661990400&v=beta&t=uv2-qbYt64rNt4s_c8oLG8gs9yfIuMHDDXoLrmy6hL8"></Avatar>
        </div>
        <div className="post--body">
            <div className="post--header">
                <div className="post--headerText">
                    <h3>Mahfooz Haque{" "}
                        <span className="post--headerSpecial">
                            <VerifiedUserIcon className='post--badge'></VerifiedUserIcon>
                            @mahfoozhaq189
                        </span>

                    </h3>
                </div>
                
                <div className="post--headerDescription">
                    <p>doing something</p>
                </div>
            </div>

            <img src="https://media-exp2.licdn.com/dms/image/C4E03AQGaIBDLXfpPLQ/profile-displayphoto-shrink_400_400/0/1624429541848?e=1661990400&v=beta&t=uv2-qbYt64rNt4s_c8oLG8gs9yfIuMHDDXoLrmy6hL8" alt="" />
            <div className="post--footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
          </div>
        </div>
    </div>
  )
}

export default Post