import React, { useEffect } from "react";
import * as S from "./style";

import { PHOTOS_GET } from "../../services/apiUrl";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";

import Error from "../Helper/Error/Error";
import Loading from "../Helper/Loading/Loading";

const FeedPhotos = ({ setInfinite, page, user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    };
    fetchPhotos();
  }, [page, request, setInfinite, user]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <S.Feed>
      {data?.map(photo => (
        <FeedPhotosItem
          setModalPhoto={setModalPhoto}
          key={photo.id}
          photo={photo}
        />
      ))}
    </S.Feed>
  );
};

export default FeedPhotos;
