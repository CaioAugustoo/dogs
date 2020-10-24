import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../services/apiUrl";
import Error from "../Helper/Error/Error";
import Loading from "../Helper/Loading/Loading";
import { Feed } from "./style";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    };
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <Feed>
      {data.map(photo => (
        <FeedPhotosItem
          setModalPhoto={setModalPhoto}
          key={photo.id}
          photo={photo}
        />
      ))}
    </Feed>
  );
};

export default FeedPhotos;
