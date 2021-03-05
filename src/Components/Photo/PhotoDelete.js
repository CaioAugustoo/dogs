import React from "react";
import * as S from "./style";

import useFetch from "../../Hooks/useFetch";

import { PHOTO_DELETE } from "../../services/apiUrl";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <S.Delete disabled={loading ? true : false} onClick={handleClick}>
      {loading ? "Deletando..." : "Deletar"}
    </S.Delete>
  );
};

export default PhotoDelete;
