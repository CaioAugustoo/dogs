import React, { useEffect } from "react";

import { PHOTO_GET } from "../../services/apiUrl";
import { useParams } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";

import Error from "../Helper/Error/Error";
import Loading from "../Helper/Loading/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helper/Head/Head";

import { Container } from "../../style/GlobalStyle";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error erroMessage={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Container style={{ marginTop: "2rem" }}>
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </Container>
    );
  else return null;
};

export default Photo;
