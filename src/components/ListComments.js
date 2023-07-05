import React from "react"
import Comment from "./Comment"

function ListComments({video, showComment}) {

   let temp = (video.comments)

   let commentList = temp.map((info)=>(
   <Comment 
      key= {info.id}
      user= {info.user}
      comment={info.comment}  
   />
   ))

   // video.comments.map( (item) = )

//   let commentList = video.title

   return (
      <div>
          {(showComment) ? commentList : ""  }
      </div>
   )
}

export default ListComments
