import React, {useState} from "react"
import video from "../data/video.js";
import VideoInfo from "./VideoInfo"
import PageInfo from "./PageInfo"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  const [videoData, setVideoData] = useState(video)

  const [likes, setLikes] = useState(videoData.upvotes)
  const [disLikes, setDisLikes] = useState(videoData.downvotes)
  const [showComments, setShowComments] = useState(true)

  console.log(likes)
  function addLikes () {
    setLikes(likes=> likes + 1)
   }

  function removeLikes () {
    setDisLikes(disLikes => disLikes + 1)
  }

  function handleComments() {
    console.log("comments here")
    setShowComments(!showComments)

  }

  
  console.log(disLikes)

  return (
  
    <div className="App">
      
      <VideoInfo video={videoData}/>
      <PageInfo  video={videoData} like={addLikes} unlike={removeLikes} likes={likes} disLikes={disLikes} comments = {handleComments} />
      <Comments  showComment={showComments} />

    </div>
    
  );
}

export default App;
