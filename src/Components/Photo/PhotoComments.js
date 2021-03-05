import React, { useContext, useState, useRef, useEffect } from "react";
import * as S from "./style";

import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = props => {
  const [comments, setComments] = useState(() => props.comments);
  const commentSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <S.Comment ref={commentSection}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </S.Comment>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
