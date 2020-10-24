import React from "react";
import Image from "../Helper/Image/Image";
import { Photo } from "./style";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <Photo onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Photo>
  );
};

export default FeedPhotosItem;
