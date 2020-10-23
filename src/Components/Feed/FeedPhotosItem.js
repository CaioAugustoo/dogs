import React from "react";
import { Photo } from "./style";

const FeedPhotosItem = ({ photo }) => {
  return (
    <Photo>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Photo>
  );
};

export default FeedPhotosItem;
