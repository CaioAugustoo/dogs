import React from "react";

import * as S from "./style";

import Image from "../Helper/Image/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => setModalPhoto(photo);

  return (
    <S.Photo onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </S.Photo>
  );
};

export default FeedPhotosItem;
