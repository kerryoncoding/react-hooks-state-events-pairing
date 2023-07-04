import React from "react"

function PageInfo({video, like, unlike, likes, disLikes, comments}) {


   return (
      <div className="App">
         <p>{video.views} Views | {video.createdAt}</p>
         <button onClick={like}>{likes}👍</button>
         <button onClick={unlike}>{disLikes} 👎</button>
         <br />
         <button onClick={comments}>Hide Comments</button>
      </div>
      
   )
}

export default PageInfo
