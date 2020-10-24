import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Photo, Details, Views, Attributes, Author, PostImage } from "./style";
import Title from "../Title/Title";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <Photo>
      <PostImage>
        <img src={photo.src} alt={photo.title} />
      </PostImage>
      <Details>
        <div>
          <Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id}></PhotoDelete>
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <Views>{photo.acessos}</Views>
          </Author>
          <Title sectionTitle={photo.title}>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <Attributes>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade > 1 ? "anos" : "ano"}
            </li>
          </Attributes>
        </div>
      </Details>
      <PhotoComments id={photo.id} comments={comments} />
    </Photo>
  );
};

export default PhotoContent;
