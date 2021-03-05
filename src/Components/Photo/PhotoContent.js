import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

import Image from "../Helper/Image/Image";
import PhotoDelete from "./PhotoDelete";
import Title from "../Title/Title";
import PhotoComments from "./PhotoComments";

import { UserContext } from "../../UserContext";

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <S.Photo className={single && "photo__single"}>
      <S.PostImage>
        <Image src={photo.src} alt={photo.title} />
      </S.PostImage>
      <S.Details>
        <div>
          <S.Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id}></PhotoDelete>
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <S.Views>{photo.acessos}</S.Views>
          </S.Author>
          <Link to={`/foto/${photo.id}`}>
            <Title sectionTitle={photo.title}>{photo.title}</Title>
          </Link>
          <S.Attributes>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade > 1 ? "anos" : "ano"}
            </li>
          </S.Attributes>
        </div>
      </S.Details>
      <PhotoComments id={photo.id} comments={comments} />
    </S.Photo>
  );
};

export default PhotoContent;
