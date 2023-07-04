import React from "react"

function Comments({video, showComment}) {

   console.log(showComment)

   let commentList = "comments here"

   // video.comments.map( (item) = )

   return (
      <h2>{(showComment) ? {commentList} : ""  }</h2>
   )
}

export default Comments
