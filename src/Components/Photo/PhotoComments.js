import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import { Comment } from "./style";

const PhotoComments = props => {
  const [comments, setComments] = useState(() => props.comments);
  const commentSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <Comment ref={commentSection}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </Comment>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
