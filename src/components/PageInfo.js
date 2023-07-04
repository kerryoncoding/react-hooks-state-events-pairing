import React from "react"

function PageInfo({video, like, unlike}) {


   return (
      <div className="App">
         <p>{video.views} Views | {video.createdAt}</p>
         <button onClick={like}>{video.upvotes}👍</button>
         <button onClick={unlike}>{video.downvotes} 👎</button>
         <br />
         <button>Hide Comments</button>
      </div>
      
   )
}

export default PageInfo
