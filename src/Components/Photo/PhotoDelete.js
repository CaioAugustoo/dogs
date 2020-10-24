import React from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../services/apiUrl";
import { Delete } from "./style";

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
    <Delete disabled={loading ? true : false} onClick={handleClick}>
      {loading ? "Deletando..." : "Deletar"}
    </Delete>
  );
};

export default PhotoDelete;
