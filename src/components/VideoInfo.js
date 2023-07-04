import React from "react"

function VideoInfo({video}) {

   console.log(video.title)

   return (
      
      <div className="App">
         <iframe
         width="919"
         height="525"
         src={video.embedUrl}
         frameBorder="0"
         allowFullScreen
         title="Thinking in React"
         />
         
         <h1>{video.title}</h1>
      </div>
      
      
   )
}

export default VideoInfo
