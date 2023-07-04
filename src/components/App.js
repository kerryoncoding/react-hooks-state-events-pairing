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

  console.log(likes)
  function addLikes () {
    console.log("adding likes")
    setLikes(likes=> likes + 1)
    videoData.upvotes = likes
    setVideoData(videoData)
  }

  function removeLikes () {
    console.log("Removing likes")
    setDisLikes(disLikes => disLikes + 1)
    videoData.downvotes = disLikes
    setVideoData(videoData)
  }

  
  console.log(disLikes)

  return (
  
    <div className="App">
      
      <VideoInfo video={videoData}/>
      <PageInfo  video={videoData} like={addLikes} unlike={removeLikes} />
      <Comments />
    </div>
    
  );
}

export default App;
