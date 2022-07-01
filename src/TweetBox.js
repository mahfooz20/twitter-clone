import React,{ useState} from 'react'
import './TweetBox.css'
import {Avatar,Button} from "@mui/material"
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore"; 


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        console.log(tweetMessage);

        const docRef = addDoc(collection(db,"posts"),{
            displayName: "Mahfooz Haque",
            username: "@189Mahfooz",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://media-exp2.licdn.com/dms/image/C4E03AQGaIBDLXfpPLQ/profile-displayphoto-shrink_400_400/0/1624429541848?e=1661990400&v=beta&t=uv2-qbYt64rNt4s_c8oLG8gs9yfIuMHDDXoLrmy6hL8"
           
        })

        setTweetMessage("");
        setTweetImage("");
    };
  return (
    <div className='tweetBox'>
        <form action="">
            <div className="tweetBox--input">
                <Avatar src="https://media-exp2.licdn.com/dms/image/C4E03AQGaIBDLXfpPLQ/profile-displayphoto-shrink_400_400/0/1624429541848?e=1661990400&v=beta&t=uv2-qbYt64rNt4s_c8oLG8gs9yfIuMHDDXoLrmy6hL8"></Avatar>
                <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?"
                    type="text"
                />
            </div>
            <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox--imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
            />

            <Button
                onClick={sendTweet}
                type="submit"
                className="tweetBox--tweetButton"
            >
                Tweet
            </Button>
        </form>
    </div>
  )
}

export default TweetBox