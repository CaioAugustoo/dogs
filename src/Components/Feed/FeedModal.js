import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../services/apiUrl";
import Error from "../Helper/Error/Error";
import Loading from "../Helper/Loading/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { Modal } from "./style";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [request, photo.id, photo]);

  return (
    <Modal onClick={handleOutsideClick}>
      {error && <Error>{error}</Error>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </Modal>
  );
};

export default FeedModal;
