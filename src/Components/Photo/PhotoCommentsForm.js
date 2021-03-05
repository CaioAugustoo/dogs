import React, { useState } from "react";
import * as S from "./style";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";

import useFetch from "../../Hooks/useFetch";

import { COMMENT_POST } from "../../services/apiUrl";

import Error from "../Helper/Error/Error";

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    setComment("");
    if (response.ok) setComments(comments => [...comments, json]);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.TextArea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></S.TextArea>
      <S.Button>
        <Enviar />
      </S.Button>
      <Error>{error}</Error>
    </S.Form>
  );
};

export default PhotoCommentsForm;
